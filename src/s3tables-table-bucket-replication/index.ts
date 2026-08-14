/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3tables_table_bucket_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface S3TablesTableBucketReplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3tables_table_bucket_replication#region S3TablesTableBucketReplication#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3tables_table_bucket_replication#role S3TablesTableBucketReplication#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3tables_table_bucket_replication#table_bucket_arn S3TablesTableBucketReplication#table_bucket_arn}
  */
  readonly tableBucketArn: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3tables_table_bucket_replication#rule S3TablesTableBucketReplication#rule}
  */
  readonly rule?: S3TablesTableBucketReplicationRule[] | cdktn.IResolvable;
}
export interface S3TablesTableBucketReplicationRuleDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3tables_table_bucket_replication#destination_table_bucket_arn S3TablesTableBucketReplication#destination_table_bucket_arn}
  */
  readonly destinationTableBucketArn: string;
}

export function s3TablesTableBucketReplicationRuleDestinationToTerraform(struct?: S3TablesTableBucketReplicationRuleDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_table_bucket_arn: cdktn.stringToTerraform(struct!.destinationTableBucketArn),
  }
}


export function s3TablesTableBucketReplicationRuleDestinationToHclTerraform(struct?: S3TablesTableBucketReplicationRuleDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_table_bucket_arn: {
      value: cdktn.stringToHclTerraform(struct!.destinationTableBucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableBucketReplicationRuleDestinationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3TablesTableBucketReplicationRuleDestination | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3TablesTableBucketReplicationRuleDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationTableBucketArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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

export class S3TablesTableBucketReplicationRuleDestinationList extends cdktn.ComplexList {
  public internalValue? : S3TablesTableBucketReplicationRuleDestination[] | cdktn.IResolvable

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
  public get(index: number): S3TablesTableBucketReplicationRuleDestinationOutputReference {
    return new S3TablesTableBucketReplicationRuleDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3TablesTableBucketReplicationRule {
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3tables_table_bucket_replication#destination S3TablesTableBucketReplication#destination}
  */
  readonly destination?: S3TablesTableBucketReplicationRuleDestination[] | cdktn.IResolvable;
}

export function s3TablesTableBucketReplicationRuleToTerraform(struct?: S3TablesTableBucketReplicationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.listMapper(s3TablesTableBucketReplicationRuleDestinationToTerraform, true)(struct!.destination),
  }
}


export function s3TablesTableBucketReplicationRuleToHclTerraform(struct?: S3TablesTableBucketReplicationRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.listMapperHcl(s3TablesTableBucketReplicationRuleDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "set",
      storageClassType: "S3TablesTableBucketReplicationRuleDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class S3TablesTableBucketReplicationRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): S3TablesTableBucketReplicationRule | cdktn.IResolvable | undefined {
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

  public set internalValue(value: S3TablesTableBucketReplicationRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
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
  private _destination = new S3TablesTableBucketReplicationRuleDestinationList(this, "destination", true);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: S3TablesTableBucketReplicationRuleDestination[] | cdktn.IResolvable) {
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

export class S3TablesTableBucketReplicationRuleList extends cdktn.ComplexList {
  public internalValue? : S3TablesTableBucketReplicationRule[] | cdktn.IResolvable

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
  public get(index: number): S3TablesTableBucketReplicationRuleOutputReference {
    return new S3TablesTableBucketReplicationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3tables_table_bucket_replication aws_s3tables_table_bucket_replication}
*/
export class S3TablesTableBucketReplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3tables_table_bucket_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a S3TablesTableBucketReplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3TablesTableBucketReplication to import
  * @param importFromId The id of the existing S3TablesTableBucketReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3tables_table_bucket_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3TablesTableBucketReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_s3tables_table_bucket_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/s3tables_table_bucket_replication aws_s3tables_table_bucket_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3TablesTableBucketReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: S3TablesTableBucketReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3tables_table_bucket_replication',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.60.0',
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
    this._tableBucketArn = config.tableBucketArn;
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

  // table_bucket_arn - computed: false, optional: false, required: true
  private _tableBucketArn?: string; 
  public get tableBucketArn() {
    return this.getStringAttribute('table_bucket_arn');
  }
  public set tableBucketArn(value: string) {
    this._tableBucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableBucketArnInput() {
    return this._tableBucketArn;
  }

  // version_token - computed: true, optional: false, required: false
  public get versionToken() {
    return this.getStringAttribute('version_token');
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new S3TablesTableBucketReplicationRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: S3TablesTableBucketReplicationRule[] | cdktn.IResolvable) {
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
      region: cdktn.stringToTerraform(this._region),
      role: cdktn.stringToTerraform(this._role),
      table_bucket_arn: cdktn.stringToTerraform(this._tableBucketArn),
      rule: cdktn.listMapper(s3TablesTableBucketReplicationRuleToTerraform, true)(this._rule.internalValue),
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
      role: {
        value: cdktn.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_bucket_arn: {
        value: cdktn.stringToHclTerraform(this._tableBucketArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktn.listMapperHcl(s3TablesTableBucketReplicationRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3TablesTableBucketReplicationRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
