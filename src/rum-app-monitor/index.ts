/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RumAppMonitorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}
  */
  readonly cwLogEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#domain RumAppMonitor#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#domain_list RumAppMonitor#domain_list}
  */
  readonly domainList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#id RumAppMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#name RumAppMonitor#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#region RumAppMonitor#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#tags RumAppMonitor#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#tags_all RumAppMonitor#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * app_monitor_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#app_monitor_configuration RumAppMonitor#app_monitor_configuration}
  */
  readonly appMonitorConfiguration?: RumAppMonitorAppMonitorConfiguration;
  /**
  * custom_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#custom_events RumAppMonitor#custom_events}
  */
  readonly customEvents?: RumAppMonitorCustomEvents;
}
export interface RumAppMonitorAppMonitorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#allow_cookies RumAppMonitor#allow_cookies}
  */
  readonly allowCookies?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#enable_xray RumAppMonitor#enable_xray}
  */
  readonly enableXray?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#excluded_pages RumAppMonitor#excluded_pages}
  */
  readonly excludedPages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#favorite_pages RumAppMonitor#favorite_pages}
  */
  readonly favoritePages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#guest_role_arn RumAppMonitor#guest_role_arn}
  */
  readonly guestRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#identity_pool_id RumAppMonitor#identity_pool_id}
  */
  readonly identityPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#included_pages RumAppMonitor#included_pages}
  */
  readonly includedPages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#session_sample_rate RumAppMonitor#session_sample_rate}
  */
  readonly sessionSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#telemetries RumAppMonitor#telemetries}
  */
  readonly telemetries?: string[];
}

export function rumAppMonitorAppMonitorConfigurationToTerraform(struct?: RumAppMonitorAppMonitorConfigurationOutputReference | RumAppMonitorAppMonitorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_cookies: cdktn.booleanToTerraform(struct!.allowCookies),
    enable_xray: cdktn.booleanToTerraform(struct!.enableXray),
    excluded_pages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedPages),
    favorite_pages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.favoritePages),
    guest_role_arn: cdktn.stringToTerraform(struct!.guestRoleArn),
    identity_pool_id: cdktn.stringToTerraform(struct!.identityPoolId),
    included_pages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedPages),
    session_sample_rate: cdktn.numberToTerraform(struct!.sessionSampleRate),
    telemetries: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.telemetries),
  }
}


export function rumAppMonitorAppMonitorConfigurationToHclTerraform(struct?: RumAppMonitorAppMonitorConfigurationOutputReference | RumAppMonitorAppMonitorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_cookies: {
      value: cdktn.booleanToHclTerraform(struct!.allowCookies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_xray: {
      value: cdktn.booleanToHclTerraform(struct!.enableXray),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_pages: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedPages),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    favorite_pages: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.favoritePages),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    guest_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.guestRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.identityPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    included_pages: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedPages),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    session_sample_rate: {
      value: cdktn.numberToHclTerraform(struct!.sessionSampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telemetries: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.telemetries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RumAppMonitorAppMonitorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RumAppMonitorAppMonitorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCookies = this._allowCookies;
    }
    if (this._enableXray !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableXray = this._enableXray;
    }
    if (this._excludedPages !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPages = this._excludedPages;
    }
    if (this._favoritePages !== undefined) {
      hasAnyValues = true;
      internalValueResult.favoritePages = this._favoritePages;
    }
    if (this._guestRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestRoleArn = this._guestRoleArn;
    }
    if (this._identityPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityPoolId = this._identityPoolId;
    }
    if (this._includedPages !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPages = this._includedPages;
    }
    if (this._sessionSampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionSampleRate = this._sessionSampleRate;
    }
    if (this._telemetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetries = this._telemetries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RumAppMonitorAppMonitorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCookies = undefined;
      this._enableXray = undefined;
      this._excludedPages = undefined;
      this._favoritePages = undefined;
      this._guestRoleArn = undefined;
      this._identityPoolId = undefined;
      this._includedPages = undefined;
      this._sessionSampleRate = undefined;
      this._telemetries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCookies = value.allowCookies;
      this._enableXray = value.enableXray;
      this._excludedPages = value.excludedPages;
      this._favoritePages = value.favoritePages;
      this._guestRoleArn = value.guestRoleArn;
      this._identityPoolId = value.identityPoolId;
      this._includedPages = value.includedPages;
      this._sessionSampleRate = value.sessionSampleRate;
      this._telemetries = value.telemetries;
    }
  }

  // allow_cookies - computed: false, optional: true, required: false
  private _allowCookies?: boolean | cdktn.IResolvable; 
  public get allowCookies() {
    return this.getBooleanAttribute('allow_cookies');
  }
  public set allowCookies(value: boolean | cdktn.IResolvable) {
    this._allowCookies = value;
  }
  public resetAllowCookies() {
    this._allowCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCookiesInput() {
    return this._allowCookies;
  }

  // enable_xray - computed: false, optional: true, required: false
  private _enableXray?: boolean | cdktn.IResolvable; 
  public get enableXray() {
    return this.getBooleanAttribute('enable_xray');
  }
  public set enableXray(value: boolean | cdktn.IResolvable) {
    this._enableXray = value;
  }
  public resetEnableXray() {
    this._enableXray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableXrayInput() {
    return this._enableXray;
  }

  // excluded_pages - computed: false, optional: true, required: false
  private _excludedPages?: string[]; 
  public get excludedPages() {
    return cdktn.Fn.tolist(this.getListAttribute('excluded_pages'));
  }
  public set excludedPages(value: string[]) {
    this._excludedPages = value;
  }
  public resetExcludedPages() {
    this._excludedPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPagesInput() {
    return this._excludedPages;
  }

  // favorite_pages - computed: false, optional: true, required: false
  private _favoritePages?: string[]; 
  public get favoritePages() {
    return cdktn.Fn.tolist(this.getListAttribute('favorite_pages'));
  }
  public set favoritePages(value: string[]) {
    this._favoritePages = value;
  }
  public resetFavoritePages() {
    this._favoritePages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get favoritePagesInput() {
    return this._favoritePages;
  }

  // guest_role_arn - computed: false, optional: true, required: false
  private _guestRoleArn?: string; 
  public get guestRoleArn() {
    return this.getStringAttribute('guest_role_arn');
  }
  public set guestRoleArn(value: string) {
    this._guestRoleArn = value;
  }
  public resetGuestRoleArn() {
    this._guestRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestRoleArnInput() {
    return this._guestRoleArn;
  }

  // identity_pool_id - computed: false, optional: true, required: false
  private _identityPoolId?: string; 
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }
  public set identityPoolId(value: string) {
    this._identityPoolId = value;
  }
  public resetIdentityPoolId() {
    this._identityPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPoolIdInput() {
    return this._identityPoolId;
  }

  // included_pages - computed: false, optional: true, required: false
  private _includedPages?: string[]; 
  public get includedPages() {
    return cdktn.Fn.tolist(this.getListAttribute('included_pages'));
  }
  public set includedPages(value: string[]) {
    this._includedPages = value;
  }
  public resetIncludedPages() {
    this._includedPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPagesInput() {
    return this._includedPages;
  }

  // session_sample_rate - computed: false, optional: true, required: false
  private _sessionSampleRate?: number; 
  public get sessionSampleRate() {
    return this.getNumberAttribute('session_sample_rate');
  }
  public set sessionSampleRate(value: number) {
    this._sessionSampleRate = value;
  }
  public resetSessionSampleRate() {
    this._sessionSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSampleRateInput() {
    return this._sessionSampleRate;
  }

  // telemetries - computed: false, optional: true, required: false
  private _telemetries?: string[]; 
  public get telemetries() {
    return cdktn.Fn.tolist(this.getListAttribute('telemetries'));
  }
  public set telemetries(value: string[]) {
    this._telemetries = value;
  }
  public resetTelemetries() {
    this._telemetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetriesInput() {
    return this._telemetries;
  }
}
export interface RumAppMonitorCustomEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#status RumAppMonitor#status}
  */
  readonly status?: string;
}

export function rumAppMonitorCustomEventsToTerraform(struct?: RumAppMonitorCustomEventsOutputReference | RumAppMonitorCustomEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function rumAppMonitorCustomEventsToHclTerraform(struct?: RumAppMonitorCustomEventsOutputReference | RumAppMonitorCustomEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RumAppMonitorCustomEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RumAppMonitorCustomEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RumAppMonitorCustomEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor aws_rum_app_monitor}
*/
export class RumAppMonitor extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rum_app_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RumAppMonitor resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RumAppMonitor to import
  * @param importFromId The id of the existing RumAppMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RumAppMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_rum_app_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/rum_app_monitor aws_rum_app_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RumAppMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: RumAppMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_rum_app_monitor',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.45.0',
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
    this._cwLogEnabled = config.cwLogEnabled;
    this._domain = config.domain;
    this._domainList = config.domainList;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._appMonitorConfiguration.internalValue = config.appMonitorConfiguration;
    this._customEvents.internalValue = config.customEvents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_monitor_id - computed: true, optional: false, required: false
  public get appMonitorId() {
    return this.getStringAttribute('app_monitor_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cw_log_enabled - computed: false, optional: true, required: false
  private _cwLogEnabled?: boolean | cdktn.IResolvable; 
  public get cwLogEnabled() {
    return this.getBooleanAttribute('cw_log_enabled');
  }
  public set cwLogEnabled(value: boolean | cdktn.IResolvable) {
    this._cwLogEnabled = value;
  }
  public resetCwLogEnabled() {
    this._cwLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cwLogEnabledInput() {
    return this._cwLogEnabled;
  }

  // cw_log_group - computed: true, optional: false, required: false
  public get cwLogGroup() {
    return this.getStringAttribute('cw_log_group');
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_list - computed: false, optional: true, required: false
  private _domainList?: string[]; 
  public get domainList() {
    return this.getListAttribute('domain_list');
  }
  public set domainList(value: string[]) {
    this._domainList = value;
  }
  public resetDomainList() {
    this._domainList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListInput() {
    return this._domainList;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // app_monitor_configuration - computed: false, optional: true, required: false
  private _appMonitorConfiguration = new RumAppMonitorAppMonitorConfigurationOutputReference(this, "app_monitor_configuration");
  public get appMonitorConfiguration() {
    return this._appMonitorConfiguration;
  }
  public putAppMonitorConfiguration(value: RumAppMonitorAppMonitorConfiguration) {
    this._appMonitorConfiguration.internalValue = value;
  }
  public resetAppMonitorConfiguration() {
    this._appMonitorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appMonitorConfigurationInput() {
    return this._appMonitorConfiguration.internalValue;
  }

  // custom_events - computed: false, optional: true, required: false
  private _customEvents = new RumAppMonitorCustomEventsOutputReference(this, "custom_events");
  public get customEvents() {
    return this._customEvents;
  }
  public putCustomEvents(value: RumAppMonitorCustomEvents) {
    this._customEvents.internalValue = value;
  }
  public resetCustomEvents() {
    this._customEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEventsInput() {
    return this._customEvents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cw_log_enabled: cdktn.booleanToTerraform(this._cwLogEnabled),
      domain: cdktn.stringToTerraform(this._domain),
      domain_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._domainList),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      tags_all: cdktn.hashMapper(cdktn.stringToTerraform)(this._tagsAll),
      app_monitor_configuration: rumAppMonitorAppMonitorConfigurationToTerraform(this._appMonitorConfiguration.internalValue),
      custom_events: rumAppMonitorCustomEventsToTerraform(this._customEvents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cw_log_enabled: {
        value: cdktn.booleanToHclTerraform(this._cwLogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktn.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_list: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._domainList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      app_monitor_configuration: {
        value: rumAppMonitorAppMonitorConfigurationToHclTerraform(this._appMonitorConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RumAppMonitorAppMonitorConfigurationList",
      },
      custom_events: {
        value: rumAppMonitorCustomEventsToHclTerraform(this._customEvents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RumAppMonitorCustomEventsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
