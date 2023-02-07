import { Order } from "@medusajs/medusa"
import { render, screen, waitFor } from "../../../../../utils/test-utils"
import RegisterClaimMenu from "../register-claim-menu"

describe("RegisterClaimMenu", () => {
  let order: Order

  beforeEach(() => {
    order = testOrder
  })

  it("should render", async () => {
    render(<RegisterClaimMenu order={order} onClose={() => {}} />)
    await waitFor(() => {
      expect(screen.getByText("Create Claim")).toBeInTheDocument()
    })
  })
})

const testOrder = {
  id: "order_01GRNVGDDATKTSKPJHAQKWBKZ8",
  customer: {
    id: "cus_01GRNN41X0QQA4H2QXDTK5FS1X",
    created_at: "2023-02-07T10:00:41.578Z",
    updated_at: "2023-02-07T10:00:41.578Z",
    deleted_at: null,
    email: "test@gmail.com",
    first_name: null,
    last_name: null,
    billing_address_id: null,
    phone: null,
    has_account: false,
    metadata: null,
  },
  billing_address_id: "addr_01GRNVG91KDC5QJAETVFB0EQPP",
  billing_address: {
    id: "addr_01GRNVG91KDC5QJAETVFB0EQPP",
    created_at: "2023-02-07T11:52:13.575Z",
    updated_at: "2023-02-07T11:52:13.575Z",
    deleted_at: null,
    customer_id: null,
    company: "",
    first_name: "Marty",
    last_name: "McFly",
    address_1: "Future Street 1",
    address_2: "1. 1",
    city: "Hill Valley",
    country_code: "us",
    province: "CA",
    postal_code: "90000",
    phone: "12345678",
    metadata: null,
  },
  shipping_address_id: "addr_01GRNVG91KAE172Y7G4HW65QC2",
  shipping_address: {
    id: "addr_01GRNVG91KAE172Y7G4HW65QC2",
    created_at: "2023-02-07T11:52:13.575Z",
    updated_at: "2023-02-07T11:52:13.575Z",
    deleted_at: null,
    customer_id: null,
    company: "",
    first_name: "Marty",
    last_name: "McFly",
    address_1: "Future Street 1",
    address_2: "1. 1",
    city: "Hill Valley",
    country_code: "us",
    province: "CA",
    postal_code: "90000",
    phone: "12345678",
    metadata: null,
  },
  discounts: [],
  shipping_methods: [
    {
      id: "sm_01GRNVGB779BTZX2F7KAVK2K2R",
      shipping_option_id: "so_01GRNN1NWARH56TPQEVA98AQ3Q",
      order_id: "order_01GRNVGDDATKTSKPJHAQKWBKZ8",
      claim_order_id: null,
      cart_id: "cart_01GRNN44QH88SZQ5SFDTSTCRGY",
      swap_id: null,
      return_id: null,
      price: 1000,
      data: {},
      tax_lines: [
        {
          id: "smtl_01GRNVGD93HBN4ZNZQQMVFVG76",
          created_at: "2023-02-07T11:52:17.935Z",
          updated_at: "2023-02-07T11:52:18.025Z",
          rate: 0,
          name: "default",
          code: "default",
          metadata: null,
          shipping_method_id: "sm_01GRNVGB779BTZX2F7KAVK2K2R",
        },
      ],
      shipping_option: {
        id: "so_01GRNN1NWARH56TPQEVA98AQ3Q",
        created_at: "2023-02-07T09:59:23.729Z",
        updated_at: "2023-02-07T09:59:23.729Z",
        deleted_at: null,
        name: "PostFake Standard",
        region_id: "reg_01GRNN1NVF08G13QK7X1A1D7ME",
        profile_id: "sp_01GRNN1BDZHT21Y2KT0FZJDJF7",
        provider_id: "manual",
        price_type: "flat_rate",
        amount: 1000,
        is_return: false,
        admin_only: false,
        data: {
          id: "manual-fulfillment",
        },
        metadata: null,
      },
      original_total: 1000,
      total: 1000,
      subtotal: 1000,
      original_tax_total: 0,
      tax_total: 0,
    },
  ],
  payments: [
    {
      id: "pay_01GRNVGDAT2HQVWJA3DFW46A31",
      created_at: "2023-02-07T11:52:17.960Z",
      updated_at: "2023-02-07T11:53:23.150Z",
      swap_id: null,
      cart_id: "cart_01GRNN44QH88SZQ5SFDTSTCRGY",
      order_id: "order_01GRNVGDDATKTSKPJHAQKWBKZ8",
      amount: 11000,
      currency_code: "eur",
      amount_refunded: 1000,
      provider_id: "manual",
      data: {
        status: "captured",
      },
      captured_at: "2023-02-07T11:52:25.767Z",
      canceled_at: null,
      metadata: null,
      idempotency_key: null,
    },
  ],
  fulfillments: [
    {
      id: "ful_01GRNVGRXMAZN3AHRMDGJV9WWZ",
      created_at: "2023-02-07T11:52:29.814Z",
      updated_at: "2023-02-07T11:52:38.352Z",
      claim_order_id: null,
      swap_id: null,
      order_id: "order_01GRNVGDDATKTSKPJHAQKWBKZ8",
      no_notification: false,
      provider_id: "manual",
      location_id: null,
      tracking_numbers: [],
      data: {},
      shipped_at: "2023-02-07T11:52:38.378Z",
      canceled_at: null,
      metadata: {},
      idempotency_key: null,
      tracking_links: [
        {
          id: "tlink_01GRNVH17GRBJMSTVP1MJM7B39",
          created_at: "2023-02-07T11:52:38.352Z",
          updated_at: "2023-02-07T11:52:38.352Z",
          deleted_at: null,
          url: null,
          tracking_number: "",
          fulfillment_id: "ful_01GRNVGRXMAZN3AHRMDGJV9WWZ",
          idempotency_key: null,
          metadata: null,
        },
      ],
      items: [
        {
          fulfillment_id: "ful_01GRNVGRXMAZN3AHRMDGJV9WWZ",
          item_id: "item_01GRNVFYJCXJ9585HV8Y0X9MY1",
          quantity: 10,
        },
      ],
    },
  ],
  returns: [
    {
      id: "ret_01GRNVJCXSM223QZEWF2Y56C3Y",
      created_at: "2023-02-07T11:53:23.023Z",
      updated_at: "2023-02-07T11:53:23.171Z",
      status: "requested",
      swap_id: null,
      claim_order_id: "claim_01GRNVJCW88JT1H9SW49N8N02M",
      order_id: "order_01GRNVGDDATKTSKPJHAQKWBKZ8",
      location_id: null,
      shipping_data: {},
      refund_amount: 0,
      received_at: null,
      no_notification: false,
      metadata: null,
      idempotency_key: null,
      shipping_method: {
        id: "sm_01GRNVJCXYGA0FF8MTMG5VFYX1",
        shipping_option_id: "so_01GRNN1NWMB14N8FDNK71CTHMG",
        order_id: null,
        claim_order_id: null,
        cart_id: null,
        swap_id: null,
        return_id: "ret_01GRNVJCXSM223QZEWF2Y56C3Y",
        price: 1000,
        data: {},
        tax_lines: [
          {
            id: "smtl_01GRNVJCY4VQX0G8GREFKWYB4T",
            created_at: "2023-02-07T11:53:23.023Z",
            updated_at: "2023-02-07T11:53:23.023Z",
            rate: 0,
            name: "default",
            code: "default",
            metadata: null,
            shipping_method_id: "sm_01GRNVJCXYGA0FF8MTMG5VFYX1",
          },
        ],
        shipping_option: {
          id: "so_01GRNN1NWMB14N8FDNK71CTHMG",
          created_at: "2023-02-07T09:59:23.729Z",
          updated_at: "2023-02-07T09:59:23.729Z",
          deleted_at: null,
          name: "PostFake Return",
          region_id: "reg_01GRNN1NVF08G13QK7X1A1D7ME",
          profile_id: "sp_01GRNN1BDZHT21Y2KT0FZJDJF7",
          provider_id: "manual",
          price_type: "flat_rate",
          amount: 1000,
          is_return: true,
          admin_only: false,
          data: {
            id: "manual-fulfillment",
          },
          metadata: null,
        },
      },
      items: [
        {
          return_id: "ret_01GRNVJCXSM223QZEWF2Y56C3Y",
          item_id: "item_01GRNVFYJCXJ9585HV8Y0X9MY1",
          quantity: 1,
          is_requested: true,
          requested_quantity: 1,
          received_quantity: null,
          reason_id: null,
          note: null,
          metadata: {},
          reason: null,
        },
      ],
    },
  ],
  gift_cards: [],
  gift_card_transactions: [],
  claims: [
    {
      id: "claim_01GRNVJCW88JT1H9SW49N8N02M",
      created_at: "2023-02-07T11:53:23.023Z",
      updated_at: "2023-02-07T11:53:23.150Z",
      deleted_at: null,
      payment_status: "refunded",
      fulfillment_status: "not_fulfilled",
      type: "refund",
      order_id: "order_01GRNVGDDATKTSKPJHAQKWBKZ8",
      shipping_address_id: "addr_01GRNVG91KAE172Y7G4HW65QC2",
      refund_amount: 1000,
      canceled_at: null,
      no_notification: false,
      metadata: null,
      idempotency_key: "10d8c015-637c-4950-bf3d-9af637f0b323",
      return_order: {
        id: "ret_01GRNVJCXSM223QZEWF2Y56C3Y",
        created_at: "2023-02-07T11:53:23.023Z",
        updated_at: "2023-02-07T11:53:23.171Z",
        status: "requested",
        swap_id: null,
        claim_order_id: "claim_01GRNVJCW88JT1H9SW49N8N02M",
        order_id: "order_01GRNVGDDATKTSKPJHAQKWBKZ8",
        location_id: null,
        shipping_data: {},
        refund_amount: 0,
        received_at: null,
        no_notification: false,
        metadata: null,
        idempotency_key: null,
        shipping_method: {
          id: "sm_01GRNVJCXYGA0FF8MTMG5VFYX1",
          shipping_option_id: "so_01GRNN1NWMB14N8FDNK71CTHMG",
          order_id: null,
          claim_order_id: null,
          cart_id: null,
          swap_id: null,
          return_id: "ret_01GRNVJCXSM223QZEWF2Y56C3Y",
          price: 1000,
          data: {},
          tax_lines: [
            {
              id: "smtl_01GRNVJCY4VQX0G8GREFKWYB4T",
              created_at: "2023-02-07T11:53:23.023Z",
              updated_at: "2023-02-07T11:53:23.023Z",
              rate: 0,
              name: "default",
              code: "default",
              metadata: null,
              shipping_method_id: "sm_01GRNVJCXYGA0FF8MTMG5VFYX1",
            },
          ],
          shipping_option: {
            id: "so_01GRNN1NWMB14N8FDNK71CTHMG",
            created_at: "2023-02-07T09:59:23.729Z",
            updated_at: "2023-02-07T09:59:23.729Z",
            deleted_at: null,
            name: "PostFake Return",
            region_id: "reg_01GRNN1NVF08G13QK7X1A1D7ME",
            profile_id: "sp_01GRNN1BDZHT21Y2KT0FZJDJF7",
            provider_id: "manual",
            price_type: "flat_rate",
            amount: 1000,
            is_return: true,
            admin_only: false,
            data: {
              id: "manual-fulfillment",
            },
            metadata: null,
          },
        },
        items: [
          {
            return_id: "ret_01GRNVJCXSM223QZEWF2Y56C3Y",
            item_id: "item_01GRNVFYJCXJ9585HV8Y0X9MY1",
            quantity: 1,
            is_requested: true,
            requested_quantity: 1,
            received_quantity: null,
            reason_id: null,
            note: null,
            metadata: {},
          },
        ],
      },
      shipping_methods: [],
      shipping_address: {
        id: "addr_01GRNVG91KAE172Y7G4HW65QC2",
        created_at: "2023-02-07T11:52:13.575Z",
        updated_at: "2023-02-07T11:52:13.575Z",
        deleted_at: null,
        customer_id: null,
        company: "",
        address_1: "Future Street 1",
        address_2: "1. 1",
        city: "Hill Valley",
        country_code: "us",
        province: "CA",
        postal_code: "90000",
        phone: "12345678",
        metadata: null,
      },
      additional_items: [],
      fulfillments: [],
      claim_items: [
        {
          id: "citm_01GRNVJCWG2CXQYFF10C3TQ0Y6",
          created_at: "2023-02-07T11:53:23.023Z",
          updated_at: "2023-02-07T11:53:23.023Z",
          deleted_at: null,
          claim_order_id: "claim_01GRNVJCW88JT1H9SW49N8N02M",
          item_id: "item_01GRNVFYJCXJ9585HV8Y0X9MY1",
          variant_id: "variant_01GRNN1P7MHWPXRDHWAXJ15YFH",
          reason: "production_failure",
          note: "Logo off by 90deg",
          quantity: 1,
          metadata: null,
          item: {
            id: "item_01GRNVFYJCXJ9585HV8Y0X9MY1",
            created_at: "2023-02-07T11:52:02.853Z",
            updated_at: "2023-02-07T11:52:38.352Z",
            cart_id: "cart_01GRNN44QH88SZQ5SFDTSTCRGY",
            order_id: "order_01GRNVGDDATKTSKPJHAQKWBKZ8",
            swap_id: null,
            claim_order_id: null,
            original_item_id: null,
            order_edit_id: null,
            title: "Medusa Coffee Mug",
            description: "One Size",
            thumbnail:
              "https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png",
            is_return: false,
            is_giftcard: false,
            should_merge: true,
            allow_discounts: true,
            has_shipping: true,
            unit_price: 1000,
            variant_id: "variant_01GRNN1P7MHWPXRDHWAXJ15YFH",
            quantity: 10,
            fulfilled_quantity: 10,
            returned_quantity: null,
            shipped_quantity: 10,
            metadata: {},
            variant: {
              id: "variant_01GRNN1P7MHWPXRDHWAXJ15YFH",
              created_at: "2023-02-07T09:59:23.729Z",
              updated_at: "2023-02-07T11:52:18.025Z",
              deleted_at: null,
              title: "One Size",
              product_id: "prod_01GRNN1P7BE6W3TNABW7R33AQM",
              sku: null,
              barcode: null,
              ean: null,
              upc: null,
              inventory_quantity: 74,
              allow_backorder: false,
              manage_inventory: true,
              hs_code: null,
              origin_country: null,
              mid_code: null,
              material: null,
              weight: null,
              length: null,
              height: null,
              width: null,
              metadata: null,
              product: {
                id: "prod_01GRNN1P7BE6W3TNABW7R33AQM",
                created_at: "2023-02-07T09:59:23.729Z",
                updated_at: "2023-02-07T09:59:23.729Z",
                deleted_at: null,
                title: "Medusa Coffee Mug",
                subtitle: null,
                description: "Every programmer's best friend.",
                handle: "coffee-mug",
                is_giftcard: false,
                status: "published",
                thumbnail:
                  "https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png",
                profile_id: "sp_01GRNN1BDZHT21Y2KT0FZJDJF7",
                weight: 400,
                length: null,
                height: null,
                width: null,
                hs_code: null,
                origin_country: null,
                mid_code: null,
                material: null,
                collection_id: null,
                type_id: null,
                discountable: true,
                external_id: null,
                metadata: null,
              },
            },
          },
          images: [],
        },
      ],
    },
  ],
  swaps: [],
  sales_channel: {
    id: "sc_01GRNN1BF3T4XKV0YQHZGAAMDR",
    created_at: "2023-02-07T09:59:13.039Z",
    updated_at: "2023-02-07T09:59:13.039Z",
    deleted_at: null,
    name: "Default Sales Channel",
    description: "Created by Medusa",
    is_disabled: false,
  },
  items: [
    {
      id: "item_01GRNVFYJCXJ9585HV8Y0X9MY1",
      created_at: "2023-02-07T11:52:02.853Z",
      updated_at: "2023-02-07T11:52:38.352Z",
      cart_id: "cart_01GRNN44QH88SZQ5SFDTSTCRGY",
      order_id: "order_01GRNVGDDATKTSKPJHAQKWBKZ8",
      swap_id: null,
      claim_order_id: null,
      original_item_id: null,
      order_edit_id: null,
      title: "Medusa Coffee Mug",
      description: "One Size",
      thumbnail:
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png",
      is_return: false,
      is_giftcard: false,
      should_merge: true,
      allow_discounts: true,
      has_shipping: true,
      unit_price: 1000,
      variant_id: "variant_01GRNN1P7MHWPXRDHWAXJ15YFH",
      quantity: 10,
      fulfilled_quantity: 10,
      returned_quantity: null,
      shipped_quantity: 10,
      metadata: {},
      tax_lines: [
        {
          id: "litl_01GRNVGD92SMB6SXG4R21R7AQ3",
          created_at: "2023-02-07T11:52:17.935Z",
          updated_at: "2023-02-07T11:52:18.025Z",
          rate: 0,
          name: "default",
          code: "default",
          metadata: null,
          item_id: "item_01GRNVFYJCXJ9585HV8Y0X9MY1",
        },
      ],
      adjustments: [],
      variant: {
        id: "variant_01GRNN1P7MHWPXRDHWAXJ15YFH",
        created_at: "2023-02-07T09:59:23.729Z",
        updated_at: "2023-02-07T11:52:18.025Z",
        deleted_at: null,
        title: "One Size",
        product_id: "prod_01GRNN1P7BE6W3TNABW7R33AQM",
        sku: null,
        barcode: null,
        ean: null,
        upc: null,
        inventory_quantity: 74,
        allow_backorder: false,
        manage_inventory: true,
        hs_code: null,
        origin_country: null,
        mid_code: null,
        material: null,
        weight: null,
        length: null,
        height: null,
        width: null,
        metadata: null,
        product: {
          id: "prod_01GRNN1P7BE6W3TNABW7R33AQM",
          created_at: "2023-02-07T09:59:23.729Z",
          updated_at: "2023-02-07T09:59:23.729Z",
          deleted_at: null,
          title: "Medusa Coffee Mug",
          subtitle: null,
          description: "Every programmer's best friend.",
          handle: "coffee-mug",
          is_giftcard: false,
          status: "published",
          thumbnail:
            "https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png",
          profile_id: "sp_01GRNN1BDZHT21Y2KT0FZJDJF7",
          weight: 400,
          length: null,
          height: null,
          width: null,
          hs_code: null,
          origin_country: null,
          mid_code: null,
          material: null,
          collection_id: null,
          type_id: null,
          discountable: true,
          external_id: null,
          metadata: null,
        },
      },
      refundable: 10000,
      subtotal: 10000,
      discount_total: 0,
      total: 10000,
      original_total: 10000,
      original_tax_total: 0,
      tax_total: 0,
    },
  ],
  refunds: [
    {
      id: "ref_01GRNVJCYW2Z72Q6Q6ZBX9PPMQ",
      created_at: "2023-02-07T11:53:23.150Z",
      updated_at: "2023-02-07T11:53:23.150Z",
      order_id: "order_01GRNVGDDATKTSKPJHAQKWBKZ8",
      payment_id: null,
      amount: 1000,
      note: null,
      reason: "claim",
      metadata: null,
      idempotency_key: null,
    },
  ],
  region: {
    id: "reg_01GRNN1NVF08G13QK7X1A1D7ME",
    created_at: "2023-02-07T09:59:23.729Z",
    updated_at: "2023-02-07T09:59:23.729Z",
    deleted_at: null,
    name: "EU",
    currency_code: "eur",
    tax_rate: 0,
    tax_code: null,
    gift_cards_taxable: true,
    automatic_taxes: true,
    tax_provider_id: null,
    metadata: null,
    payment_providers: [
      {
        id: "manual",
        is_installed: true,
      },
    ],
    fulfillment_providers: [
      {
        id: "manual",
        is_installed: true,
      },
    ],
  },
  created_at: "2023-02-07T11:52:18.025Z",
  updated_at: "2023-02-07T11:52:38.352Z",
  status: "pending",
  fulfillment_status: "shipped",
  payment_status: "captured",
  display_id: 2,
  cart_id: "cart_01GRNN44QH88SZQ5SFDTSTCRGY",
  customer_id: "cus_01GRNN41X0QQA4H2QXDTK5FS1X",
  email: "test@gmail.com",
  region_id: "reg_01GRNN1NVF08G13QK7X1A1D7ME",
  currency_code: "eur",
  currency: {
    code: "eur",
    symbol: "€",
    name: "Euro",
    includes_tax: false,
  },
  tax_rate: null,
  draft_order_id: null,
  canceled_at: null,
  metadata: {},
  no_notification: null,
  sales_channel_id: "sc_01GRNN1BF3T4XKV0YQHZGAAMDR",
  paid_total: 11000,
  subtotal: 10000,
  discount_total: 0,
  shipping_total: 1000,
  refunded_total: 1000,
  refundable_amount: 10000,
  gift_card_total: 0,
  gift_card_tax_total: 0,
  tax_total: 0,
  total: 11000,
} as unknown as Order
