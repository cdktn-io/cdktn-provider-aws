/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2TransitGatewayMeteringPolicyEntryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_cidr_block Ec2TransitGatewayMeteringPolicyEntry#destination_cidr_block}
  */
  readonly destinationCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_port_range Ec2TransitGatewayMeteringPolicyEntry#destination_port_range}
  */
  readonly destinationPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_id Ec2TransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_id}
  */
  readonly destinationTransitGatewayAttachmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#destination_transit_gateway_attachment_type Ec2TransitGatewayMeteringPolicyEntry#destination_transit_gateway_attachment_type}
  */
  readonly destinationTransitGatewayAttachmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#metered_account Ec2TransitGatewayMeteringPolicyEntry#metered_account}
  */
  readonly meteredAccount: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#policy_rule_number Ec2TransitGatewayMeteringPolicyEntry#policy_rule_number}
  */
  readonly policyRuleNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#protocol Ec2TransitGatewayMeteringPolicyEntry#protocol}
  */
  readonly protocol?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#region Ec2TransitGatewayMeteringPolicyEntry#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_cidr_block Ec2TransitGatewayMeteringPolicyEntry#source_cidr_block}
  */
  readonly sourceCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_port_range Ec2TransitGatewayMeteringPolicyEntry#source_port_range}
  */
  readonly sourcePortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_id Ec2TransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_id}
  */
  readonly sourceTransitGatewayAttachmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#source_transit_gateway_attachment_type Ec2TransitGatewayMeteringPolicyEntry#source_transit_gateway_attachment_type}
  */
  readonly sourceTransitGatewayAttachmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#transit_gateway_metering_policy_id Ec2TransitGatewayMeteringPolicyEntry#transit_gateway_metering_policy_id}
  */
  readonly transitGatewayMeteringPolicyId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#timeouts Ec2TransitGatewayMeteringPolicyEntry#timeouts}
  */
  readonly timeouts?: Ec2TransitGatewayMeteringPolicyEntryTimeouts;
}
export interface Ec2TransitGatewayMeteringPolicyEntryTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#create Ec2TransitGatewayMeteringPolicyEntry#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#delete Ec2TransitGatewayMeteringPolicyEntry#delete}
  */
  readonly delete?: string;
}

export function ec2TransitGatewayMeteringPolicyEntryTimeoutsToTerraform(struct?: Ec2TransitGatewayMeteringPolicyEntryTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function ec2TransitGatewayMeteringPolicyEntryTimeoutsToHclTerraform(struct?: Ec2TransitGatewayMeteringPolicyEntryTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2TransitGatewayMeteringPolicyEntryTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2TransitGatewayMeteringPolicyEntryTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry aws_ec2_transit_gateway_metering_policy_entry}
*/
export class Ec2TransitGatewayMeteringPolicyEntry extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_transit_gateway_metering_policy_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2TransitGatewayMeteringPolicyEntry resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2TransitGatewayMeteringPolicyEntry to import
  * @param importFromId The id of the existing Ec2TransitGatewayMeteringPolicyEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2TransitGatewayMeteringPolicyEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_ec2_transit_gateway_metering_policy_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.40.0/docs/resources/ec2_transit_gateway_metering_policy_entry aws_ec2_transit_gateway_metering_policy_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2TransitGatewayMeteringPolicyEntryConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2TransitGatewayMeteringPolicyEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_transit_gateway_metering_policy_entry',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.40.0',
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
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._destinationPortRange = config.destinationPortRange;
    this._destinationTransitGatewayAttachmentId = config.destinationTransitGatewayAttachmentId;
    this._destinationTransitGatewayAttachmentType = config.destinationTransitGatewayAttachmentType;
    this._meteredAccount = config.meteredAccount;
    this._policyRuleNumber = config.policyRuleNumber;
    this._protocol = config.protocol;
    this._region = config.region;
    this._sourceCidrBlock = config.sourceCidrBlock;
    this._sourcePortRange = config.sourcePortRange;
    this._sourceTransitGatewayAttachmentId = config.sourceTransitGatewayAttachmentId;
    this._sourceTransitGatewayAttachmentType = config.sourceTransitGatewayAttachmentType;
    this._transitGatewayMeteringPolicyId = config.transitGatewayMeteringPolicyId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // destination_port_range - computed: false, optional: true, required: false
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

  // destination_transit_gateway_attachment_id - computed: false, optional: true, required: false
  private _destinationTransitGatewayAttachmentId?: string; 
  public get destinationTransitGatewayAttachmentId() {
    return this.getStringAttribute('destination_transit_gateway_attachment_id');
  }
  public set destinationTransitGatewayAttachmentId(value: string) {
    this._destinationTransitGatewayAttachmentId = value;
  }
  public resetDestinationTransitGatewayAttachmentId() {
    this._destinationTransitGatewayAttachmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTransitGatewayAttachmentIdInput() {
    return this._destinationTransitGatewayAttachmentId;
  }

  // destination_transit_gateway_attachment_type - computed: false, optional: true, required: false
  private _destinationTransitGatewayAttachmentType?: string; 
  public get destinationTransitGatewayAttachmentType() {
    return this.getStringAttribute('destination_transit_gateway_attachment_type');
  }
  public set destinationTransitGatewayAttachmentType(value: string) {
    this._destinationTransitGatewayAttachmentType = value;
  }
  public resetDestinationTransitGatewayAttachmentType() {
    this._destinationTransitGatewayAttachmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTransitGatewayAttachmentTypeInput() {
    return this._destinationTransitGatewayAttachmentType;
  }

  // metered_account - computed: false, optional: false, required: true
  private _meteredAccount?: string; 
  public get meteredAccount() {
    return this.getStringAttribute('metered_account');
  }
  public set meteredAccount(value: string) {
    this._meteredAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meteredAccountInput() {
    return this._meteredAccount;
  }

  // policy_rule_number - computed: false, optional: false, required: true
  private _policyRuleNumber?: number; 
  public get policyRuleNumber() {
    return this.getNumberAttribute('policy_rule_number');
  }
  public set policyRuleNumber(value: number) {
    this._policyRuleNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuleNumberInput() {
    return this._policyRuleNumber;
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

  // source_port_range - computed: false, optional: true, required: false
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

  // source_transit_gateway_attachment_id - computed: false, optional: true, required: false
  private _sourceTransitGatewayAttachmentId?: string; 
  public get sourceTransitGatewayAttachmentId() {
    return this.getStringAttribute('source_transit_gateway_attachment_id');
  }
  public set sourceTransitGatewayAttachmentId(value: string) {
    this._sourceTransitGatewayAttachmentId = value;
  }
  public resetSourceTransitGatewayAttachmentId() {
    this._sourceTransitGatewayAttachmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTransitGatewayAttachmentIdInput() {
    return this._sourceTransitGatewayAttachmentId;
  }

  // source_transit_gateway_attachment_type - computed: false, optional: true, required: false
  private _sourceTransitGatewayAttachmentType?: string; 
  public get sourceTransitGatewayAttachmentType() {
    return this.getStringAttribute('source_transit_gateway_attachment_type');
  }
  public set sourceTransitGatewayAttachmentType(value: string) {
    this._sourceTransitGatewayAttachmentType = value;
  }
  public resetSourceTransitGatewayAttachmentType() {
    this._sourceTransitGatewayAttachmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTransitGatewayAttachmentTypeInput() {
    return this._sourceTransitGatewayAttachmentType;
  }

  // transit_gateway_metering_policy_id - computed: false, optional: false, required: true
  private _transitGatewayMeteringPolicyId?: string; 
  public get transitGatewayMeteringPolicyId() {
    return this.getStringAttribute('transit_gateway_metering_policy_id');
  }
  public set transitGatewayMeteringPolicyId(value: string) {
    this._transitGatewayMeteringPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayMeteringPolicyIdInput() {
    return this._transitGatewayMeteringPolicyId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Ec2TransitGatewayMeteringPolicyEntryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Ec2TransitGatewayMeteringPolicyEntryTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_cidr_block: cdktn.stringToTerraform(this._destinationCidrBlock),
      destination_port_range: cdktn.stringToTerraform(this._destinationPortRange),
      destination_transit_gateway_attachment_id: cdktn.stringToTerraform(this._destinationTransitGatewayAttachmentId),
      destination_transit_gateway_attachment_type: cdktn.stringToTerraform(this._destinationTransitGatewayAttachmentType),
      metered_account: cdktn.stringToTerraform(this._meteredAccount),
      policy_rule_number: cdktn.numberToTerraform(this._policyRuleNumber),
      protocol: cdktn.stringToTerraform(this._protocol),
      region: cdktn.stringToTerraform(this._region),
      source_cidr_block: cdktn.stringToTerraform(this._sourceCidrBlock),
      source_port_range: cdktn.stringToTerraform(this._sourcePortRange),
      source_transit_gateway_attachment_id: cdktn.stringToTerraform(this._sourceTransitGatewayAttachmentId),
      source_transit_gateway_attachment_type: cdktn.stringToTerraform(this._sourceTransitGatewayAttachmentType),
      transit_gateway_metering_policy_id: cdktn.stringToTerraform(this._transitGatewayMeteringPolicyId),
      timeouts: ec2TransitGatewayMeteringPolicyEntryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_cidr_block: {
        value: cdktn.stringToHclTerraform(this._destinationCidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port_range: {
        value: cdktn.stringToHclTerraform(this._destinationPortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_transit_gateway_attachment_id: {
        value: cdktn.stringToHclTerraform(this._destinationTransitGatewayAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_transit_gateway_attachment_type: {
        value: cdktn.stringToHclTerraform(this._destinationTransitGatewayAttachmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metered_account: {
        value: cdktn.stringToHclTerraform(this._meteredAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_rule_number: {
        value: cdktn.numberToHclTerraform(this._policyRuleNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktn.stringToHclTerraform(this._protocol),
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
      source_cidr_block: {
        value: cdktn.stringToHclTerraform(this._sourceCidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port_range: {
        value: cdktn.stringToHclTerraform(this._sourcePortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_transit_gateway_attachment_id: {
        value: cdktn.stringToHclTerraform(this._sourceTransitGatewayAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_transit_gateway_attachment_type: {
        value: cdktn.stringToHclTerraform(this._sourceTransitGatewayAttachmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_metering_policy_id: {
        value: cdktn.stringToHclTerraform(this._transitGatewayMeteringPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: ec2TransitGatewayMeteringPolicyEntryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2TransitGatewayMeteringPolicyEntryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
