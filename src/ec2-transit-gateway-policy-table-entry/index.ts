/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2TransitGatewayPolicyTableEntryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#policy_rule_number Ec2TransitGatewayPolicyTableEntry#policy_rule_number}
  */
  readonly policyRuleNumber: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#region Ec2TransitGatewayPolicyTableEntry#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#target_route_table_id Ec2TransitGatewayPolicyTableEntry#target_route_table_id}
  */
  readonly targetRouteTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#transit_gateway_policy_table_id Ec2TransitGatewayPolicyTableEntry#transit_gateway_policy_table_id}
  */
  readonly transitGatewayPolicyTableId: string;
  /**
  * policy_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#policy_rule Ec2TransitGatewayPolicyTableEntry#policy_rule}
  */
  readonly policyRule?: Ec2TransitGatewayPolicyTableEntryPolicyRule[] | cdktn.IResolvable;
}
export interface Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#key Ec2TransitGatewayPolicyTableEntry#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#value Ec2TransitGatewayPolicyTableEntry#value}
  */
  readonly value?: string;
}

export function ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataToTerraform(struct?: Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataToHclTerraform(struct?: Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList extends cdktn.ComplexList {
  public internalValue? : Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata[] | cdktn.IResolvable

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
  public get(index: number): Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference {
    return new Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2TransitGatewayPolicyTableEntryPolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#destination_cidr_block Ec2TransitGatewayPolicyTableEntry#destination_cidr_block}
  */
  readonly destinationCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#destination_port_range Ec2TransitGatewayPolicyTableEntry#destination_port_range}
  */
  readonly destinationPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#protocol Ec2TransitGatewayPolicyTableEntry#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#source_cidr_block Ec2TransitGatewayPolicyTableEntry#source_cidr_block}
  */
  readonly sourceCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#source_port_range Ec2TransitGatewayPolicyTableEntry#source_port_range}
  */
  readonly sourcePortRange?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#metadata Ec2TransitGatewayPolicyTableEntry#metadata}
  */
  readonly metadata?: Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata[] | cdktn.IResolvable;
}

export function ec2TransitGatewayPolicyTableEntryPolicyRuleToTerraform(struct?: Ec2TransitGatewayPolicyTableEntryPolicyRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_cidr_block: cdktn.stringToTerraform(struct!.destinationCidrBlock),
    destination_port_range: cdktn.stringToTerraform(struct!.destinationPortRange),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    source_cidr_block: cdktn.stringToTerraform(struct!.sourceCidrBlock),
    source_port_range: cdktn.stringToTerraform(struct!.sourcePortRange),
    metadata: cdktn.listMapper(ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataToTerraform, true)(struct!.metadata),
  }
}


export function ec2TransitGatewayPolicyTableEntryPolicyRuleToHclTerraform(struct?: Ec2TransitGatewayPolicyTableEntryPolicyRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_cidr_block: {
      value: cdktn.stringToHclTerraform(struct!.destinationCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port_range: {
      value: cdktn.stringToHclTerraform(struct!.destinationPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cidr_block: {
      value: cdktn.stringToHclTerraform(struct!.sourceCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_range: {
      value: cdktn.stringToHclTerraform(struct!.sourcePortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktn.listMapperHcl(ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Ec2TransitGatewayPolicyTableEntryPolicyRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidrBlock = this._destinationCidrBlock;
    }
    if (this._destinationPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPortRange = this._destinationPortRange;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCidrBlock = this._sourceCidrBlock;
    }
    if (this._sourcePortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRange = this._sourcePortRange;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2TransitGatewayPolicyTableEntryPolicyRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationCidrBlock = undefined;
      this._destinationPortRange = undefined;
      this._protocol = undefined;
      this._sourceCidrBlock = undefined;
      this._sourcePortRange = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationCidrBlock = value.destinationCidrBlock;
      this._destinationPortRange = value.destinationPortRange;
      this._protocol = value.protocol;
      this._sourceCidrBlock = value.sourceCidrBlock;
      this._sourcePortRange = value.sourcePortRange;
      this._metadata.internalValue = value.metadata;
    }
  }

  // destination_cidr_block - computed: false, optional: true, required: false
  private _destinationCidrBlock?: string; 
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  public resetDestinationCidrBlock() {
    this._destinationCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock;
  }

  // destination_port_range - computed: true, optional: true, required: false
  private _destinationPortRange?: string; 
  public get destinationPortRange() {
    return this.getStringAttribute('destination_port_range');
  }
  public set destinationPortRange(value: string) {
    this._destinationPortRange = value;
  }
  public resetDestinationPortRange() {
    this._destinationPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortRangeInput() {
    return this._destinationPortRange;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_cidr_block - computed: false, optional: true, required: false
  private _sourceCidrBlock?: string; 
  public get sourceCidrBlock() {
    return this.getStringAttribute('source_cidr_block');
  }
  public set sourceCidrBlock(value: string) {
    this._sourceCidrBlock = value;
  }
  public resetSourceCidrBlock() {
    this._sourceCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrBlockInput() {
    return this._sourceCidrBlock;
  }

  // source_port_range - computed: true, optional: true, required: false
  private _sourcePortRange?: string; 
  public get sourcePortRange() {
    return this.getStringAttribute('source_port_range');
  }
  public set sourcePortRange(value: string) {
    this._sourcePortRange = value;
  }
  public resetSourcePortRange() {
    this._sourcePortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangeInput() {
    return this._sourcePortRange;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata[] | cdktn.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class Ec2TransitGatewayPolicyTableEntryPolicyRuleList extends cdktn.ComplexList {
  public internalValue? : Ec2TransitGatewayPolicyTableEntryPolicyRule[] | cdktn.IResolvable

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
  public get(index: number): Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference {
    return new Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry aws_ec2_transit_gateway_policy_table_entry}
*/
export class Ec2TransitGatewayPolicyTableEntry extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway_policy_table_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2TransitGatewayPolicyTableEntry resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2TransitGatewayPolicyTableEntry to import
  * @param importFromId The id of the existing Ec2TransitGatewayPolicyTableEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2TransitGatewayPolicyTableEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_transit_gateway_policy_table_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry aws_ec2_transit_gateway_policy_table_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayPolicyTableEntryConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayPolicyTableEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_policy_table_entry',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.66.0',
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
    this._policyRuleNumber = config.policyRuleNumber;
    this._region = config.region;
    this._targetRouteTableId = config.targetRouteTableId;
    this._transitGatewayPolicyTableId = config.transitGatewayPolicyTableId;
    this._policyRule.internalValue = config.policyRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // policy_rule_number - computed: false, optional: false, required: true
  private _policyRuleNumber?: string; 
  public get policyRuleNumber() {
    return this.getStringAttribute('policy_rule_number');
  }
  public set policyRuleNumber(value: string) {
    this._policyRuleNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuleNumberInput() {
    return this._policyRuleNumber;
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

  // target_route_table_id - computed: false, optional: false, required: true
  private _targetRouteTableId?: string; 
  public get targetRouteTableId() {
    return this.getStringAttribute('target_route_table_id');
  }
  public set targetRouteTableId(value: string) {
    this._targetRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRouteTableIdInput() {
    return this._targetRouteTableId;
  }

  // transit_gateway_policy_table_id - computed: false, optional: false, required: true
  private _transitGatewayPolicyTableId?: string; 
  public get transitGatewayPolicyTableId() {
    return this.getStringAttribute('transit_gateway_policy_table_id');
  }
  public set transitGatewayPolicyTableId(value: string) {
    this._transitGatewayPolicyTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayPolicyTableIdInput() {
    return this._transitGatewayPolicyTableId;
  }

  // policy_rule - computed: false, optional: true, required: false
  private _policyRule = new Ec2TransitGatewayPolicyTableEntryPolicyRuleList(this, "policy_rule", false);
  public get policyRule() {
    return this._policyRule;
  }
  public putPolicyRule(value: Ec2TransitGatewayPolicyTableEntryPolicyRule[] | cdktn.IResolvable) {
    this._policyRule.internalValue = value;
  }
  public resetPolicyRule() {
    this._policyRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuleInput() {
    return this._policyRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_rule_number: cdktn.stringToTerraform(this._policyRuleNumber),
      region: cdktn.stringToTerraform(this._region),
      target_route_table_id: cdktn.stringToTerraform(this._targetRouteTableId),
      transit_gateway_policy_table_id: cdktn.stringToTerraform(this._transitGatewayPolicyTableId),
      policy_rule: cdktn.listMapper(ec2TransitGatewayPolicyTableEntryPolicyRuleToTerraform, true)(this._policyRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_rule_number: {
        value: cdktn.stringToHclTerraform(this._policyRuleNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_route_table_id: {
        value: cdktn.stringToHclTerraform(this._targetRouteTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_policy_table_id: {
        value: cdktn.stringToHclTerraform(this._transitGatewayPolicyTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_rule: {
        value: cdktn.listMapperHcl(ec2TransitGatewayPolicyTableEntryPolicyRuleToHclTerraform, true)(this._policyRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2TransitGatewayPolicyTableEntryPolicyRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
