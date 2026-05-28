/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/securityhub_aggregator_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityhubAggregatorV2Config extends cdktn.TerraformMetaArguments {
  /**
  * The list of Regions linked to the aggregation Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/securityhub_aggregator_v2#linked_regions SecurityhubAggregatorV2#linked_regions}
  */
  readonly linkedRegions?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/securityhub_aggregator_v2#region SecurityhubAggregatorV2#region}
  */
  readonly region?: string;
  /**
  * Determines how Regions are linked: ALL_REGIONS, ALL_REGIONS_EXCEPT_SPECIFIED, or SPECIFIED_REGIONS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/securityhub_aggregator_v2#region_linking_mode SecurityhubAggregatorV2#region_linking_mode}
  */
  readonly regionLinkingMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/securityhub_aggregator_v2#tags SecurityhubAggregatorV2#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/securityhub_aggregator_v2 aws_securityhub_aggregator_v2}
*/
export class SecurityhubAggregatorV2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_aggregator_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityhubAggregatorV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubAggregatorV2 to import
  * @param importFromId The id of the existing SecurityhubAggregatorV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/securityhub_aggregator_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubAggregatorV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_aggregator_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/securityhub_aggregator_v2 aws_securityhub_aggregator_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubAggregatorV2Config
  */
  public constructor(scope: Construct, id: string, config: SecurityhubAggregatorV2Config) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_aggregator_v2',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.47.0',
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
    this._linkedRegions = config.linkedRegions;
    this._region = config.region;
    this._regionLinkingMode = config.regionLinkingMode;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation_region - computed: true, optional: false, required: false
  public get aggregationRegion() {
    return this.getStringAttribute('aggregation_region');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // linked_regions - computed: false, optional: true, required: false
  private _linkedRegions?: string[]; 
  public get linkedRegions() {
    return cdktn.Fn.tolist(this.getListAttribute('linked_regions'));
  }
  public set linkedRegions(value: string[]) {
    this._linkedRegions = value;
  }
  public resetLinkedRegions() {
    this._linkedRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedRegionsInput() {
    return this._linkedRegions;
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

  // region_linking_mode - computed: false, optional: false, required: true
  private _regionLinkingMode?: string; 
  public get regionLinkingMode() {
    return this.getStringAttribute('region_linking_mode');
  }
  public set regionLinkingMode(value: string) {
    this._regionLinkingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionLinkingModeInput() {
    return this._regionLinkingMode;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      linked_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._linkedRegions),
      region: cdktn.stringToTerraform(this._region),
      region_linking_mode: cdktn.stringToTerraform(this._regionLinkingMode),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      linked_regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._linkedRegions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_linking_mode: {
        value: cdktn.stringToHclTerraform(this._regionLinkingMode),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
