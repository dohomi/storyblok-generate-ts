export interface AccordionStoryblok {
  body?: AccordionItemStoryblok[];
  use_plus?: boolean;
  square?: boolean;
  restrict_one?: boolean;
  _uid: string;
  component: "accordion";
  [k: string]: any;
}

export interface AccordionItemStoryblok {
  title?: string;
  title_custom?: (HeadlineStoryblok | FlexRowStoryblok)[];
  body?: (
    | ParagraphStoryblok
    | RowStoryblok
    | HeadlineStoryblok
    | ImageStoryblok
    | TableStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | RichTextEditorStoryblok
  )[];
  use_plus_icon?: boolean;
  _uid: string;
  component: "accordion_item";
  [k: string]: any;
}

export interface AuthContainerStoryblok {
  display?: "" | "hide_logged_in" | "require_logged_in";
  require_role?: string;
  hide_on_role?: string;
  body?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  _uid: string;
  component: "auth_container";
  [k: string]: any;
}

export interface AuthFormStoryblok {
  account_delete_body?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  account_update_button?: ButtonStoryblok[];
  account_delete_button?: ButtonStoryblok[];
  _uid: string;
  component: "auth_form";
  [k: string]: any;
}

export interface AvatarStoryblok {
  variant?: "" | "circle" | "rounded" | "square";
  size?: "" | "dense" | "large" | "xlarge";
  custom_size?: number;
  font_size?: number;
  image?: string;
  letter?: string;
  _uid: string;
  component: "avatar";
  [k: string]: any;
}

export interface BackgroundStoryblok {
  image?: string;
  alternative_image?: string;
  priority?: boolean;
  disable_lazy_loading?: boolean;
  toggle_image_loading?: boolean;
  hide_image_on_breakpoint?: "" | "xs" | "sm" | "md";
  background_size?: "" | "auto" | "contain" | "cover" | "initial" | "inherit";
  image_focal_point?: string;
  background_position?: string;
  disable_smart_crop?: boolean;
  height?: string;
  shadow_effect?: "" | "faded" | "float" | "hover" | "lightTop" | "bouncy" | "soft" | "flowUp";
  elevation?: number;
  background_elements?: (
    | BackgroundElementItemStoryblok
    | BackgroundElementColorStoryblok
    | BackgroundElementGradientStoryblok
  )[];
  border_size?: number;
  border_radius?: string;
  border_style?: "" | "solid" | "dashed" | "dotted";
  _uid: string;
  component: "background";
  [k: string]: any;
}

export interface BackgroundElementColorStoryblok {
  _uid: string;
  component: "background_element_color";
  [k: string]: any;
}

export interface BackgroundElementGradientStoryblok {
  value?: string;
  _uid: string;
  component: "background_element_gradient";
  [k: string]: any;
}

export interface BackgroundElementItemStoryblok {
  url?: string;
  size?: "" | "contain" | "cover";
  size_fixed?: string;
  repeat?: "" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space";
  position_horizontal?: "" | "left" | "center" | "right";
  position_vertical?: "" | "top" | "center" | "bottom";
  _uid: string;
  component: "background_element_item";
  [k: string]: any;
}

export interface BookingStoryblok {
  booking?: string;
  _uid: string;
  component: "booking";
  [k: string]: any;
}

export interface BookingFormStoryblok {
  _uid: string;
  component: "Booking Form";
  [k: string]: any;
}

export interface BottomNavigationStoryblok {
  body?: BottomNavigationItemStoryblok[];
  styles?: StylesStoryblok[];
  styles_mobile?: StylesStoryblok[];
  styles_tablet?: StylesStoryblok[];
  stick_to_bottom?: boolean;
  styles_hover?: StylesStoryblok[];
  _uid: string;
  component: "bottom_navigation";
  [k: string]: any;
}

export interface BottomNavigationItemStoryblok {
  label?: HeadlineStoryblok[];
  icon?: IconStoryblok[];
  show_label?: boolean;
  link?:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: "story";
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: "asset" | "url";
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: "email";
        [k: string]: any;
      };
  open_external?: boolean;
  _uid: string;
  component: "bottom_navigation_item";
  [k: string]: any;
}

export interface ButtonStoryblok {
  variant?: "" | "outlined" | "raised" | "unelevated" | "fab";
  size?: "" | "dense" | "lm-button-large" | "lm-button-xlarge";
  color?: "" | "primary" | "secondary" | "primary_text" | "secondary_text" | "light" | "dark";
  corners?: "" | "lm-button-shaped" | "lm-button-square";
  font?: "" | "alt1" | "alt2" | "alt3" | "alt4";
  align?: "" | "flex-start" | "flex-end";
  properties?: ("disable-ripple" | "disable-shadow" | "no-linebreak" | "fullWidth")[];
  label?: string;
  open_external?: boolean;
  image?: string;
  link?:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: "story";
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: "asset" | "url";
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: "email";
        [k: string]: any;
      };
  styles?: StylesStoryblok[];
  styles_mobile?: StylesStoryblok[];
  styles_tablet?: StylesStoryblok[];
  styles_hover?: StylesStoryblok[];
  image_size?: "" | "large" | "xlarge" | "small" | "xsmall" | "medium";
  on_click_function?: string;
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface ButtonListStoryblok {
  property?: ("margin_left" | "align_right")[];
  body?: ButtonStoryblok[];
  _uid: string;
  component: "button_list";
  [k: string]: any;
}

export interface ButtonSpeechTextStoryblok {
  trigger?: ButtonStoryblok[];
  full_page?: boolean;
  _uid: string;
  component: "button_speech_text";
  [k: string]: any;
}

export interface CardListStoryblok {
  variant?: (
    | "over_media"
    | "title_top"
    | "font_white"
    | "raised"
    | "header_top"
    | "text_top_bottom"
    | "text_bottom"
    | "text_center"
    | "text_align_center"
    | "text_align_right"
    | "overlay_content_no_space"
    | "equal-heights"
  )[];
  border_radius?: "0" | "2" | "4" | "";
  shadow_effect?: "" | "faded" | "float" | "hover" | "lightTop" | "bouncy" | "soft" | "flowUp";
  elevation?: "" | "0" | "1" | "2" | "4" | "8" | "12" | "16" | "20" | "3" | "5" | "6" | "24" | "22";
  body?: CardListItemStoryblok[];
  image_ratio?: "" | "16x9" | "1x1" | "4x3" | "3x2" | "2x3" | "1x3" | "3x1" | "2.85x1";
  image_size?: "" | "cover" | "contain" | "initial" | "auto" | "none";
  hide_image?: boolean;
  column_gap?: "" | "0" | "2" | "4" | "8" | "16" | "24" | "32";
  column_count?: "" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  column_count_tablet?: "" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  column_count_phone?: "" | "1" | "2" | "3" | "4";
  description_max_character?: number;
  card_actions_disable_spacing?: boolean;
  title_typography?:
    | ""
    | "headline2"
    | "headline3"
    | "headline4"
    | "headline5"
    | "headline6"
    | "subtitle1"
    | "subtitle2"
    | "caption"
    | "body1"
    | "body2"
    | "overline";
  title_tag?: "" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  subtitle_typography?:
    | ""
    | "headline1"
    | "headline2"
    | "headline3"
    | "headline4"
    | "headline5"
    | "headline6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption";
  subtitle_tag?: "" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  description_typography?: "" | "headline4" | "headline5" | "headline6" | "body1" | "body2" | "caption" | "overline";
  title_custom?: HeadlineStoryblok[];
  subtitle_custom?: HeadlineStoryblok[];
  description_custom?: HeadlineStoryblok[];
  date_format?: DateTimeFormatStoryblok[];
  image_border_radius?: string;
  image_margin?: string;
  _uid: string;
  component: "card_list";
  [k: string]: any;
}

export interface CardListItemStoryblok {
  image?: string;
  action_width?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  body?: (ParagraphStoryblok | HeadlineStoryblok | RowStoryblok | TableStoryblok | ImageStoryblok | ButtonStoryblok)[];
  action_headline?: HeadlineStoryblok[];
  card_actions_body?: FlexRowStoryblok[];
  link?:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: "story";
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: "asset" | "url";
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: "email";
        [k: string]: any;
      };
  open_external?: boolean;
  on_click_function?: string;
  _uid: string;
  component: "card_list_item";
  [k: string]: any;
}

export interface CategoryStoryblok {
  name?: string;
  image?: string;
  _uid: string;
  component: "category";
  [k: string]: any;
}

export interface CategoryBoxStoryblok {
  display?: "" | "autocomplete_checkbox";
  autocomplete_label?: string;
  autocomplete_placeholder?: string;
  autocomplete_variant?: "" | "outlined" | "filled" | "standard";
  filter_categories?: any[];
  match_all_tags?: boolean;
  max_height?: number;
  _uid: string;
  component: "category_box";
  [k: string]: any;
}

export interface ChatFacebookStoryblok {
  page_id?: string;
  disable_lazy?: boolean;
  _uid: string;
  component: "chat_facebook";
  [k: string]: any;
}

export interface ChatTawktoStoryblok {
  account?: string;
  disable_lazy?: boolean;
  _uid: string;
  component: "chat_tawkto";
  [k: string]: any;
}

export interface ChatWhatsappStoryblok {
  phone_number?: string;
  tooltip?: string;
  size?: "" | "small" | "medium" | "large";
  _uid: string;
  component: "chat_whatsapp";
  [k: string]: any;
}

export interface ColumnStoryblok {
  width_general?:
    | ""
    | "12"
    | "11"
    | "10"
    | "9"
    | "8"
    | "7"
    | "6"
    | "5"
    | "4"
    | "3"
    | "2"
    | "1"
    | "false"
    | "auto"
    | "true";
  width_tablet?: "" | "8" | "7" | "6" | "5" | "4" | "3" | "2" | "1" | "false" | "auto" | "true";
  width_phone?: "" | "4" | "3" | "2" | "1" | "false" | "auto" | "true";
  body?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  background?: BackgroundStoryblok[];
  justify?: "" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  align_content?: "" | "flex-start" | "flex-end" | "center" | "space-around" | "space-between" | "stretch";
  align_items?: "" | "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  styles?: StylesStoryblok[];
  styles_mobile?: StylesStoryblok[];
  styles_tablet?: StylesStoryblok[];
  styles_hover?: StylesStoryblok[];
  _uid: string;
  component: "column";
  [k: string]: any;
}

export interface DateHeadlineStoryblok {
  font_size?: string;
  line_height?: string;
  letter_spacing?: string;
  typography?:
    | ""
    | "headline1"
    | "headline2"
    | "headline3"
    | "headline4"
    | "headline5"
    | "headline6"
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "subtitle1"
    | "subtitle2"
    | "overline";
  tag?: "" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  font?: "" | "alt1" | "alt2" | "alt3" | "alt4";
  align?: "" | "left" | "center" | "right" | "justify";
  color?: "" | "primary" | "secondary" | "textPrimary" | "textSecondary" | "error";
  text?: string;
  text_xs?: string;
  support_linebreak?: boolean;
  _uid: string;
  component: "date_headline";
  [k: string]: any;
}

export interface DateTimeFormatStoryblok {
  year?: "" | "2-digit" | "numeric";
  month?: "" | "long" | "short" | "narrow" | "numeric" | "2-digit";
  day?: "" | "2-digit" | "numeric";
  hour?: "" | "2-digit" | "numeric";
  minute?: "" | "2-digit" | "numeric";
  second?: "" | "long";
  weekday?: "" | "short" | "long" | "narrow";
  dayPeriod?: "" | "long" | "short" | "narrow";
  hide_time?: boolean;
  dateStyle?: "" | "full" | "long" | "medium" | "short";
  timeStyle?: "" | "full" | "long" | "medium" | "short";
  _uid: string;
  component: "date_time_format";
  [k: string]: any;
}

export interface DateTimeHeadlineStoryblok {
  date?: string;
  headline?: HeadlineStoryblok[];
  date_format?: DateTimeFormatStoryblok[];
  _uid: string;
  component: "date_time_headline";
  [k: string]: any;
}

export interface DialogStoryblok {
  title?: string;
  custom_title?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  fullscreen?: "" | "xs" | "sm" | "md" | "lg" | "xl";
  prevent_click_outside?: boolean;
  slide_up?: boolean;
  no_padding?: boolean;
  prevent_close_button?: boolean;
  trigger?: (ButtonStoryblok | HeadlineStoryblok | ImageStoryblok | IconStoryblok)[];
  body?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  _uid: string;
  component: "dialog";
  [k: string]: any;
}

export interface DividerStoryblok {
  width?: number;
  size?: number;
  _uid: string;
  component: "divider";
  [k: string]: any;
}

export interface DocumentStoryblok {
  title?: string;
  description?: string;
  file?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  categories?: any[];
  _uid: string;
  component: "document";
  [k: string]: any;
}

export interface DocumentCategoryStoryblok {
  name?: string;
  _uid: string;
  component: "document_category";
  [k: string]: any;
}

export interface EcommerceCheckoutStoryblok {
  integration?: (
    | EcommerceFastspringProductStoryblok
    | EcommerceShopifyIframeStoryblok
    | EcommerceSnipcartProductStoryblok
  )[];
  trigger?: (ButtonStoryblok | ImageStoryblok | IconStoryblok | HeadlineStoryblok)[];
  _uid: string;
  component: "ecommerce_checkout";
  [k: string]: any;
}

export interface EcommerceFastspringConfigStoryblok {
  url?: string;
  data_storefront?: string;
  data_accesss_key?: string;
  _uid: string;
  component: "ecommerce_fastspring_config";
  [k: string]: any;
}

export interface EcommerceFastspringProductStoryblok {
  path?: string;
  text_only?: boolean;
  on_successful_redirect?:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: "story";
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: "asset" | "url";
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: "email";
        [k: string]: any;
      };
  _uid: string;
  component: "ecommerce_fastspring_product";
  [k: string]: any;
}

export interface EcommercePaypalConfigStoryblok {
  sdk_client_id: string;
  _uid: string;
  component: "ecommerce_paypal_config";
  [k: string]: any;
}

export interface EcommercePaypalProductStoryblok {
  price?: number;
  _uid: string;
  component: "ecommerce_paypal_product";
  [k: string]: any;
}

export interface EcommerceShopifyCheckoutStoryblok {
  handle?: string;
  _uid: string;
  component: "ecommerce_shopify_checkout";
  [k: string]: any;
}

export interface EcommerceShopifyConfigStoryblok {
  image_container_height?: number;
  hide_description?: boolean;
  product_title?: HeadlineStoryblok[];
  product_variant_name?: HeadlineStoryblok[];
  product_price?: HeadlineStoryblok[];
  product_add_to_cart?: ButtonStoryblok[];
  product_checkout?: ButtonStoryblok[];
  product_variant?: ButtonStoryblok[];
  product_active_variant?: ButtonStoryblok[];
  product_description_trigger?: (ButtonStoryblok | HeadlineStoryblok | ImageStoryblok | IconStoryblok)[];
  sdk_url?: string;
  floating_button_color?: "" | "primary" | "secondary" | "success" | "info" | "warning";
  domain?: string;
  access_token?: string;
  currency_prefix?: string;
  floating_badge_color?: "" | "primary" | "secondary" | "error" | "success" | "info" | "warning";
  columns_justify?: "" | "space-between" | "space-around" | "space-evenly" | "center" | "flex-start" | "flex-end";
  columns_align_items?: "" | "center" | "flex-start" | "flex-end" | "stretch";
  cart_toolbar?: HeadlineStoryblok[];
  cart_footer?: HeadlineStoryblok[];
  cart_checkout?: ButtonStoryblok[];
  cart_footer_additional?: HeadlineStoryblok[];
  columns_first_width?: "" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "auto" | "true";
  columns_second_width?:
    | ""
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "auto"
    | "true";
  carousel_auto_play?: boolean;
  carousel_hide_indicator?: boolean;
  _uid: string;
  component: "ecommerce_shopify_config";
  [k: string]: any;
}

export interface EcommerceShopifyIframeStoryblok {
  product_id?: number;
  button_destination?: "" | "cart" | "modal" | "checkout";
  layout?: "" | "vertical" | "horizontal";
  width?: string;
  is_button?: boolean;
  _uid: string;
  component: "ecommerce_shopify_iframe";
  [k: string]: any;
}

export interface EcommerceSnipcartConfigStoryblok {
  url?: string;
  data_api_key?: string;
  _uid: string;
  component: "ecommerce_snipcart_config";
  [k: string]: any;
}

export interface EcommerceSnipcartProductStoryblok {
  data_id?: number;
  price?: number;
  description?: string;
  name?: string;
  image_url?: string;
  _uid: string;
  component: "ecommerce_snipcart_product";
  [k: string]: any;
}

export interface ErrorPageStoryblok {
  title?: string;
  body?: (SectionStoryblok | SectionParallaxStoryblok | SectionVideoBgStoryblok | SliderStoryblok)[];
  _uid: string;
  component: "error_page";
  [k: string]: any;
}

export interface EventStoryblok {
  title: string;
  start: string;
  end?: string;
  all_day?: boolean;
  expire_event_date?: string;
  category?: string;
  multiple_event_dates?: EventDateStoryblok[];
  date_format?: DateTimeFormatStoryblok[];
  image?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  description?: string;
  content?: any;
  body?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  _uid: string;
  component: "event";
  [k: string]: any;
}

export interface EventCalendarStoryblok {
  language?: "" | "de" | "en" | "fr" | "it" | "es";
  view?: "" | "month" | "week" | "day" | "agenda";
  views?: ("month" | "week" | "day" | "agenda")[];
  scroll_to_time?: number;
  _uid: string;
  component: "event_calendar";
  [k: string]: any;
}

export interface EventCategoryStoryblok {
  title?: string;
  _uid: string;
  component: "event_category";
  [k: string]: any;
}

export interface EventDateStoryblok {
  start?: string;
  end?: string;
  all_day?: boolean;
  title?: string;
  _uid: string;
  component: "event_date";
  [k: string]: any;
}

export interface FastspringProductStoryblok {
  data_fsc_item_path?: string;
  _uid: string;
  component: "fastspring_product";
  [k: string]: any;
}

export interface FlexRowStoryblok {
  column?: boolean;
  column_mobile_only?: boolean;
  full_height?: boolean;
  justify?: "" | "space-around" | "center" | "space-between" | "space-evenly" | "flex-start" | "flex-end";
  align_content?: "" | "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around";
  align_items?: "" | "center" | "baseline" | "flex-start" | "flex-end" | "stretch";
  gap?: number;
  body?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  styles?: StylesStoryblok[];
  styles_mobile?: StylesStoryblok[];
  styles_tablet?: StylesStoryblok[];
  styles_hover?: StylesStoryblok[];
  _uid: string;
  component: "flex_row";
  [k: string]: any;
}

export interface FormStoryblok {
  api?: string;
  body?: (ButtonStoryblok | ParagraphStoryblok)[];
  success_body?: RichTextEditorStoryblok[];
  error_body?: ParagraphStoryblok[];
  error_msg_required?: string;
  fields_min_width?: number;
  submit_button: ButtonStoryblok[];
  fields_border?: "" | "standard" | "filled" | "outlined";
  fields_full_width?: boolean;
  fields_gap?: "" | "0" | "2" | "4" | "8" | "16" | "24";
  inline?: boolean;
  label_as_placeholder?: boolean;
  _uid: string;
  component: "form";
  [k: string]: any;
}

export interface FormBuilderStoryblok {
  endpoint?: string;
  success_message?: (HeadlineStoryblok | RichTextEditorStoryblok | FlexRowStoryblok)[];
  fields?: (
    | FormCheckboxStoryblok
    | FormSelectStoryblok
    | FormTextfieldStoryblok
    | RichTextEditorStoryblok
    | DividerStoryblok
    | HeadlineStoryblok
  )[];
  submit?: ButtonStoryblok[];
  variant?: "" | "standard" | "filled" | "outlined";
  margin?: "" | "dense" | "normal" | "none";
  full_width?: boolean;
  spacing?: number;
  form_inline?: boolean;
  additional_fields?: FormHiddenFieldStoryblok[];
  _uid: string;
  component: "form_builder";
  [k: string]: any;
}

export interface FormCheckboxStoryblok {
  name: string;
  label?: string;
  value?: string;
  required?: boolean;
  _uid: string;
  component: "form_checkbox";
  [k: string]: any;
}

export interface FormContainerStoryblok {
  form?: string;
  additional_fields?: FormHiddenFieldStoryblok[];
  success_message?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  _uid: string;
  component: "form_container";
  [k: string]: any;
}

export interface FormHiddenFieldStoryblok {
  name: string;
  value: string;
  is_number?: boolean;
  _uid: string;
  component: "form_hidden_field";
  [k: string]: any;
}

export interface FormSelectStoryblok {
  options?: FormSelectOptionStoryblok[];
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: "" | "multi-select" | "checkbox" | "radio";
  _uid: string;
  component: "form_select";
  [k: string]: any;
}

export interface FormSelectOptionStoryblok {
  value?: string;
  label?: string;
  _uid: string;
  component: "form_select_option";
  [k: string]: any;
}

export interface FormTextfieldStoryblok {
  textarea?: boolean;
  rows?: number;
  max_rows?: number;
  name: string;
  label?: string;
  placeholder?: string;
  type?: "" | "email" | "number";
  required?: boolean;
  help_text?: string;
  _uid: string;
  component: "form_textfield";
  [k: string]: any;
}

export interface GalleryStoryblok {
  space_between_images?: number;
  space_between_rows?: number;
  image_height?: number;
  content?: GalleryRowStoryblok[];
  rotate?: number;
  image_style?: StylesStoryblok[];
  _uid: string;
  component: "gallery";
  [k: string]: any;
}

export interface GalleryRowStoryblok {
  content?: ImageCoreStoryblok[];
  scroll_to_left?: boolean;
  _uid: string;
  component: "gallery_row";
  [k: string]: any;
}

export interface GlobalStoryblok {
  setup_favicon?: string;
  website_logo?: string;
  website_logo_xs?: string;
  website_logo_invert_xs?: string;
  website_logo_invert?: string;
  image_loading?: ("disable_background" | "disable_image" | "disable_video" | "disable_list")[];
  website_title?: string;
  website_slogan?: string;
  setup_language?: string;
  setup_supported_languages?: string;
  setup_google_analytics?: string;
  setup_google_site_verification?: string;
  setup_facebook_pixel?: string;
  setup_ad_roll_adv_id?: string;
  setup_ad_roll_pix_id?: string;
  pwa_app_name?: string;
  pwa_app_description?: string;
  promotion?: (SliderStoryblok | SectionStoryblok | SectionVideoBgStoryblok)[];
  tawkto?: string;
  chat_button?: (ChatFacebookStoryblok | ChatTawktoStoryblok | ChatWhatsappStoryblok)[];
  snackbars?: SnackbarStoryblok[];
  ecommerce?: (
    | EcommerceFastspringConfigStoryblok
    | EcommerceShopifyConfigStoryblok
    | EcommerceSnipcartConfigStoryblok
  )[];
  toolbar?: (NavMenuStoryblok | ButtonStoryblok | ListSearchAutocompleteStoryblok)[];
  multi_toolbar?: ToolbarRowStoryblok[];
  toolbar_variant?: "" | "primary" | "secondary" | "white" | "dark";
  toolbar_config?: ("fixed" | "text_bold" | "fixed_width" | "unelevated" | "scroll_collapse" | "enable_system_bar")[];
  toolbar_progress_color?: string;
  toolbar_background?: string;
  toolbar_main_height?: number;
  toolbar_font_size?: string;
  theme_base: "" | "base" | "dark";
  theme_primary?: string;
  theme_primary_contrast?: string;
  theme_secondary?: string;
  theme_secondary_contrast?: string;
  theme_error?: string;
  theme_error_contrast?: string;
  theme_link?: string;
  theme_link_hover?: string;
  theme_font_default?: string;
  theme_font_alt1?: string;
  theme_font_alt2?: string;
  theme_font_alt3?: string;
  theme_font_alt4?: string;
  theme_container_width?: "" | "xs" | "sm" | "md" | "lg" | "xl" | "none";
  drawer_body?: (
    | ButtonStoryblok
    | NavMenuStoryblok
    | DateHeadlineStoryblok
    | HeadlineStoryblok
    | ImageStoryblok
    | DividerStoryblok
    | ToolbarNaviButtonStoryblok
    | FlexRowStoryblok
  )[];
  drawer_variant?: "" | "persistent" | "temporary";
  mobile_nav_breakpoint?: "" | "sm" | "md" | "lg" | "xl";
  drawer_width?: number;
  drawer_below_toolbar?: boolean;
  drawer_below_toolbar_xs?: boolean;
  drawer_full_width_mobile?: boolean;
  drawer_background?: BackgroundStoryblok[];
  footer?: (RowStoryblok | SectionStoryblok)[];
  footer_config?: ("footer-large" | "footer-small")[];
  seo_title?: string;
  seo_description?: string;
  seo_website_url?: string;
  seo_robots?: boolean;
  seo_body?: (
    | SeoTwitterStoryblok
    | SeoOpenGraphStoryblok
    | SeoLocalBusinessStoryblok
    | SeoProductStoryblok
    | SeoSocialProfileStoryblok
    | SeoCorporateContactStoryblok
  )[];
  custom_css?: string;
  toolbar_elevation?: number;
  scripts?: ScriptStoryblok[];
  _uid: string;
  component: "global";
  uuid?: string;
  [k: string]: any;
}

export interface HeadlineStoryblok {
  countdown_time?: string;
  countdown_interval?: number;
  countdown_finished?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  text?: string;
  text_xs?: string;
  typography?:
    | ""
    | "headline1"
    | "headline2"
    | "headline3"
    | "headline4"
    | "headline5"
    | "headline6"
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "subtitle1"
    | "subtitle2"
    | "overline";
  font?: "" | "alt1" | "alt2" | "alt3" | "alt4";
  tag?: "" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: "" | "primary" | "secondary" | "textPrimary" | "textSecondary" | "error";
  align?: "" | "left" | "center" | "right" | "justify";
  enable_speech?: boolean;
  support_linebreak?: boolean;
  max_lines?: number;
  font_size?: string;
  line_height?: string;
  letter_spacing?: string;
  count_start?: number;
  count_end?: number;
  prefix?: string;
  suffix?: string;
  count_duration?: number;
  animation?: "" | "linear" | "easeInCubic" | "easeOutCubic";
  styles?: StylesStoryblok[];
  styles_mobile?: StylesStoryblok[];
  styles_tablet?: StylesStoryblok[];
  styles_hover?: StylesStoryblok[];
  _uid: string;
  component: "headline";
  [k: string]: any;
}

export interface HtmlStoryblok {
  styles?: StylesStoryblok[];
  body?: string;
  blocks?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  lazy_load?: boolean;
  styles_mobile?: StylesStoryblok[];
  styles_tablet?: StylesStoryblok[];
  styles_hover?: StylesStoryblok[];
  _uid: string;
  component: "html";
  [k: string]: any;
}

export interface HubspotFormStoryblok {
  form_id?: string;
  portal_id?: string;
  newsletter_subscription?: number;
  body?: FormStoryblok[];
  consent_communication?: string;
  consent_process?: string;
  legitimate_interest?: ParagraphStoryblok[];
  _uid: string;
  component: "hubspot_form";
  [k: string]: any;
}

export interface HubspotMeetingStoryblok {
  meeting_name?: string;
  _uid: string;
  component: "hubspot_meeting";
  [k: string]: any;
}

export interface IconStoryblok {
  size?: "" | "xmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | "xxxlarge";
  icon_url?: string;
  _uid: string;
  component: "icon";
  [k: string]: any;
}

export interface IframeStoryblok {
  url?: string;
  responsive_ratio?: "" | "16by9" | "4by3" | "3by2" | "1by1";
  height?: string;
  width?: string;
  display?: "" | "relative" | "absolute";
  property?: "allow_fullscreen"[];
  allow?: ("geolocation" | "microphone" | "camera" | "midi" | "encrypted-media")[];
  full_height?: boolean;
  _uid: string;
  component: "iframe";
  [k: string]: any;
}

export interface IframeAdvancedStoryblok {
  display?: "" | "relative" | "absolute";
  height?: string;
  width?: string;
  property?: "allow_fullscreen"[];
  allow?: ("geolocation" | "microphone" | "camera" | "midi" | "encrypted-media")[];
  url?: string;
  post_message_key?: string;
  incoming_message_key?: string;
  _uid: string;
  component: "iframe_advanced";
  [k: string]: any;
}

export interface ImageStoryblok {
  border_radius?: string;
  disable_ratio_correction?: boolean;
  property?: ("rounded" | "rounded-circle" | "square" | "rounded-0")[];
  height?: number;
  height_xs?: number;
  width?: number;
  height_fill?: boolean;
  source?: string;
  alt?: string;
  priority?: boolean;
  disable_lazy_loading?: boolean;
  image_crop?: ("image_crop" | "smart_crop")[];
  focal_point?: string;
  toggle_image_loading?: boolean;
  _uid: string;
  component: "image";
  [k: string]: any;
}

export interface ImageCoreStoryblok {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  _uid: string;
  component: "image_core";
  [k: string]: any;
}

export interface ImageListStoryblok {
  aspect_ratio?: "" | "1x1" | "16x9" | "4x3" | "3x4" | "3x2" | "2x3" | "1x2" | "2x1" | "1x3" | "3x1" | "2.85x1";
  text_protection?: boolean;
  enable_lightbox?: boolean;
  masonry?: boolean;
  fit_in_color?: string;
  label_position?: "" | "top" | "bottom";
  column_gap?: "" | "0" | "2" | "4" | "8" | "16" | "24" | "32";
  column_count?: "" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  column_count_tablet?: "" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  column_count_phone?: "" | "1" | "2" | "3" | "4";
  body?: ImageListItemStoryblok[];
  _uid: string;
  component: "image_list";
  [k: string]: any;
}

export interface ImageListItemStoryblok {
  link?:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: "story";
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: "asset" | "url";
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: "email";
        [k: string]: any;
      };
  source?: string;
  label?: string;
  sub_title?: string;
  open_external?: boolean;
  alt?: string;
  show_text_in_dialog?: boolean;
  _uid: string;
  component: "image_list_item";
  [k: string]: any;
}

export interface InstagramListStoryblok {
  hide_description?: boolean;
  hide_likes?: boolean;
  hide_comments?: boolean;
  column_gap?: "" | "0" | "2" | "4" | "8" | "12" | "16" | "24" | "32";
  column_count?: "" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
  column_count_tablet?: "" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  column_count_phone?: "" | "1" | "2" | "3" | "4";
  height?: number;
  masonry?: boolean;
  username: string;
  max_posts?: number;
  type?: "" | "iframe" | "image";
  hide_caption?: boolean;
  hide_videos?: boolean;
  hide_images?: boolean;
  shadow_effect?: "" | "faded" | "float" | "hover" | "lightTop" | "bouncy" | "soft";
  _uid: string;
  component: "instagram_list";
  [k: string]: any;
}

export interface InstagramPostStoryblok {
  url: string;
  max_width?: number;
  hide_caption?: boolean;
  _uid: string;
  component: "instagram_post";
  [k: string]: any;
}

export interface ItemKeyValueStoryblok {
  key?: string;
  value?: string;
  _uid: string;
  component: "item_key_value";
  [k: string]: any;
}

export interface LinkStoryblok {
  link?:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: "story";
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: "asset" | "url";
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: "email";
        [k: string]: any;
      };
  open_external?: boolean;
  body?: (ImageStoryblok | HeadlineStoryblok | ParagraphStoryblok | IconStoryblok | PromotionStoryblok)[];
  on_click_function?: string;
  _uid: string;
  component: "link";
  [k: string]: any;
}

export interface ListsStoryblok {
  render_as_links?: boolean;
  two_line?: boolean;
  hide_subtitle?: boolean;
  hide_image?: boolean;
  image_size?: "" | "xsmall" | "small" | "medium" | "large" | "xlarge";
  _uid: string;
  component: "lists";
  [k: string]: any;
}

export interface ListSearchAutocompleteStoryblok {
  shape?: "" | "rounded" | "square";
  large?: boolean;
  height?: number;
  mobile_breakpoint?: "" | "xs" | "sm" | "md" | "lg";
  fullwidth?: boolean;
  outlined?: boolean;
  menu_border_radius?: string;
  placeholder?: string;
  label?: string;
  not_found_label?: string;
  menu_elevation?: number;
  menu_square?: boolean;
  menu_outlined?: boolean;
  _uid: string;
  component: "list_search_autocomplete";
  [k: string]: any;
}

export interface ListSearchFieldStoryblok {
  label?: string;
  placeholder?: string;
  variant?: "" | "outlined" | "filled" | "standard";
  fullwidth?: boolean;
  size?: "" | "small" | "medium";
  _uid: string;
  component: "list_search_field";
  [k: string]: any;
}

export interface ListStoriesStoryblok {
  enable_search?: boolean;
  view_types?: ("page" | "event" | "news")[];
  sort?: "" | "publish" | "updated" | "created" | "title";
  sort_descending?: boolean;
  max_items?: number;
  pagination?: PaginationStoryblok[];
  layout?: (CardListStoryblok | NewsListStoryblok | ListsStoryblok | NavListStoryblok)[];
  enable_min_height?: boolean;
  not_found_message?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  page_categories?: any[];
  event_categories?: any[];
  news_categories?: any[];
  match_all_categories?: boolean;
  document_categories?: any[];
  match_all_document_categories?: boolean;
  toggle_image_loading?: boolean;
  _uid: string;
  component: "list_stories";
  [k: string]: any;
}

export interface ListWidgetStoryblok {
  categories?: any[];
  enable_for_search?: boolean;
  sort?: "" | "publish" | "updated" | "created" | "title";
  sort_descending?: boolean;
  maximum_items?: number;
  match_all_tags?: boolean;
  only_tagged?: boolean;
  list_options?: (CardListStoryblok | ListsStoryblok | NavListStoryblok)[];
  not_found_content?: (RichTextEditorStoryblok | HeadlineStoryblok)[];
  _uid: string;
  component: "list_widget";
  [k: string]: any;
}

export interface LogoStoryblok {
  source?: string;
  source_xs?: string;
  alt?: string;
  _uid: string;
  component: "logo";
  [k: string]: any;
}

export interface MoralisStoryblok {
  body?: (
    | MoralisButtonStoryblok
    | MoralisMintStoryblok
    | MoralisDataStoryblok
    | MoralisVenlyStoryblok
    | MoralisAuthContainerStoryblok
  )[];
  _uid: string;
  component: "moralis";
  [k: string]: any;
}

export interface MoralisAuthContainerStoryblok {
  contract_token?: string;
  chain?: "" | "mainnet" | "rinkeby" | "goerli" | "kovan" | "mumbai" | "polygon" | "ropsten";
  required_nft?: number;
  show_only_not_logged_in?: boolean;
  body?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  fallback_message?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  not_connected_message?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  _uid: string;
  component: "moralis_auth_container";
  [k: string]: any;
}

export interface MoralisButtonStoryblok {
  login?: ButtonStoryblok[];
  login_walletconnect?: ButtonStoryblok[];
  logout?: (ButtonStoryblok | ImageStoryblok)[];
  _uid: string;
  component: "moralis_button";
  [k: string]: any;
}

export interface MoralisDataStoryblok {
  contract_token?: string;
  chain?: "" | "mainnet" | "goerli" | "kovan" | "rinkeby" | "ropsten" | "polygon" | "mumbai";
  data_values?: string;
  richtext?: any;
  _uid: string;
  component: "moralis_data";
  [k: string]: any;
}

export interface MoralisMintStoryblok {
  price_fiat?: number;
  checkout_content?: any;
  stripe_btn_style?: ButtonStoryblok[];
  return_url?: string;
  fallback_insufficient_funds?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  contract_token: string;
  chain?: "" | "mainnet" | "goerli" | "kovan" | "rinkeby" | "ropsten" | "polygon" | "mumbai";
  presale_get_param?: string;
  fallback_not_started?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  price?: string;
  price_whitelist?: string;
  sale?: "" | "none" | "whitelist" | "public" | "ended";
  mint_amount?: number;
  mint_amount_whitelist?: number;
  counter_style?: HeadlineStoryblok[];
  fallback_not_whitelisted?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  fallback_login_message?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  mint_style?: (ButtonStoryblok | ImageStoryblok)[];
  mint_flexbox_container?: FlexRowStoryblok[];
  style_options?: "dark"[];
  success_message?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  price_in_usd?: number;
  _uid: string;
  component: "moralis_mint";
  [k: string]: any;
}

export interface MoralisVenlyStoryblok {
  client_id?: string;
  _uid: string;
  component: "moralis_venly";
  [k: string]: any;
}

export interface MotionStoryblok {
  type?: "" | "fade" | "grow" | "slide" | "zoom" | "collapse";
  slide_direction?: "" | "left" | "right" | "down" | "up";
  duration?: number;
  threshold?: number;
  delay?: number;
  enable_overflow?: boolean;
  body?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  _uid: string;
  component: "motion";
  [k: string]: any;
}

export interface NavItemStoryblok {
  name?: string;
  link?:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: "story";
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: "asset" | "url";
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: "email";
        [k: string]: any;
      };
  open_external?: boolean;
  image?: string;
  on_click_function?: string;
  _uid: string;
  component: "nav_item";
  [k: string]: any;
}

export interface NavListStoryblok {
  properties?: ("flex-column" | "justify-content-center")[];
  collapse_on_mobile?: boolean;
  header?: string;
  body?: (NavItemStoryblok | NavMenuStoryblok | ButtonStoryblok)[];
  _uid: string;
  component: "nav_list";
  [k: string]: any;
}

export interface NavMenuStoryblok {
  icon_custom?: IconStoryblok[];
  icon_collapse_custom?: IconStoryblok[];
  alignment?: "" | "bottomStart" | "bottomEnd" | "bottomCenter";
  open_on_hover?: boolean;
  outlined?: boolean;
  border_radius?: string;
  elevation?: number;
  title?: string;
  title_custom?: (ButtonStoryblok | HeadlineStoryblok | ImageStoryblok)[];
  body?: (NavMenuItemStoryblok | RowStoryblok | NavMenuStoryblok)[];
  _uid: string;
  component: "nav_menu";
  [k: string]: any;
}

export interface NavMenuItemStoryblok {
  link?:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: "story";
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: "asset" | "url";
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: "email";
        [k: string]: any;
      };
  open_external?: boolean;
  label?: string;
  image?: string;
  _uid: string;
  component: "nav_menu_item";
  [k: string]: any;
}

export interface NewsStoryblok {
  title?: string;
  description?: string;
  content?: any;
  image?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  published?: string;
  category?: string;
  date_format?: DateTimeFormatStoryblok[];
  _uid: string;
  component: "news";
  [k: string]: any;
}

export interface NewsCategoryStoryblok {
  name?: string;
  _uid: string;
  component: "news_category";
  [k: string]: any;
}

export interface NewsListStoryblok {
  hide_category?: boolean;
  read_more_label?: HeadlineStoryblok[];
  date_format?: DateTimeFormatStoryblok[];
  title?: HeadlineStoryblok[];
  subtitle?: HeadlineStoryblok[];
  description?: HeadlineStoryblok[];
  _uid: string;
  component: "news_list";
  [k: string]: any;
}

export interface PageStoryblok {
  meta_title?: string;
  meta_description?: string;
  seo_body?: (
    | SeoOpenGraphStoryblok
    | SeoProductStoryblok
    | SeoSocialProfileStoryblok
    | SeoLocalBusinessStoryblok
    | SeoCorporateContactStoryblok
  )[];
  categories?: any[];
  meta_robots?: boolean;
  preview_title?: string;
  preview_subtitle?: string;
  preview_image?: string;
  preview_teaser?: string;
  preview_publish_date?: string;
  property?: ("has_feature" | "disable_promotion")[];
  body?: (
    | SectionStoryblok
    | SectionVideoBgStoryblok
    | SliderStoryblok
    | SectionParallaxStoryblok
    | PromotionStoryblok
    | SnackbarStoryblok
    | BottomNavigationStoryblok
  )[];
  right_body?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  mobile_breakpoint?: "" | "sm" | "md" | "lg" | "xl";
  right_drawer_width?: number;
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface PaginationStoryblok {
  items_per_page?: number;
  variant?: "" | "text" | "outlined";
  color?: "" | "primary" | "secondary";
  shape?: "" | "rounded" | "round";
  size?: "" | "large" | "medium" | "small";
  position?: "" | "top" | "bottom" | "top_bottom";
  _uid: string;
  component: "pagination";
  [k: string]: any;
}

export interface ParagraphStoryblok {
  text?: string;
  typography?:
    | ""
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "caption"
    | "headline1"
    | "headline2"
    | "headline3"
    | "overline"
    | "headline4"
    | "headline5"
    | "headline6";
  font?: "" | "alt1" | "alt2" | "alt3" | "alt4";
  _uid: string;
  component: "paragraph";
  [k: string]: any;
}

export interface ParallaxItemStoryblok {
  image?: string;
  amount?: number;
  image_focal_point?: string;
  children?: HeadlineStoryblok[];
  _uid: string;
  component: "parallax_item";
  [k: string]: any;
}

export interface PlayerStoryblok {
  url?: string;
  url_internal?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  url_alternatives?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  }[];
  ratio?: "" | "16x9" | "4x3" | "3x2" | "1x1";
  width?: string;
  height?: string;
  controls?: boolean;
  playing?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsinline?: boolean;
  volume?: number;
  light?: boolean;
  fallback_image?: string;
  border_radius?: string;
  toggle_image_loading?: boolean;
  _uid: string;
  component: "player";
  [k: string]: any;
}

export interface PricingStoryblok {
  body?: PricingItemStoryblok[];
  column_count?: number;
  column_count_tablet?: number;
  column_count_phone?: number;
  column_gap?: "" | "2" | "4" | "8" | "16" | "24" | "32";
  _uid: string;
  component: "pricing";
  [k: string]: any;
}

export interface PricingItemStoryblok {
  image?: ImageStoryblok[];
  title?: HeadlineStoryblok[];
  price?: HeadlineStoryblok[];
  subtitle?: HeadlineStoryblok[];
  features?: ParagraphStoryblok[];
  button?: ButtonStoryblok[];
  promotion?: HeadlineStoryblok[];
  _uid: string;
  component: "pricing_item";
  [k: string]: any;
}

export interface PromotionStoryblok {
  image?: ImageStoryblok[];
  body?: PromotionItemStoryblok[];
  _uid: string;
  component: "promotion";
  [k: string]: any;
}

export interface PromotionItemStoryblok {
  body?: (HeadlineStoryblok | ButtonStoryblok | ButtonListStoryblok | ParagraphStoryblok | HtmlStoryblok)[];
  action?: (ButtonStoryblok | ButtonListStoryblok)[];
  position?:
    | ""
    | "top_left"
    | "top_right"
    | "bottom_left"
    | "bottom_right"
    | "top_left_overlap"
    | "bottom_left_overlap";
  variant?: "" | "variant-1" | "variant-2" | "variant-3" | "variant-4";
  _uid: string;
  component: "promotion_item";
  [k: string]: any;
}

export interface RichTextEditorStoryblok {
  font_size?: string;
  line_height?: string;
  letter_spacing?: string;
  typography?:
    | ""
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "caption"
    | "headline1"
    | "headline2"
    | "headline3"
    | "overline"
    | "headline4"
    | "headline5"
    | "headline6";
  color?: "" | "primary" | "secondary" | "textPrimary" | "textSecondary" | "error";
  align?: "" | "left" | "center" | "right" | "justify";
  font?: "" | "alt1" | "alt2" | "alt3" | "alt4";
  body?: any;
  styles?: StylesStoryblok[];
  styles_mobile?: StylesStoryblok[];
  styles_tablet?: StylesStoryblok[];
  styles_hover?: StylesStoryblok[];
  enable_speech?: boolean;
  _uid: string;
  component: "rich_text_editor";
  [k: string]: any;
}

export interface RowStoryblok {
  background?: BackgroundStoryblok[];
  spacing?: "" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  justify?: "" | "flex-start" | "center" | "flex-end" | "space-between" | "space-evenly" | "space-around";
  align_content?: "" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";
  align_items?: "" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  direction?: "" | "row" | "column" | "row-reverse" | "column-reverse";
  body?: ColumnStoryblok[];
  reverse_on_mobile?: boolean;
  reverse_on_tablet?: boolean;
  styles?: StylesStoryblok[];
  styles_mobile?: StylesStoryblok[];
  styles_tablet?: StylesStoryblok[];
  styles_hover?: StylesStoryblok[];
  _uid: string;
  component: "row";
  [k: string]: any;
}

export interface RowNestedStoryblok {
  body?: ColumnStoryblok[];
  fluid_width?: boolean;
  column_gap?: number;
  grid_gap?: number;
  align?: "" | "left" | "right";
  background?: BackgroundStoryblok[];
  grid_margin_desktop?: string;
  grid_margin_tablet?: string;
  grid_margin_phone?: string;
  grid_gutter_desktop?: string;
  grid_gutter_tablet?: string;
  grid_gutter_phone?: string;
  _uid: string;
  component: "row_nested";
  [k: string]: any;
}

export interface ScriptStoryblok {
  id?: string;
  strategy?: "" | "beforeInteractive" | "lazyOnload" | "afterInteractive";
  attributes?: string;
  url?: string;
  script_body?: string;
  _uid: string;
  component: "script";
  [k: string]: any;
}

export interface SearchStoryStoryblok {
  type?: "" | "page" | "document" | "event" | "news";
  _uid: string;
  component: "search_story";
  [k: string]: any;
}

export interface SectionStoryblok {
  section_identifier?: string;
  body?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  variant?: "" | "primary" | "secondary" | "dark" | "light" | "dark_text" | "light_text" | "transparent";
  background?: BackgroundStoryblok[];
  property?: ("is_full_height" | "allow_overflow")[];
  padding?: string;
  max_width?: "" | "xs" | "sm" | "md" | "lg" | "xl" | "none";
  background_style?: "" | "fixed_image" | "fixed_cover";
  styles?: StylesStoryblok[];
  styles_mobile?: StylesStoryblok[];
  styles_tablet?: StylesStoryblok[];
  styles_hover?: StylesStoryblok[];
  _uid: string;
  component: "section";
  [k: string]: any;
}

export interface SectionParallaxStoryblok {
  body?: (RowStoryblok | CardListStoryblok)[];
  elements?: ParallaxItemStoryblok[];
  height?: number;
  disable_lazy_load?: boolean;
  toggle_image_loading?: boolean;
  _uid: string;
  component: "section_parallax";
  [k: string]: any;
}

export interface SectionVideoBgStoryblok {
  section_identifier?: string;
  url?: string;
  url_internal?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  url_alternatives?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  }[];
  body?: RowStoryblok[];
  fallback_image?: string;
  property?: ("muted" | "loop" | "autoplay" | "controls" | "suppress_mouse_events" | "playsinline" | "light")[];
  video_ratio?: "" | "16x9" | "1280x720" | "4x3" | "16x6";
  height?: number;
  max_width?: "" | "xs" | "sm" | "md" | "lg" | "xl" | "none";
  toggle_image_loading?: boolean;
  _uid: string;
  component: "section_video_bg";
  [k: string]: any;
}

export interface SeoCorporateContactStoryblok {
  url: string;
  logo?: string;
  contact_point: SeoCorporateContactPointStoryblok[];
  _uid: string;
  component: "seo_corporate_contact";
  [k: string]: any;
}

export interface SeoCorporateContactPointStoryblok {
  telephone: string;
  contact_type: string;
  area_served?: string;
  available_language?: string;
  _uid: string;
  component: "seo_corporate_contact_point";
  [k: string]: any;
}

export interface SeoLocalBusinessStoryblok {
  id: string;
  type: string;
  name: string;
  url?: string;
  description: string;
  address_country: string;
  address_locality: string;
  address_region?: string;
  address_postal_code: string;
  address_street: string;
  images: ImageCoreStoryblok[];
  telephone?: string;
  geo_latitude?: string;
  geo_longitude?: string;
  opening_hours?: SeoLocalBusinessOpeningHourStoryblok[];
  _uid: string;
  component: "seo_local_business";
  [k: string]: any;
}

export interface SeoLocalBusinessOpeningHourStoryblok {
  opens: string;
  closes: string;
  day_of_week: (
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
    | "PublicHolidays"
  )[];
  valid_from?: string;
  valid_through?: string;
  _uid: string;
  component: "seo_local_business_opening_hour";
  [k: string]: any;
}

export interface SeoOpenGraphStoryblok {
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  site_name?: string;
  app_id?: string;
  locale?: string;
  images?: ImageCoreStoryblok[];
  _uid: string;
  component: "seo_open_graph";
  [k: string]: any;
}

export interface SeoProductStoryblok {
  product_name: string;
  sku?: string;
  images?: ImageCoreStoryblok[];
  description?: string;
  brand?: string;
  offers: SeoProductOfferStoryblok[];
  _uid: string;
  component: "seo_product";
  [k: string]: any;
}

export interface SeoProductOfferStoryblok {
  price: number;
  price_currency: string;
  price_valid_until?: string;
  item_condition?:
    | ""
    | "https://schema.org/DamagedCondition"
    | "https://schema.org/NewCondition"
    | "https://schema.org/RefurbishedCondition"
    | "https://schema.org/UsedCondition";
  availability?:
    | ""
    | "https://schema.org/Discontinued"
    | "https://schema.org/InStock"
    | "https://schema.org/InStoreOnly"
    | "https://schema.org/LimitedAvailability"
    | "https://schema.org/OnlineOnly"
    | "https://schema.org/OutOfStock"
    | "https://schema.org/PreOrder"
    | "https://schema.org/PreSale"
    | "https://schema.org/SoldOut";
  url?: string;
  seller_name: string;
  _uid: string;
  component: "seo_product_offer";
  [k: string]: any;
}

export interface SeoSocialProfileStoryblok {
  type: "" | "Person" | "Organization";
  name: string;
  url: string;
  same_as: string;
  _uid: string;
  component: "seo_social_profile";
  [k: string]: any;
}

export interface SeoTwitterStoryblok {
  site?: string;
  handle?: string;
  card_type?: "" | "summary" | "summary_large_image" | "app" | "player";
  _uid: string;
  component: "seo_twitter";
  [k: string]: any;
}

export interface SliderStoryblok {
  property?: (
    | "pagination_dark"
    | "arrows_dark"
    | "hide_pagination"
    | "hide_arrows"
    | "pagination_bottom_right"
    | "pagination_circle"
    | "container-align-center"
    | "arrows_beside_pagination"
    | "pagination_below_content"
  )[];
  slides_per_view?: number;
  disable_transition?: boolean;
  section_variant?: "" | "primary" | "secondary" | "dark" | "light" | "dark_text" | "light_text" | "transparent";
  autoslide?: number;
  autoslide_duration?: number;
  pause_on_hover?: boolean;
  body?: (SectionStoryblok | PromotionStoryblok | ImageStoryblok | ImageListStoryblok | SectionVideoBgStoryblok)[];
  _uid: string;
  component: "slider";
  [k: string]: any;
}

export interface SnackbarStoryblok {
  anchor_horizontal?: "" | "center" | "left" | "right";
  anchor_vertical?: "" | "top" | "bottom";
  button_top_align?: boolean;
  width?: string;
  display?: "" | "hide_on_scroll" | "show_on_scroll";
  auto_show?: number;
  auto_close?: number;
  square?: boolean;
  elevation?: number;
  dialog?: boolean;
  descriptions?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  close_action?: ButtonStoryblok[];
  additional_actions?: ButtonStoryblok[];
  cookie_name?: string;
  expire_in_days?: number;
  prevent_click_outside?: boolean;
  max_width?: "" | "xs" | "sm" | "md" | "lg" | "xl";
  _uid: string;
  component: "snackbar";
  [k: string]: any;
}

export interface StaticContainerStoryblok {
  body?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  _uid: string;
  component: "static_container";
  [k: string]: any;
}

export interface StaticSectionStoryblok {
  container?: string;
  _uid: string;
  component: "static_section";
  [k: string]: any;
}

export interface StylesStoryblok {
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  display?: "" | "block" | "inline-block" | "inline-flex" | "flex" | "none";
  flex?: "" | "0 1 auto" | "1 auto" | "auto";
  z_index?: number;
  border_width?: string;
  color_theme?: "" | "primary" | "secondary" | "success" | "info" | "warning" | "error" | "grey";
  background?: string;
  background_color_theme?: "" | "primary" | "secondary" | "success" | "info" | "warning" | "error" | "grey";
  elevation?: number;
  box_shadow?: string;
  border_style?:
    | ""
    | "solid"
    | "dashed"
    | "dotted"
    | "double"
    | "groove"
    | "hidden"
    | "inherit"
    | "initial"
    | "inset"
    | "none"
    | "outset"
    | "revert"
    | "ridge"
    | "unset";
  border_color_theme?: "" | "primary" | "secondary" | "error" | "success" | "info" | "warning" | "grey";
  border_radius?: string;
  border_position?: ("top" | "left" | "right" | "bottom")[];
  position?: "" | "relative" | "absolute" | "fixed" | "static" | "sticky";
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  transition?: string;
  transform?: string;
  css_properties?: ItemKeyValueStoryblok[];
  _uid: string;
  component: "styles";
  [k: string]: any;
}

export interface StyleVariantsBgStoryblok {
  color?: string;
  color_opacity?: string;
  _uid: string;
  component: "style_variants_bg";
  [k: string]: any;
}

export interface TableStoryblok {
  variant?: "" | "comparison" | "bordered" | "bordered-bold" | "boxed" | "price";
  disable_table_head?: boolean;
  _uid: string;
  component: "table";
  [k: string]: any;
}

export interface TabsStoryblok {
  vertical_tabs?: boolean;
  mobile_breakpoint?: "" | "xs" | "sm" | "md";
  tabs_width?: "" | "2" | "3" | "4" | "5" | "6" | "auto";
  content_width?: "" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "auto" | "true";
  wrapped?: boolean;
  variant?: "" | "fullWidth" | "scrollable" | "standard";
  centered?: boolean;
  dynamic_height?: boolean;
  body?: TabsItemStoryblok[];
  text_color?: "" | "secondary" | "primary" | "inherit";
  indicator_color?: "" | "secondary" | "primary";
  text_style?: HeadlineStoryblok[];
  _uid: string;
  component: "tabs";
  [k: string]: any;
}

export interface TabsItemStoryblok {
  title?: string;
  body?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  _uid: string;
  component: "tabs_item";
  [k: string]: any;
}

export interface TimelineStoryblok {
  align?: "" | "left" | "right";
  variant?: "" | "outlined" | "naked";
  connect_separator?: boolean;
  disable_card?: boolean;
  card_variant?: "" | "elevation" | "outlined";
  card_elevation?: number;
  card_square?: boolean;
  show_last_line?: boolean;
  body?: TimelineItemStoryblok[];
  _uid: string;
  component: "timeline";
  [k: string]: any;
}

export interface TimelineItemStoryblok {
  dot_variant?: "" | "outlined" | "naked";
  dot_color?: "" | "primary" | "secondary";
  icon?: AvatarStoryblok[];
  title?: string;
  subheader?: string;
  body?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  link?:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: "story";
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: "asset" | "url";
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: "email";
        [k: string]: any;
      };
  open_external?: boolean;
  opposite_body?: (
    | AccordionStoryblok
    | AuthContainerStoryblok
    | AuthFormStoryblok
    | AvatarStoryblok
    | BottomNavigationStoryblok
    | ButtonStoryblok
    | ButtonListStoryblok
    | ButtonSpeechTextStoryblok
    | CardListStoryblok
    | CategoryBoxStoryblok
    | DateHeadlineStoryblok
    | DialogStoryblok
    | DividerStoryblok
    | EcommerceCheckoutStoryblok
    | EventCalendarStoryblok
    | FlexRowStoryblok
    | FormStoryblok
    | FormBuilderStoryblok
    | FormContainerStoryblok
    | GalleryStoryblok
    | HeadlineStoryblok
    | HtmlStoryblok
    | HubspotFormStoryblok
    | HubspotMeetingStoryblok
    | IconStoryblok
    | IframeStoryblok
    | IframeAdvancedStoryblok
    | ImageStoryblok
    | ImageListStoryblok
    | InstagramListStoryblok
    | InstagramPostStoryblok
    | LinkStoryblok
    | ListSearchAutocompleteStoryblok
    | ListSearchFieldStoryblok
    | ListStoriesStoryblok
    | ListWidgetStoryblok
    | MoralisStoryblok
    | MotionStoryblok
    | NavListStoryblok
    | NavMenuStoryblok
    | ParagraphStoryblok
    | PlayerStoryblok
    | PricingStoryblok
    | PromotionStoryblok
    | RichTextEditorStoryblok
    | RowStoryblok
    | SearchStoryStoryblok
    | SliderStoryblok
    | StaticSectionStoryblok
    | TableStoryblok
    | TabsStoryblok
    | TimelineStoryblok
    | ToolbarNaviButtonStoryblok
  )[];
  _uid: string;
  component: "timeline_item";
  [k: string]: any;
}

export interface ToolbarLogoStoryblok {
  _uid: string;
  component: "toolbar_logo";
  [k: string]: any;
}

export interface ToolbarNaviButtonStoryblok {
  button?: ButtonStoryblok[];
  is_right_drawer?: boolean;
  force_show?: boolean;
  _uid: string;
  component: "toolbar_navi_button";
  [k: string]: any;
}

export interface ToolbarRowStoryblok {
  body?: ToolbarRowSectionStoryblok[];
  justify?: "" | "space-between" | "space-around" | "space-evenly" | "flex-start" | "flex-end" | "center";
  is_system_bar?: boolean;
  height?: number;
  _uid: string;
  component: "toolbar_row";
  [k: string]: any;
}

export interface ToolbarRowSectionStoryblok {
  align?: "" | "flex-start" | "flex-end" | "center";
  use_media_query?: boolean;
  body?: (
    | ToolbarLogoStoryblok
    | ButtonStoryblok
    | NavMenuStoryblok
    | ToolbarNaviButtonStoryblok
    | ToolbarSearchStoryblok
    | ListSearchAutocompleteStoryblok
    | HeadlineStoryblok
    | AuthContainerStoryblok
    | ButtonSpeechTextStoryblok
    | DialogStoryblok
  )[];
  inv_use_media_query?: boolean;
  _uid: string;
  component: "toolbar_row_section";
  [k: string]: any;
}

export interface ToolbarSearchStoryblok {
  trigger?: ButtonStoryblok[];
  placeholder?: string;
  _uid: string;
  component: "toolbar_search";
  [k: string]: any;
}
