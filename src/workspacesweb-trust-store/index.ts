/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspacesweb_trust_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WorkspaceswebTrustStoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspacesweb_trust_store#region WorkspaceswebTrustStore#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspacesweb_trust_store#tags WorkspaceswebTrustStore#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspacesweb_trust_store#certificate WorkspaceswebTrustStore#certificate}
  */
  readonly certificate?: WorkspaceswebTrustStoreCertificate[] | cdktn.IResolvable;
}
export interface WorkspaceswebTrustStoreCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspacesweb_trust_store#body WorkspaceswebTrustStore#body}
  */
  readonly body: string;
}

export function workspaceswebTrustStoreCertificateToTerraform(struct?: WorkspaceswebTrustStoreCertificate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    body: cdktn.stringToTerraform(struct!.body),
  }
}


export function workspaceswebTrustStoreCertificateToHclTerraform(struct?: WorkspaceswebTrustStoreCertificate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    body: {
      value: cdktn.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceswebTrustStoreCertificateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WorkspaceswebTrustStoreCertificate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceswebTrustStoreCertificate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
    }
  }

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // not_valid_after - computed: true, optional: false, required: false
  public get notValidAfter() {
    return this.getStringAttribute('not_valid_after');
  }

  // not_valid_before - computed: true, optional: false, required: false
  public get notValidBefore() {
    return this.getStringAttribute('not_valid_before');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
}

export class WorkspaceswebTrustStoreCertificateList extends cdktn.ComplexList {
  public internalValue? : WorkspaceswebTrustStoreCertificate[] | cdktn.IResolvable

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
  public get(index: number): WorkspaceswebTrustStoreCertificateOutputReference {
    return new WorkspaceswebTrustStoreCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspacesweb_trust_store aws_workspacesweb_trust_store}
*/
export class WorkspaceswebTrustStore extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workspacesweb_trust_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WorkspaceswebTrustStore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceswebTrustStore to import
  * @param importFromId The id of the existing WorkspaceswebTrustStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspacesweb_trust_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceswebTrustStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_workspacesweb_trust_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/workspacesweb_trust_store aws_workspacesweb_trust_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceswebTrustStoreConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WorkspaceswebTrustStoreConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_workspacesweb_trust_store',
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
    this._tags = config.tags;
    this._certificate.internalValue = config.certificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_portal_arns - computed: true, optional: false, required: false
  public get associatedPortalArns() {
    return this.getListAttribute('associated_portal_arns');
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

  // trust_store_arn - computed: true, optional: false, required: false
  public get trustStoreArn() {
    return this.getStringAttribute('trust_store_arn');
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new WorkspaceswebTrustStoreCertificateList(this, "certificate", true);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: WorkspaceswebTrustStoreCertificate[] | cdktn.IResolvable) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      certificate: cdktn.listMapper(workspaceswebTrustStoreCertificateToTerraform, true)(this._certificate.internalValue),
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
      certificate: {
        value: cdktn.listMapperHcl(workspaceswebTrustStoreCertificateToHclTerraform, true)(this._certificate.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkspaceswebTrustStoreCertificateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
