/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/s3tables_table_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3TablesTableReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/s3tables_table_replication#region S3TablesTableReplication#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/s3tables_table_replication#role S3TablesTableReplication#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/s3tables_table_replication#table_arn S3TablesTableReplication#table_arn}
  */
  readonly tableArn: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/s3tables_table_replication#rule S3TablesTableReplication#rule}
  */
  readonly rule?: S3TablesTableReplicationRule[] | cdktf.IResolvable;
}
export interface S3TablesTableReplicationRuleDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/s3tables_table_replication#destination_table_bucket_arn S3TablesTableReplication#destination_table_bucket_arn}
  */
  readonly destinationTableBucketArn: string;
}

export function s3TablesTableReplicationRuleDestinationToTerraform(struct?: S3TablesTableReplicationRuleDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_table_bucket_arn: cdktf.stringToTerraform(struct!.destinationTableBucketArn),
  }
}


export function s3TablesTableReplicationRuleDestinationToHclTerraform(struct?: S3TablesTableReplicationRuleDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_table_bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.destinationTableBucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableReplicationRuleDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3TablesTableReplicationRuleDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationTableBucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTableBucketArn = this._destinationTableBucketArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableReplicationRuleDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationTableBucketArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationTableBucketArn = value.destinationTableBucketArn;
    }
  }

  // destination_table_bucket_arn - computed: false, optional: false, required: true
  private _destinationTableBucketArn?: string; 
  public get destinationTableBucketArn() {
    return this.getStringAttribute('destination_table_bucket_arn');
  }
  public set destinationTableBucketArn(value: string) {
    this._destinationTableBucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableBucketArnInput() {
    return this._destinationTableBucketArn;
  }
}

export class S3TablesTableReplicationRuleDestinationList extends cdktf.ComplexList {
  public internalValue? : S3TablesTableReplicationRuleDestination[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): S3TablesTableReplicationRuleDestinationOutputReference {
    return new S3TablesTableReplicationRuleDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3TablesTableReplicationRule {
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/s3tables_table_replication#destination S3TablesTableReplication#destination}
  */
  readonly destination?: S3TablesTableReplicationRuleDestination[] | cdktf.IResolvable;
}

export function s3TablesTableReplicationRuleToTerraform(struct?: S3TablesTableReplicationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.listMapper(s3TablesTableReplicationRuleDestinationToTerraform, true)(struct!.destination),
  }
}


export function s3TablesTableReplicationRuleToHclTerraform(struct?: S3TablesTableReplicationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.listMapperHcl(s3TablesTableReplicationRuleDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "set",
      storageClassType: "S3TablesTableReplicationRuleDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableReplicationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): S3TablesTableReplicationRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3TablesTableReplicationRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new S3TablesTableReplicationRuleDestinationList(this, "destination", true);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: S3TablesTableReplicationRuleDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}

export class S3TablesTableReplicationRuleList extends cdktf.ComplexList {
  public internalValue? : S3TablesTableReplicationRule[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): S3TablesTableReplicationRuleOutputReference {
    return new S3TablesTableReplicationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/s3tables_table_replication aws_s3tables_table_replication}
*/
export class S3TablesTableReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3tables_table_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3TablesTableReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3TablesTableReplication to import
  * @param importFromId The id of the existing S3TablesTableReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/s3tables_table_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3TablesTableReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3tables_table_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.24.0/docs/resources/s3tables_table_replication aws_s3tables_table_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3TablesTableReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: S3TablesTableReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3tables_table_replication',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.24.0',
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
    this._role = config.role;
    this._tableArn = config.tableArn;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // table_arn - computed: false, optional: false, required: true
  private _tableArn?: string; 
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }
  public set tableArn(value: string) {
    this._tableArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableArnInput() {
    return this._tableArn;
  }

  // version_token - computed: true, optional: false, required: false
  public get versionToken() {
    return this.getStringAttribute('version_token');
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new S3TablesTableReplicationRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: S3TablesTableReplicationRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktf.stringToTerraform(this._region),
      role: cdktf.stringToTerraform(this._role),
      table_arn: cdktf.stringToTerraform(this._tableArn),
      rule: cdktf.listMapper(s3TablesTableReplicationRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_arn: {
        value: cdktf.stringToHclTerraform(this._tableArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(s3TablesTableReplicationRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3TablesTableReplicationRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
