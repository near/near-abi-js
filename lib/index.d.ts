import { JSONSchema7 } from 'json-schema';
export interface AbiRoot {
    /** Semver of the ABI schema format. */
    schema_version: string;
    /** Metadata information about the contract. */
    metadata?: AbiMetadata;
    /** Core ABI information (functions and types). */
    body: AbiBody;
}
export interface AbiBody {
    /** ABIs of all contract's functions. */
    functions: AbiFunction[];
    /** Root JSON schema for the ABI. */
    root_schema: JSONSchema7;
}
export interface AbiMetadata {
    /** The name of the smart contract. */
    name?: string;
    /** The version of the smart contract. */
    version?: string;
    /** The authors of the smart contract. */
    authors?: string[];
}
export interface AbiFunction {
    name: string;
    /** Human-readable documentation parsed from the source file. */
    doc?: string;
    /** Whether function does not modify the state. */
    is_view?: boolean;
    /** Whether function can be used to initialize the state. */
    is_init?: boolean;
    /** Whether function is accepting $NEAR. */
    is_payable?: boolean;
    /** Whether function can only accept calls from self (current account). */
    is_private?: boolean;
    /** Type identifiers of the function parameters. */
    params?: AbiParameter[];
    /** Type identifiers of the callbacks of the function. */
    callbacks?: any[];
    /** Type identifier of the vararg callbacks of the function. */
    callbacks_vec?: AbiType;
    /** Return type identifier. */
    result?: AbiType;
}
export declare enum AbiSerializationType {
    Json = "json",
    Borsh = "borsh"
}
export interface AbiType {
    /** The serialization format to be used for values of this type. */
    serialization_type: AbiSerializationType;
    /** Schema describing the type (the actual schema format depends on `serialization_type`). */
    type_schema: any;
}
export interface AbiJsonType {
    serialization_type: AbiSerializationType.Json;
    /** JSON Subschema that represents this type (can be an inline primitive, a reference to the root schema and a few other corner-case things). */
    type_schema: JSONSchema7;
}
export interface AbiBorshType {
    serialization_type: AbiSerializationType.Borsh;
    /** Borsh schema that represents this type. */
    type_schema: any;
}
export interface AbiParameter extends AbiType {
    /** Parameter name (e.g. `p1` in `function foo(p1: string) {}`). */
    name: string;
}
