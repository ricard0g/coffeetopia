export interface CartItem {
  id?:  number;
  properties?: Record<string, string>;
  quantity?: number;
  variant_id?: string | number;
  key?: string;
  title?: string;
  price?: number;
  original_price?: number;
  discounted_price?: number;
  line_price?: number;
  original_line_price?: number;
  total_discount?: number;
  discounts?: Array<any>;
  sku?: string;
  grams?: number;
  vendor?: string;
  taxable?: boolean;
  product_id?: number;
  product_has_only_default_variant?: boolean;
  gift_card?: boolean;
  final_price?: number;
  final_line_price?: number;
  url?: string;
  featured_image?: Record<string, string | number>;
  image?: string;
  handle?: string;
  requires_shipping?: boolean;
  product_type?: string;
  product_title?: string;
  product_description?: string;
  variant_title?: string;
  variant_options?: Array<string>;
  options_with_values?: Array<{ name: string; value: string }>;
  line_level_discount_allocations?: Array<any>;
  line_level_total_discount?: number;
  quantity_rule?: Record<string, any>;
  has_components?: boolean;
  selling_plan_allocation?: any;
}

export interface CartState {
  token?: string;
  note?: string;
  attributes?: Record<string, string>;
  original_total_price?: number;
  total_price?: number;
  total_discount?: number;
  total_weight?: number;
  item_count?: number;
  items?: Array<CartItem>;
}

export interface LineItemState {
  quantity: number;
  lineItemPrice: number;
  lineItemDiscountedPrice: number;
}

export type LineItems = Record<string, LineItemState>;
