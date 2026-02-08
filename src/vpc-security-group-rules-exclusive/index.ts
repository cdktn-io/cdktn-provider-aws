/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcSecurityGroupRulesExclusiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#egress_rule_ids VpcSecurityGroupRulesExclusive#egress_rule_ids}
  */
  readonly egressRuleIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#ingress_rule_ids VpcSecurityGroupRulesExclusive#ingress_rule_ids}
  */
  readonly ingressRuleIds: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#region VpcSecurityGroupRulesExclusive#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#security_group_id VpcSecurityGroupRulesExclusive#security_group_id}
  */
  readonly securityGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive aws_vpc_security_group_rules_exclusive}
*/
export class VpcSecurityGroupRulesExclusive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpc_security_group_rules_exclusive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcSecurityGroupRulesExclusive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcSecurityGroupRulesExclusive to import
  * @param importFromId The id of the existing VpcSecurityGroupRulesExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcSecurityGroupRulesExclusive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_vpc_security_group_rules_exclusive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive aws_vpc_security_group_rules_exclusive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcSecurityGroupRulesExclusiveConfig
  */
  public constructor(scope: Construct, id: string, config: VpcSecurityGroupRulesExclusiveConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpc_security_group_rules_exclusive',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.31.0',
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
    this._egressRuleIds = config.egressRuleIds;
    this._ingressRuleIds = config.ingressRuleIds;
    this._region = config.region;
    this._securityGroupId = config.securityGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // egress_rule_ids - computed: false, optional: false, required: true
  private _egressRuleIds?: string[]; 
  public get egressRuleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('egress_rule_ids'));
  }
  public set egressRuleIds(value: string[]) {
    this._egressRuleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get egressRuleIdsInput() {
    return this._egressRuleIds;
  }

  // ingress_rule_ids - computed: false, optional: false, required: true
  private _ingressRuleIds?: string[]; 
  public get ingressRuleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ingress_rule_ids'));
  }
  public set ingressRuleIds(value: string[]) {
    this._ingressRuleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressRuleIdsInput() {
    return this._ingressRuleIds;
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

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      egress_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._egressRuleIds),
      ingress_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ingressRuleIds),
      region: cdktf.stringToTerraform(this._region),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      egress_rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._egressRuleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ingress_rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ingressRuleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
