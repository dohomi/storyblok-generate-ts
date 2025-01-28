import { describe, expect, jest, test } from "@jest/globals";
import storyblokToTypescript from "./index";

jest.mock("fs");

const makeSBComponent = (schema: Record<string, any>) => ({
    components: [
        {
            name: "ResourceName",
            schema,
        },
    ],
});

const prepareString = (str: string) => str.replace(/\s/g, "").trim();

const makeExpectString = (str: string) =>
    prepareString(`export interface ResourceNameStoryblok { 
  ${str}
  _uid: string;
  component: "ResourceName";
  [k: string]: any;
}`);

describe("storyblokToTypescript", () => {
    test("Should parse text fields", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                title: { type: "text" },
                requiredTitle: { type: "text", required: true },
            }),
        });
        const mainType = prepareString(types[2]);
        const expectation = makeExpectString(`
            title?: string;
            requiredTitle: string;
        `);

        expect(mainType).toBe(expectation);
    });

    test("Should parse boolean fields", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                myField: { type: "boolean" },
            }),
        });
        const mainType = prepareString(types[2]);
        const expectation = makeExpectString(`
            myField: boolean;
        `);

        expect(mainType).toBe(expectation);
    });

    test("Should parse textarea fields", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                myField: { type: "textarea" },
                myRequiredField: { type: "textarea", required: true },
            }),
        });
        const mainType = prepareString(types[2]);
        const expectation = makeExpectString(`
            myField?:string;
            myRequiredField:string;
        `);

        expect(mainType).toBe(expectation);
    });

    test("Should parse blok fields", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                myField: { type: "bloks" },
                myRequiredField: { type: "bloks", required: true },
            }),
        });
        const mainType = prepareString(types[2]);
        const expectation = makeExpectString(`
            myField?:ResourceNameStoryblok[];
            myRequiredField:ResourceNameStoryblok[];
        `);

        expect(mainType).toBe(expectation);
    });

    test("Should parse number fields", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                myField: { type: "number" },
                myRequiredField: { type: "number", required: true },
            }),
        });
        const mainType = prepareString(types[2]);
        const expectation = makeExpectString(`
            myField?:string;
            myRequiredField:string;
        `);

        expect(mainType).toBe(expectation);
    });

    test("Should parse image fields", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                myField: { type: "image" },
                myRequiredField: { type: "image", required: true },
            }),
        });
        const mainType = prepareString(types[2]);
        const expectation = makeExpectString(`
            myField?:string;
            myRequiredField:string;
        `);

        expect(mainType).toBe(expectation);
    });

    test("Should parse markdown fields", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                myField: { type: "markdown" },
                myRequiredField: { type: "markdown", required: true },
            }),
        });
        const mainType = prepareString(types[2]);
        const expectation = makeExpectString(`
            myField?:string;
            myRequiredField:string;
        `);

        expect(mainType).toBe(expectation);
    });

    test("Should parse richtext fields", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                myField: { type: "richtext" },
                myRequiredField: { type: "richtext", required: true },
            }),
        });

        const richtextType = prepareString(types[2])
        const mainType =  prepareString(types[3]);

        const richtextTypeExpect = prepareString(`export interface RichtextStoryblok {
            type: string;
            content?: RichtextStoryblok[];
            marks?: RichtextStoryblok[];
            attrs?: any;
            text?: string;
            [k: string]: any;
        }`);

        const mainTypeExpect = makeExpectString(`
            myField?: RichtextStoryblok;
            myRequiredField: RichtextStoryblok;
        `);

        expect(richtextType).toBe(richtextTypeExpect);
        expect(mainType).toBe(mainTypeExpect);
    });

    test("Should parse datetime fields", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                myField: { type: "datetime" },
                myRequiredField: { type: "datetime", required: true },
            }),
        });
        const mainType = prepareString(types[2]);
        const expectation = makeExpectString(`
            myField?:string;
            myRequiredField:string;
        `);

        expect(mainType).toBe(expectation);
    });

    test("Should parse asset fields", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                main_image: {
                    type: "asset",
                    filetypes: ["images"],
                    required: false,
                    pos: 2,
                },
            }),
        });
        const assetType = prepareString(types[2])
        const mainType =  prepareString(types[3]);

        const assetTypeExpect = prepareString(`export interface AssetStoryblok {
            _uid?: string;
            id: number | null;
            alt: string | null;
            name: string;
            focus: string | null;
            source: string | null;
            title: string | null;
            filename: string;
            copyright: string | null;
            fieldtype?: string;
            meta_data?: null|{[k:string]:any;};
            is_external_url?: boolean;
            [k: string]: any;
        }`);

        const mainTypeExpect = makeExpectString(`
            main_image?: AssetStoryblok;
        `);
        expect(assetType).toBe(assetTypeExpect);
        expect(mainType).toBe(mainTypeExpect);
    });

    test("Should parse option fields", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                optionsField: {
                    type: "option",
                    required: true,
                    source: "internal_stories",
                    filter_content_type: ["foo", "bar"],
                    pos: 0,
                },
                singleOptionsField: {
                    type: "option",
                    source: "internal_stories",
                    filter_content_type: "foo",
                    pos: 0,
                },
                optionsField2: {
                    type: "options",
                    required: true,
                    source: "internal_stories",
                    filter_content_type: ["foo", "bar"],
                    pos: 0,
                },
                singleOptionsField2: {
                    type: "options",
                    source: "internal_stories",
                    filter_content_type: "foo",
                    pos: 0,
                },
                manualOptions: {
                    type: "option",
                    options: [
                        {
                            name: "Option Value 1",
                            value: "optionValue1",
                        },
                        {
                            name: "Option Value 2",
                            value: "optionValue2",
                        },
                    ],
                    default_value: "optionValue1",
                },
                noSourceOptions: {
                    type: "options",
                },
            }),
        });
        const mainType = prepareString(types[2]);
        const expectation = makeExpectString(`
            optionsField: StoryblokStory<FooStoryblok> | StoryblokStory<BarStoryblok> | string;
            singleOptionsField?: StoryblokStory<FooStoryblok> | string;
            optionsField2: (StoryblokStory<FooStoryblok> | StoryblokStory<BarStoryblok> | string)[];
            singleOptionsField2?: (StoryblokStory<FooStoryblok> | string)[];
            manualOptions?: "" | "optionValue1" | "optionValue2";
            noSourceOptions?: any[];
        `);
        expect(mainType).toBe(expectation);
    });

    test("should parse section fields", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                section: {
                    //a section is not a field, but a grouping of fields @see https://www.storyblok.com/docs/guide/essentials/content-structures#field
                    type: "section",
                    keys: ["section1", "section2"],
                },
            }),
        });
        const mainType = prepareString(types[2]);
        const expectation = makeExpectString(`
            section?: any;
        `);
        expect(mainType).toBe(expectation);
    });

    test("Should parse multiasset fields", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                multiAssetField: {
                    type: "multiasset",
                    display_name: "Image Assets",
                },
            }),
        });

        const assetType =  prepareString(types[2]);
        const mainType =  prepareString(types[3]);

        const assetTypeExpect =
            prepareString(`export type MultiassetStoryblok = {
            alt?: string;
            copyright?: string;
            id: number;
            filename: string;
            name: string;
            title?: string;
            [k: string]: any;
        }[];`);

        const mainTypeExpect = makeExpectString(`
            multiAssetField?: MultiassetStoryblok;
        `);
        expect(assetType).toBe(assetTypeExpect);
        expect(mainType).toBe(mainTypeExpect);
    });

    test("Should parse table fields", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                tableField: {
                    type: "table",
                },
            }),
        });

        const tableType =  prepareString(types[2]);
        const mainType =  prepareString(types[3]);

        const tableTypeExpect = prepareString(`export interface TableStoryblok {
      thead: {
        _uid: string;
        value?: string;
        component: number;
        [k: string]: any;
      }[];
      tbody: {
        _uid: string;
        body: {
          _uid?: string;
          value?: string;
          component?: number;
          [k: string]: any;
        }[];
        component: number;
        [k: string]: any;
      }[];
      [k: string]: any;
    }
    `);

        const mainTypeExpect =
            prepareString(`export interface ResourceNameStoryblok {
      tableField?: TableStoryblok;
      _uid: string;
      component: "ResourceName";
      [k: string]: any;
    }`);
        expect(tableType).toBe(tableTypeExpect);
        expect(mainType).toBe(mainTypeExpect);
    });

    test("Should allow empty suffix", async () => {
        const types = await storyblokToTypescript({
            componentsJson: makeSBComponent({
                title: { type: "text" },
                requiredTitle: { type: "text", required: true },
            }),
            titleSuffix: "",
        });
        const mainType = prepareString(types[2]);

        const expectation = prepareString(`export interface ResourceName {
            title?: string;
            requiredTitle: string;
            _uid: string;
            component: "ResourceName";
            [k: string]: any;
          }`);

        expect(mainType).toBe(expectation);
    });
});
