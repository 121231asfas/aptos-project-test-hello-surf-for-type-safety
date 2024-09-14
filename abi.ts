export const ABI = {
  address: "0xd01f58c69ccac6569e13a7cfdf68409d513c1492b3f13399a7ba3415dff36fa4",
  name: "message_board",
  friends: [],
  exposed_functions: [
    {
      name: "exist_message",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [],
      return: ["bool"],
    },
    {
      name: "get_message_content",
      visibility: "public",
      is_entry: false,
      is_view: true,
      generic_type_params: [],
      params: [],
      return: [
        "bool",
        "0x1::string::String",
        "u64",
        "address",
        "0x1::object::Object<0x1::object::ObjectCore>",
        "vector<0x1::string::String>",
        "0x1::option::Option<bool>",
        "0x1::option::Option<0x1::string::String>",
        "0x1::option::Option<u64>",
        "0x1::option::Option<address>",
        "0x1::option::Option<0x1::object::Object<0x1::object::ObjectCore>>",
        "0x1::option::Option<vector<0x1::string::String>>",
      ],
    },
    {
      name: "post_message",
      visibility: "public",
      is_entry: true,
      is_view: false,
      generic_type_params: [],
      params: [
        "&signer",
        "bool",
        "0x1::string::String",
        "u64",
        "address",
        "0x1::object::Object<0x1::object::ObjectCore>",
        "vector<0x1::string::String>",
        "0x1::option::Option<bool>",
        "0x1::option::Option<0x1::string::String>",
        "0x1::option::Option<u64>",
        "0x1::option::Option<address>",
        "0x1::option::Option<0x1::object::Object<0x1::object::ObjectCore>>",
        "0x1::option::Option<vector<0x1::string::String>>",
      ],
      return: [],
    },
  ],
  structs: [
    {
      name: "BoardObjectController",
      is_native: false,
      abilities: ["key"],
      generic_type_params: [],
      fields: [{ name: "extend_ref", type: "0x1::object::ExtendRef" }],
    },
    {
      name: "Message",
      is_native: false,
      abilities: ["drop", "key"],
      generic_type_params: [],
      fields: [
        { name: "boolean_content", type: "bool" },
        { name: "string_content", type: "0x1::string::String" },
        { name: "number_content", type: "u64" },
        { name: "address_content", type: "address" },
        { name: "object_content", type: "0x1::object::Object<0x1::object::ObjectCore>" },
        { name: "vector_content", type: "vector<0x1::string::String>" },
        { name: "optional_boolean_content", type: "0x1::option::Option<bool>" },
        { name: "optional_string_content", type: "0x1::option::Option<0x1::string::String>" },
        { name: "optional_number_content", type: "0x1::option::Option<u64>" },
        { name: "optional_address_content", type: "0x1::option::Option<address>" },
        { name: "optional_object_content", type: "0x1::option::Option<0x1::object::Object<0x1::object::ObjectCore>>" },
        { name: "optional_vector_content", type: "0x1::option::Option<vector<0x1::string::String>>" },
      ],
    },
  ],
} as const;
