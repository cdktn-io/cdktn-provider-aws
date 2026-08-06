/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2NetworkInsightsAccessScopeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#region Ec2NetworkInsightsAccessScope#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#tags Ec2NetworkInsightsAccessScope#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * exclude_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#exclude_paths Ec2NetworkInsightsAccessScope#exclude_paths}
  */
  readonly excludePaths?: Ec2NetworkInsightsAccessScopeExcludePaths[] | cdktn.IResolvable;
  /**
  * match_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#match_paths Ec2NetworkInsightsAccessScope#match_paths}
  */
  readonly matchPaths?: Ec2NetworkInsightsAccessScopeMatchPaths[] | cdktn.IResolvable;
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}
  */
  readonly destinationPrefixLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}
  */
  readonly sourcePorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}
  */
  readonly sourcePrefixLists?: string[];
}

export function ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
    destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
    destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
    protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
    source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
    source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._destinationPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._sourcePrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddresses = undefined;
      this._destinationPorts = undefined;
      this._destinationPrefixLists = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourcePorts = undefined;
      this._sourcePrefixLists = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationPorts = value.destinationPorts;
      this._destinationPrefixLists = value.destinationPrefixLists;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourcePorts = value.sourcePorts;
      this._sourcePrefixLists = value.sourcePrefixLists;
    }
  }

  // destination_addresses - computed: false, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // destination_prefix_lists - computed: false, optional: true, required: false
  private _destinationPrefixLists?: string[]; 
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }
  public set destinationPrefixLists(value: string[]) {
    this._destinationPrefixLists = value;
  }
  public resetDestinationPrefixLists() {
    this._destinationPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListsInput() {
    return this._destinationPrefixLists;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // source_prefix_lists - computed: false, optional: true, required: false
  private _sourcePrefixLists?: string[]; 
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
  public set sourcePrefixLists(value: string[]) {
    this._sourcePrefixLists = value;
  }
  public resetSourcePrefixLists() {
    this._sourcePrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListsInput() {
    return this._sourcePrefixLists;
  }
}

export class Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference {
    return new Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}

export function ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference {
    return new Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsDestination {
  /**
  * packet_header_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}
  */
  readonly packetHeaderStatement?: Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement[] | cdktn.IResolvable;
  /**
  * resource_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement[] | cdktn.IResolvable;
}

export function ec2NetworkInsightsAccessScopeExcludePathsDestinationToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    packet_header_statement: cdktn.listMapper(ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementToTerraform, true)(struct!.packetHeaderStatement),
    resource_statement: cdktn.listMapper(ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementToTerraform, true)(struct!.resourceStatement),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsDestinationToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    packet_header_statement: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementToHclTerraform, true)(struct!.packetHeaderStatement),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList",
    },
    resource_statement: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementToHclTerraform, true)(struct!.resourceStatement),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetHeaderStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
    }
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // packet_header_statement - computed: false, optional: true, required: false
  private _packetHeaderStatement = new Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementList(this, "packet_header_statement", false);
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }
  public putPacketHeaderStatement(value: Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement[] | cdktn.IResolvable) {
    this._packetHeaderStatement.internalValue = value;
  }
  public resetPacketHeaderStatement() {
    this._packetHeaderStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetHeaderStatementInput() {
    return this._packetHeaderStatement.internalValue;
  }

  // resource_statement - computed: false, optional: true, required: false
  private _resourceStatement = new Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementList(this, "resource_statement", false);
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement[] | cdktn.IResolvable) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}

export class Ec2NetworkInsightsAccessScopeExcludePathsDestinationList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeExcludePathsDestination[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference {
    return new Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}
  */
  readonly destinationPrefixLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}
  */
  readonly sourcePorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}
  */
  readonly sourcePrefixLists?: string[];
}

export function ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
    destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
    destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
    protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
    source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
    source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._destinationPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._sourcePrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddresses = undefined;
      this._destinationPorts = undefined;
      this._destinationPrefixLists = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourcePorts = undefined;
      this._sourcePrefixLists = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationPorts = value.destinationPorts;
      this._destinationPrefixLists = value.destinationPrefixLists;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourcePorts = value.sourcePorts;
      this._sourcePrefixLists = value.sourcePrefixLists;
    }
  }

  // destination_addresses - computed: false, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // destination_prefix_lists - computed: false, optional: true, required: false
  private _destinationPrefixLists?: string[]; 
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }
  public set destinationPrefixLists(value: string[]) {
    this._destinationPrefixLists = value;
  }
  public resetDestinationPrefixLists() {
    this._destinationPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListsInput() {
    return this._destinationPrefixLists;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // source_prefix_lists - computed: false, optional: true, required: false
  private _sourcePrefixLists?: string[]; 
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
  public set sourcePrefixLists(value: string[]) {
    this._sourcePrefixLists = value;
  }
  public resetSourcePrefixLists() {
    this._sourcePrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListsInput() {
    return this._sourcePrefixLists;
  }
}

export class Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference {
    return new Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}

export function ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference {
    return new Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsSource {
  /**
  * packet_header_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}
  */
  readonly packetHeaderStatement?: Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement[] | cdktn.IResolvable;
  /**
  * resource_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement[] | cdktn.IResolvable;
}

export function ec2NetworkInsightsAccessScopeExcludePathsSourceToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    packet_header_statement: cdktn.listMapper(ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementToTerraform, true)(struct!.packetHeaderStatement),
    resource_statement: cdktn.listMapper(ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementToTerraform, true)(struct!.resourceStatement),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsSourceToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    packet_header_statement: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementToHclTerraform, true)(struct!.packetHeaderStatement),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList",
    },
    resource_statement: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementToHclTerraform, true)(struct!.resourceStatement),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetHeaderStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
    }
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // packet_header_statement - computed: false, optional: true, required: false
  private _packetHeaderStatement = new Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementList(this, "packet_header_statement", false);
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }
  public putPacketHeaderStatement(value: Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement[] | cdktn.IResolvable) {
    this._packetHeaderStatement.internalValue = value;
  }
  public resetPacketHeaderStatement() {
    this._packetHeaderStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetHeaderStatementInput() {
    return this._packetHeaderStatement.internalValue;
  }

  // resource_statement - computed: false, optional: true, required: false
  private _resourceStatement = new Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementList(this, "resource_statement", false);
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement[] | cdktn.IResolvable) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}

export class Ec2NetworkInsightsAccessScopeExcludePathsSourceList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeExcludePathsSource[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference {
    return new Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}

export function ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference {
    return new Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePathsThroughResources {
  /**
  * resource_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement[] | cdktn.IResolvable;
}

export function ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsThroughResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_statement: cdktn.listMapper(ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementToTerraform, true)(struct!.resourceStatement),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePathsThroughResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_statement: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementToHclTerraform, true)(struct!.resourceStatement),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePathsThroughResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePathsThroughResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // resource_statement - computed: false, optional: true, required: false
  private _resourceStatement = new Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementList(this, "resource_statement", false);
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement[] | cdktn.IResolvable) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}

export class Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeExcludePathsThroughResources[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference {
    return new Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeExcludePaths {
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination Ec2NetworkInsightsAccessScope#destination}
  */
  readonly destination?: Ec2NetworkInsightsAccessScopeExcludePathsDestination[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source Ec2NetworkInsightsAccessScope#source}
  */
  readonly source?: Ec2NetworkInsightsAccessScopeExcludePathsSource[] | cdktn.IResolvable;
  /**
  * through_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#through_resources Ec2NetworkInsightsAccessScope#through_resources}
  */
  readonly throughResources?: Ec2NetworkInsightsAccessScopeExcludePathsThroughResources[] | cdktn.IResolvable;
}

export function ec2NetworkInsightsAccessScopeExcludePathsToTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.listMapper(ec2NetworkInsightsAccessScopeExcludePathsDestinationToTerraform, true)(struct!.destination),
    source: cdktn.listMapper(ec2NetworkInsightsAccessScopeExcludePathsSourceToTerraform, true)(struct!.source),
    through_resources: cdktn.listMapper(ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesToTerraform, true)(struct!.throughResources),
  }
}


export function ec2NetworkInsightsAccessScopeExcludePathsToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeExcludePaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeExcludePathsDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsDestinationList",
    },
    source: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeExcludePathsSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsSourceList",
    },
    through_resources: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesToHclTerraform, true)(struct!.throughResources),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeExcludePathsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeExcludePaths | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._throughResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughResources = this._throughResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeExcludePaths | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._source.internalValue = undefined;
      this._throughResources.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._source.internalValue = value.source;
      this._throughResources.internalValue = value.throughResources;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new Ec2NetworkInsightsAccessScopeExcludePathsDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: Ec2NetworkInsightsAccessScopeExcludePathsDestination[] | cdktn.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new Ec2NetworkInsightsAccessScopeExcludePathsSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: Ec2NetworkInsightsAccessScopeExcludePathsSource[] | cdktn.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // through_resources - computed: false, optional: true, required: false
  private _throughResources = new Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList(this, "through_resources", false);
  public get throughResources() {
    return this._throughResources;
  }
  public putThroughResources(value: Ec2NetworkInsightsAccessScopeExcludePathsThroughResources[] | cdktn.IResolvable) {
    this._throughResources.internalValue = value;
  }
  public resetThroughResources() {
    this._throughResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughResourcesInput() {
    return this._throughResources.internalValue;
  }
}

export class Ec2NetworkInsightsAccessScopeExcludePathsList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeExcludePaths[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeExcludePathsOutputReference {
    return new Ec2NetworkInsightsAccessScopeExcludePathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}
  */
  readonly destinationPrefixLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}
  */
  readonly sourcePorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}
  */
  readonly sourcePrefixLists?: string[];
}

export function ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
    destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
    destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
    protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
    source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
    source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._destinationPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._sourcePrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddresses = undefined;
      this._destinationPorts = undefined;
      this._destinationPrefixLists = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourcePorts = undefined;
      this._sourcePrefixLists = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationPorts = value.destinationPorts;
      this._destinationPrefixLists = value.destinationPrefixLists;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourcePorts = value.sourcePorts;
      this._sourcePrefixLists = value.sourcePrefixLists;
    }
  }

  // destination_addresses - computed: false, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // destination_prefix_lists - computed: false, optional: true, required: false
  private _destinationPrefixLists?: string[]; 
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }
  public set destinationPrefixLists(value: string[]) {
    this._destinationPrefixLists = value;
  }
  public resetDestinationPrefixLists() {
    this._destinationPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListsInput() {
    return this._destinationPrefixLists;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // source_prefix_lists - computed: false, optional: true, required: false
  private _sourcePrefixLists?: string[]; 
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
  public set sourcePrefixLists(value: string[]) {
    this._sourcePrefixLists = value;
  }
  public resetSourcePrefixLists() {
    this._sourcePrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListsInput() {
    return this._sourcePrefixLists;
  }
}

export class Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference {
    return new Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}

export function ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference {
    return new Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPathsDestination {
  /**
  * packet_header_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}
  */
  readonly packetHeaderStatement?: Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement[] | cdktn.IResolvable;
  /**
  * resource_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement[] | cdktn.IResolvable;
}

export function ec2NetworkInsightsAccessScopeMatchPathsDestinationToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    packet_header_statement: cdktn.listMapper(ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementToTerraform, true)(struct!.packetHeaderStatement),
    resource_statement: cdktn.listMapper(ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementToTerraform, true)(struct!.resourceStatement),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsDestinationToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    packet_header_statement: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementToHclTerraform, true)(struct!.packetHeaderStatement),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList",
    },
    resource_statement: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementToHclTerraform, true)(struct!.resourceStatement),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPathsDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetHeaderStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
    }
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPathsDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // packet_header_statement - computed: false, optional: true, required: false
  private _packetHeaderStatement = new Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementList(this, "packet_header_statement", false);
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }
  public putPacketHeaderStatement(value: Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement[] | cdktn.IResolvable) {
    this._packetHeaderStatement.internalValue = value;
  }
  public resetPacketHeaderStatement() {
    this._packetHeaderStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetHeaderStatementInput() {
    return this._packetHeaderStatement.internalValue;
  }

  // resource_statement - computed: false, optional: true, required: false
  private _resourceStatement = new Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementList(this, "resource_statement", false);
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement[] | cdktn.IResolvable) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}

export class Ec2NetworkInsightsAccessScopeMatchPathsDestinationList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeMatchPathsDestination[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference {
    return new Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}
  */
  readonly destinationPrefixLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}
  */
  readonly sourcePorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}
  */
  readonly sourcePrefixLists?: string[];
}

export function ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
    destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
    destination_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPrefixLists),
    protocols: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.protocols),
    source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
    source_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePorts),
    source_prefix_lists: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourcePrefixLists),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocols: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_prefix_lists: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourcePrefixLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._destinationPrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixLists = this._destinationPrefixLists;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._sourcePrefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixLists = this._sourcePrefixLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddresses = undefined;
      this._destinationPorts = undefined;
      this._destinationPrefixLists = undefined;
      this._protocols = undefined;
      this._sourceAddresses = undefined;
      this._sourcePorts = undefined;
      this._sourcePrefixLists = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationPorts = value.destinationPorts;
      this._destinationPrefixLists = value.destinationPrefixLists;
      this._protocols = value.protocols;
      this._sourceAddresses = value.sourceAddresses;
      this._sourcePorts = value.sourcePorts;
      this._sourcePrefixLists = value.sourcePrefixLists;
    }
  }

  // destination_addresses - computed: false, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // destination_prefix_lists - computed: false, optional: true, required: false
  private _destinationPrefixLists?: string[]; 
  public get destinationPrefixLists() {
    return this.getListAttribute('destination_prefix_lists');
  }
  public set destinationPrefixLists(value: string[]) {
    this._destinationPrefixLists = value;
  }
  public resetDestinationPrefixLists() {
    this._destinationPrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListsInput() {
    return this._destinationPrefixLists;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return this.getListAttribute('source_ports');
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // source_prefix_lists - computed: false, optional: true, required: false
  private _sourcePrefixLists?: string[]; 
  public get sourcePrefixLists() {
    return this.getListAttribute('source_prefix_lists');
  }
  public set sourcePrefixLists(value: string[]) {
    this._sourcePrefixLists = value;
  }
  public resetSourcePrefixLists() {
    this._sourcePrefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListsInput() {
    return this._sourcePrefixLists;
  }
}

export class Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference {
    return new Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}
  */
  readonly resources?: string[];
}

export function ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceTypes),
    resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._resources = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._resources = value.resources;
    }
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference {
    return new Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPathsSource {
  /**
  * packet_header_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}
  */
  readonly packetHeaderStatement?: Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement[] | cdktn.IResolvable;
  /**
  * resource_statement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}
  */
  readonly resourceStatement?: Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement[] | cdktn.IResolvable;
}

export function ec2NetworkInsightsAccessScopeMatchPathsSourceToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    packet_header_statement: cdktn.listMapper(ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementToTerraform, true)(struct!.packetHeaderStatement),
    resource_statement: cdktn.listMapper(ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementToTerraform, true)(struct!.resourceStatement),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsSourceToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPathsSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    packet_header_statement: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementToHclTerraform, true)(struct!.packetHeaderStatement),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList",
    },
    resource_statement: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementToHclTerraform, true)(struct!.resourceStatement),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPathsSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetHeaderStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetHeaderStatement = this._packetHeaderStatement?.internalValue;
    }
    if (this._resourceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceStatement = this._resourceStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPathsSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = undefined;
      this._resourceStatement.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packetHeaderStatement.internalValue = value.packetHeaderStatement;
      this._resourceStatement.internalValue = value.resourceStatement;
    }
  }

  // packet_header_statement - computed: false, optional: true, required: false
  private _packetHeaderStatement = new Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementList(this, "packet_header_statement", false);
  public get packetHeaderStatement() {
    return this._packetHeaderStatement;
  }
  public putPacketHeaderStatement(value: Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement[] | cdktn.IResolvable) {
    this._packetHeaderStatement.internalValue = value;
  }
  public resetPacketHeaderStatement() {
    this._packetHeaderStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetHeaderStatementInput() {
    return this._packetHeaderStatement.internalValue;
  }

  // resource_statement - computed: false, optional: true, required: false
  private _resourceStatement = new Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementList(this, "resource_statement", false);
  public get resourceStatement() {
    return this._resourceStatement;
  }
  public putResourceStatement(value: Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement[] | cdktn.IResolvable) {
    this._resourceStatement.internalValue = value;
  }
  public resetResourceStatement() {
    this._resourceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStatementInput() {
    return this._resourceStatement.internalValue;
  }
}

export class Ec2NetworkInsightsAccessScopeMatchPathsSourceList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeMatchPathsSource[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference {
    return new Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2NetworkInsightsAccessScopeMatchPaths {
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#destination Ec2NetworkInsightsAccessScope#destination}
  */
  readonly destination?: Ec2NetworkInsightsAccessScopeMatchPathsDestination[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#source Ec2NetworkInsightsAccessScope#source}
  */
  readonly source?: Ec2NetworkInsightsAccessScopeMatchPathsSource[] | cdktn.IResolvable;
}

export function ec2NetworkInsightsAccessScopeMatchPathsToTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.listMapper(ec2NetworkInsightsAccessScopeMatchPathsDestinationToTerraform, true)(struct!.destination),
    source: cdktn.listMapper(ec2NetworkInsightsAccessScopeMatchPathsSourceToTerraform, true)(struct!.source),
  }
}


export function ec2NetworkInsightsAccessScopeMatchPathsToHclTerraform(struct?: Ec2NetworkInsightsAccessScopeMatchPaths | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeMatchPathsDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsDestinationList",
    },
    source: {
      value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeMatchPathsSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2NetworkInsightsAccessScopeMatchPathsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2NetworkInsightsAccessScopeMatchPaths | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2NetworkInsightsAccessScopeMatchPaths | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._source.internalValue = value.source;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new Ec2NetworkInsightsAccessScopeMatchPathsDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: Ec2NetworkInsightsAccessScopeMatchPathsDestination[] | cdktn.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new Ec2NetworkInsightsAccessScopeMatchPathsSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: Ec2NetworkInsightsAccessScopeMatchPathsSource[] | cdktn.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class Ec2NetworkInsightsAccessScopeMatchPathsList extends cdktn.ComplexList {
  public internalValue? : Ec2NetworkInsightsAccessScopeMatchPaths[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2NetworkInsightsAccessScopeMatchPathsOutputReference {
    return new Ec2NetworkInsightsAccessScopeMatchPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope aws_ec2_network_insights_access_scope}
*/
export class Ec2NetworkInsightsAccessScope extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_network_insights_access_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2NetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2NetworkInsightsAccessScope to import
  * @param importFromId The id of the existing Ec2NetworkInsightsAccessScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2NetworkInsightsAccessScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_network_insights_access_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/ec2_network_insights_access_scope aws_ec2_network_insights_access_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2NetworkInsightsAccessScopeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ec2NetworkInsightsAccessScopeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_network_insights_access_scope',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.58.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._region = config.region;
    this._tags = config.tags;
    this._excludePaths.internalValue = config.excludePaths;
    this._matchPaths.internalValue = config.matchPaths;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // exclude_paths - computed: false, optional: true, required: false
  private _excludePaths = new Ec2NetworkInsightsAccessScopeExcludePathsList(this, "exclude_paths", false);
  public get excludePaths() {
    return this._excludePaths;
  }
  public putExcludePaths(value: Ec2NetworkInsightsAccessScopeExcludePaths[] | cdktn.IResolvable) {
    this._excludePaths.internalValue = value;
  }
  public resetExcludePaths() {
    this._excludePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePathsInput() {
    return this._excludePaths.internalValue;
  }

  // match_paths - computed: false, optional: true, required: false
  private _matchPaths = new Ec2NetworkInsightsAccessScopeMatchPathsList(this, "match_paths", false);
  public get matchPaths() {
    return this._matchPaths;
  }
  public putMatchPaths(value: Ec2NetworkInsightsAccessScopeMatchPaths[] | cdktn.IResolvable) {
    this._matchPaths.internalValue = value;
  }
  public resetMatchPaths() {
    this._matchPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPathsInput() {
    return this._matchPaths.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      exclude_paths: cdktn.listMapper(ec2NetworkInsightsAccessScopeExcludePathsToTerraform, true)(this._excludePaths.internalValue),
      match_paths: cdktn.listMapper(ec2NetworkInsightsAccessScopeMatchPathsToTerraform, true)(this._matchPaths.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      exclude_paths: {
        value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeExcludePathsToHclTerraform, true)(this._excludePaths.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2NetworkInsightsAccessScopeExcludePathsList",
      },
      match_paths: {
        value: cdktn.listMapperHcl(ec2NetworkInsightsAccessScopeMatchPathsToHclTerraform, true)(this._matchPaths.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2NetworkInsightsAccessScopeMatchPathsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
