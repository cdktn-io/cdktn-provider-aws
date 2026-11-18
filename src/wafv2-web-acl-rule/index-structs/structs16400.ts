/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementForwardedIpConfig,
wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementForwardedIpConfigToTerraform,
wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementForwardedIpConfigToHclTerraform,
Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementForwardedIpConfigList } from './structs16000';
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatement {
  /**
  * List of ASN numbers (0-4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#asn_list Wafv2WebAclRuleA#asn_list}
  */
  readonly asnList: number[];
  /**
  * forwarded_ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#forwarded_ip_config Wafv2WebAclRuleA#forwarded_ip_config}
  */
  readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementForwardedIpConfig[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asn_list: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.asnList),
    forwarded_ip_config: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementForwardedIpConfigToTerraform, true)(struct!.forwardedIpConfig),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    asn_list: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.asnList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    forwarded_ip_config: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementForwardedIpConfigToHclTerraform, true)(struct!.forwardedIpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementForwardedIpConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnList !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList;
    }
    if (this._forwardedIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asnList = undefined;
      this._forwardedIpConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asnList = value.asnList;
      this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
    }
  }

  // asn_list - computed: false, optional: false, required: true
  private _asnList?: number[]; 
  public get asnList() {
    return this.getNumberListAttribute('asn_list');
  }
  public set asnList(value: number[]) {
    this._asnList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList;
  }

  // forwarded_ip_config - computed: false, optional: true, required: false
  private _forwardedIpConfig = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementForwardedIpConfigList(this, "forwarded_ip_config", false);
  public get forwardedIpConfig() {
    return this._forwardedIpConfig;
  }
  public putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementForwardedIpConfig[] | cdktn.IResolvable) {
    this._forwardedIpConfig.internalValue = value;
  }
  public resetForwardedIpConfig() {
    this._forwardedIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedIpConfigInput() {
    return this._forwardedIpConfig.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatement[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementAsnMatchStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling?: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oversizeHandling = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oversizeHandling = value.oversizeHandling;
    }
  }

  // oversize_handling - computed: true, optional: true, required: false
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  public resetOversizeHandling() {
    this._oversizeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAllToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAllList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#excluded_cookies Wafv2WebAclRuleA#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#included_cookies Wafv2WebAclRuleA#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all Wafv2WebAclRuleA#all}
  */
  readonly all?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excluded_cookies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedCookies),
    all: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform, true)(struct!.all),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excluded_cookies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedCookies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_cookies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedCookies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    all: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAllToHclTerraform, true)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAllList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedCookies = this._excludedCookies;
    }
    if (this._includedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCookies = this._includedCookies;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedCookies = undefined;
      this._includedCookies = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedCookies = value.excludedCookies;
      this._includedCookies = value.includedCookies;
      this._all.internalValue = value.all;
    }
  }

  // excluded_cookies - computed: false, optional: true, required: false
  private _excludedCookies?: string[]; 
  public get excludedCookies() {
    return this.getListAttribute('excluded_cookies');
  }
  public set excludedCookies(value: string[]) {
    this._excludedCookies = value;
  }
  public resetExcludedCookies() {
    this._excludedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCookiesInput() {
    return this._excludedCookies;
  }

  // included_cookies - computed: false, optional: true, required: false
  private _includedCookies?: string[]; 
  public get includedCookies() {
    return this.getListAttribute('included_cookies');
  }
  public set includedCookies(value: string[]) {
    this._includedCookies = value;
  }
  public resetIncludedCookies() {
    this._includedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCookiesInput() {
    return this._includedCookies;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternAll[] | cdktn.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPattern[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_scope Wafv2WebAclRuleA#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_pattern Wafv2WebAclRuleA#match_pattern}
  */
  readonly matchPattern?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPattern[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_scope: cdktn.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_scope: {
      value: cdktn.stringToHclTerraform(struct!.matchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternToHclTerraform, true)(struct!.matchPattern),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesMatchPattern[] | cdktn.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  public resetMatchPattern() {
    this._matchPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookies[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrderToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrder | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrder | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oversizeHandling = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oversizeHandling = value.oversizeHandling;
    }
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrder[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrderOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAll {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAllToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAllList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAll[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#excluded_headers Wafv2WebAclRuleA#excluded_headers}
  */
  readonly excludedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#included_headers Wafv2WebAclRuleA#included_headers}
  */
  readonly includedHeaders?: string[];
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all Wafv2WebAclRuleA#all}
  */
  readonly all?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAll[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excluded_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedHeaders),
    included_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedHeaders),
    all: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAllToTerraform, true)(struct!.all),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excluded_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    all: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAllToHclTerraform, true)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAllList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedHeaders = this._excludedHeaders;
    }
    if (this._includedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaders = this._includedHeaders;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedHeaders = undefined;
      this._includedHeaders = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedHeaders = value.excludedHeaders;
      this._includedHeaders = value.includedHeaders;
      this._all.internalValue = value.all;
    }
  }

  // excluded_headers - computed: false, optional: true, required: false
  private _excludedHeaders?: string[]; 
  public get excludedHeaders() {
    return this.getListAttribute('excluded_headers');
  }
  public set excludedHeaders(value: string[]) {
    this._excludedHeaders = value;
  }
  public resetExcludedHeaders() {
    this._excludedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedHeadersInput() {
    return this._excludedHeaders;
  }

  // included_headers - computed: false, optional: true, required: false
  private _includedHeaders?: string[]; 
  public get includedHeaders() {
    return this.getListAttribute('included_headers');
  }
  public set includedHeaders(value: string[]) {
    this._includedHeaders = value;
  }
  public resetIncludedHeaders() {
    this._includedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeadersInput() {
    return this._includedHeaders;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternAll[] | cdktn.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPattern[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_scope Wafv2WebAclRuleA#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_pattern Wafv2WebAclRuleA#match_pattern}
  */
  readonly matchPattern?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPattern[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_scope: cdktn.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_scope: {
      value: cdktn.stringToHclTerraform(struct!.matchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternToHclTerraform, true)(struct!.matchPattern),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersMatchPattern[] | cdktn.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  public resetMatchPattern() {
    this._matchPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaders[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3Fingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#fallback_behavior Wafv2WebAclRuleA#fallback_behavior}
  */
  readonly fallbackBehavior: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3FingerprintToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_behavior: cdktn.stringToTerraform(struct!.fallbackBehavior),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3FingerprintToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.fallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3FingerprintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBehavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBehavior = value.fallbackBehavior;
    }
  }

  // fallback_behavior - computed: false, optional: false, required: true
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3FingerprintList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3Fingerprint[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3FingerprintOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3FingerprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4Fingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#fallback_behavior Wafv2WebAclRuleA#fallback_behavior}
  */
  readonly fallbackBehavior: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4FingerprintToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_behavior: cdktn.stringToTerraform(struct!.fallbackBehavior),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4FingerprintToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.fallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4FingerprintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBehavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBehavior = value.fallbackBehavior;
    }
  }

  // fallback_behavior - computed: false, optional: false, required: true
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4FingerprintList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4Fingerprint[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4FingerprintOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4FingerprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAllToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAllList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#included_paths Wafv2WebAclRuleA#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all Wafv2WebAclRuleA#all}
  */
  readonly all?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    included_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedPaths),
    all: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform, true)(struct!.all),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    included_paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    all: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAllToHclTerraform, true)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAllList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPaths = this._includedPaths;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includedPaths = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includedPaths = value.includedPaths;
      this._all.internalValue = value.all;
    }
  }

  // included_paths - computed: true, optional: true, required: false
  private _includedPaths?: string[]; 
  public get includedPaths() {
    return this.getListAttribute('included_paths');
  }
  public set includedPaths(value: string[]) {
    this._includedPaths = value;
  }
  public resetIncludedPaths() {
    this._includedPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPathsInput() {
    return this._includedPaths;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternAll[] | cdktn.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#invalid_fallback_behavior Wafv2WebAclRuleA#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_scope Wafv2WebAclRuleA#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_pattern Wafv2WebAclRuleA#match_pattern}
  */
  readonly matchPattern?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invalid_fallback_behavior: cdktn.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktn.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invalid_fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.invalidFallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_scope: {
      value: cdktn.stringToHclTerraform(struct!.matchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternToHclTerraform, true)(struct!.matchPattern),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBody | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidFallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFallbackBehavior = this._invalidFallbackBehavior;
    }
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBody | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invalidFallbackBehavior = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invalidFallbackBehavior = value.invalidFallbackBehavior;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // invalid_fallback_behavior - computed: false, optional: true, required: false
  private _invalidFallbackBehavior?: string; 
  public get invalidFallbackBehavior() {
    return this.getStringAttribute('invalid_fallback_behavior');
  }
  public set invalidFallbackBehavior(value: string) {
    this._invalidFallbackBehavior = value;
  }
  public resetInvalidFallbackBehavior() {
    this._invalidFallbackBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidFallbackBehaviorInput() {
    return this._invalidFallbackBehavior;
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: true, optional: true, required: false
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  public resetOversizeHandling() {
    this._oversizeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyMatchPattern[] | cdktn.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  public resetMatchPattern() {
    this._matchPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBody[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
  /**
  * Header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#name Wafv2WebAclRuleA#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Query argument name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#name Wafv2WebAclRuleA#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#fallback_behavior Wafv2WebAclRuleA#fallback_behavior}
  */
  readonly fallbackBehavior?: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragmentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_behavior: cdktn.stringToTerraform(struct!.fallbackBehavior),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragmentToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.fallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBehavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBehavior = value.fallbackBehavior;
    }
  }

  // fallback_behavior - computed: true, optional: true, required: false
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  public resetFallbackBehavior() {
    this._fallbackBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragmentList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragment[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragmentOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all_query_arguments Wafv2WebAclRuleA#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[] | cdktn.IResolvable;
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#body Wafv2WebAclRuleA#body}
  */
  readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody[] | cdktn.IResolvable;
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#cookies Wafv2WebAclRuleA#cookies}
  */
  readonly cookies?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookies[] | cdktn.IResolvable;
  /**
  * header_order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#header_order Wafv2WebAclRuleA#header_order}
  */
  readonly headerOrder?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrder[] | cdktn.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#headers Wafv2WebAclRuleA#headers}
  */
  readonly headers?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaders[] | cdktn.IResolvable;
  /**
  * ja3_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#ja3_fingerprint Wafv2WebAclRuleA#ja3_fingerprint}
  */
  readonly ja3Fingerprint?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3Fingerprint[] | cdktn.IResolvable;
  /**
  * ja4_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#ja4_fingerprint Wafv2WebAclRuleA#ja4_fingerprint}
  */
  readonly ja4Fingerprint?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4Fingerprint[] | cdktn.IResolvable;
  /**
  * json_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#json_body Wafv2WebAclRuleA#json_body}
  */
  readonly jsonBody?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBody[] | cdktn.IResolvable;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#method Wafv2WebAclRuleA#method}
  */
  readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod[] | cdktn.IResolvable;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#query_string Wafv2WebAclRuleA#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString[] | cdktn.IResolvable;
  /**
  * single_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#single_header Wafv2WebAclRuleA#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader[] | cdktn.IResolvable;
  /**
  * single_query_argument block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#single_query_argument Wafv2WebAclRuleA#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[] | cdktn.IResolvable;
  /**
  * uri_fragment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#uri_fragment Wafv2WebAclRuleA#uri_fragment}
  */
  readonly uriFragment?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragment[] | cdktn.IResolvable;
  /**
  * uri_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#uri_path Wafv2WebAclRuleA#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_query_arguments: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform, true)(struct!.allQueryArguments),
    body: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform, true)(struct!.body),
    cookies: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesToTerraform, true)(struct!.cookies),
    header_order: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrderToTerraform, true)(struct!.headerOrder),
    headers: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersToTerraform, true)(struct!.headers),
    ja3_fingerprint: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3FingerprintToTerraform, true)(struct!.ja3Fingerprint),
    ja4_fingerprint: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4FingerprintToTerraform, true)(struct!.ja4Fingerprint),
    json_body: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyToTerraform, true)(struct!.jsonBody),
    method: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform, true)(struct!.method),
    query_string: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform, true)(struct!.queryString),
    single_header: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform, true)(struct!.singleHeader),
    single_query_argument: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform, true)(struct!.singleQueryArgument),
    uri_fragment: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragmentToTerraform, true)(struct!.uriFragment),
    uri_path: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform, true)(struct!.uriPath),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_query_arguments: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToHclTerraform, true)(struct!.allQueryArguments),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsList",
    },
    body: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToHclTerraform, true)(struct!.body),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyList",
    },
    cookies: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesToHclTerraform, true)(struct!.cookies),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesList",
    },
    header_order: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrderToHclTerraform, true)(struct!.headerOrder),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrderList",
    },
    headers: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersList",
    },
    ja3_fingerprint: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3FingerprintToHclTerraform, true)(struct!.ja3Fingerprint),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3FingerprintList",
    },
    ja4_fingerprint: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4FingerprintToHclTerraform, true)(struct!.ja4Fingerprint),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4FingerprintList",
    },
    json_body: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyToHclTerraform, true)(struct!.jsonBody),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyList",
    },
    method: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToHclTerraform, true)(struct!.method),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodList",
    },
    query_string: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringList",
    },
    single_header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToHclTerraform, true)(struct!.singleHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderList",
    },
    single_query_argument: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToHclTerraform, true)(struct!.singleQueryArgument),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentList",
    },
    uri_fragment: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragmentToHclTerraform, true)(struct!.uriFragment),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragmentList",
    },
    uri_path: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToHclTerraform, true)(struct!.uriPath),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allQueryArguments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    if (this._headerOrder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOrder = this._headerOrder?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._ja3Fingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja3Fingerprint = this._ja3Fingerprint?.internalValue;
    }
    if (this._ja4Fingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja4Fingerprint = this._ja4Fingerprint?.internalValue;
    }
    if (this._jsonBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonBody = this._jsonBody?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._singleHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeader = this._singleHeader?.internalValue;
    }
    if (this._singleQueryArgument?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
    }
    if (this._uriFragment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriFragment = this._uriFragment?.internalValue;
    }
    if (this._uriPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._headerOrder.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._ja3Fingerprint.internalValue = undefined;
      this._ja4Fingerprint.internalValue = undefined;
      this._jsonBody.internalValue = undefined;
      this._method.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._singleHeader.internalValue = undefined;
      this._singleQueryArgument.internalValue = undefined;
      this._uriFragment.internalValue = undefined;
      this._uriPath.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allQueryArguments.internalValue = value.allQueryArguments;
      this._body.internalValue = value.body;
      this._cookies.internalValue = value.cookies;
      this._headerOrder.internalValue = value.headerOrder;
      this._headers.internalValue = value.headers;
      this._ja3Fingerprint.internalValue = value.ja3Fingerprint;
      this._ja4Fingerprint.internalValue = value.ja4Fingerprint;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriFragment.internalValue = value.uriFragment;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsList(this, "all_query_arguments", false);
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[] | cdktn.IResolvable) {
    this._allQueryArguments.internalValue = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments.internalValue;
  }

  // body - computed: false, optional: true, required: false
  private _body = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyList(this, "body", false);
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody[] | cdktn.IResolvable) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookiesList(this, "cookies", false);
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchCookies[] | cdktn.IResolvable) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // header_order - computed: false, optional: true, required: false
  private _headerOrder = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrderList(this, "header_order", false);
  public get headerOrder() {
    return this._headerOrder;
  }
  public putHeaderOrder(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaderOrder[] | cdktn.IResolvable) {
    this._headerOrder.internalValue = value;
  }
  public resetHeaderOrder() {
    this._headerOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOrderInput() {
    return this._headerOrder.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchHeaders[] | cdktn.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // ja3_fingerprint - computed: false, optional: true, required: false
  private _ja3Fingerprint = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3FingerprintList(this, "ja3_fingerprint", false);
  public get ja3Fingerprint() {
    return this._ja3Fingerprint;
  }
  public putJa3Fingerprint(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa3Fingerprint[] | cdktn.IResolvable) {
    this._ja3Fingerprint.internalValue = value;
  }
  public resetJa3Fingerprint() {
    this._ja3Fingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja3FingerprintInput() {
    return this._ja3Fingerprint.internalValue;
  }

  // ja4_fingerprint - computed: false, optional: true, required: false
  private _ja4Fingerprint = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4FingerprintList(this, "ja4_fingerprint", false);
  public get ja4Fingerprint() {
    return this._ja4Fingerprint;
  }
  public putJa4Fingerprint(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJa4Fingerprint[] | cdktn.IResolvable) {
    this._ja4Fingerprint.internalValue = value;
  }
  public resetJa4Fingerprint() {
    this._ja4Fingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4FingerprintInput() {
    return this._ja4Fingerprint.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBodyList(this, "json_body", false);
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchJsonBody[] | cdktn.IResolvable) {
    this._jsonBody.internalValue = value;
  }
  public resetJsonBody() {
    this._jsonBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonBodyInput() {
    return this._jsonBody.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodList(this, "method", false);
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod[] | cdktn.IResolvable) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString[] | cdktn.IResolvable) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderList(this, "single_header", false);
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader[] | cdktn.IResolvable) {
    this._singleHeader.internalValue = value;
  }
  public resetSingleHeader() {
    this._singleHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader.internalValue;
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentList(this, "single_query_argument", false);
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[] | cdktn.IResolvable) {
    this._singleQueryArgument.internalValue = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument.internalValue;
  }

  // uri_fragment - computed: false, optional: true, required: false
  private _uriFragment = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragmentList(this, "uri_fragment", false);
  public get uriFragment() {
    return this._uriFragment;
  }
  public putUriFragment(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriFragment[] | cdktn.IResolvable) {
    this._uriFragment.internalValue = value;
  }
  public resetUriFragment() {
    this._uriFragment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriFragmentInput() {
    return this._uriFragment.internalValue;
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathList(this, "uri_path", false);
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath[] | cdktn.IResolvable) {
    this._uriPath.internalValue = value;
  }
  public resetUriPath() {
    this._uriPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#priority Wafv2WebAclRuleA#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#type Wafv2WebAclRuleA#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    priority: cdktn.numberToTerraform(struct!.priority),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._type = value.type;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement {
  /**
  * Area within the portion of a web request that you want AWS WAF to search for SearchString.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#positional_constraint Wafv2WebAclRuleA#positional_constraint}
  */
  readonly positionalConstraint: string;
  /**
  * String value to search for within the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#search_string Wafv2WebAclRuleA#search_string}
  */
  readonly searchString: string;
  /**
  * field_to_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#field_to_match Wafv2WebAclRuleA#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch[] | cdktn.IResolvable;
  /**
  * text_transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#text_transformation Wafv2WebAclRuleA#text_transformation}
  */
  readonly textTransformation?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    positional_constraint: cdktn.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktn.stringToTerraform(struct!.searchString),
    field_to_match: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform, true)(struct!.fieldToMatch),
    text_transformation: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    positional_constraint: {
      value: cdktn.stringToHclTerraform(struct!.positionalConstraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_string: {
      value: cdktn.stringToHclTerraform(struct!.searchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_to_match: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToHclTerraform, true)(struct!.fieldToMatch),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchList",
    },
    text_transformation: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToHclTerraform, true)(struct!.textTransformation),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._positionalConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.positionalConstraint = this._positionalConstraint;
    }
    if (this._searchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchString = this._searchString;
    }
    if (this._fieldToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
    }
    if (this._textTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTransformation = this._textTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._positionalConstraint = undefined;
      this._searchString = undefined;
      this._fieldToMatch.internalValue = undefined;
      this._textTransformation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._positionalConstraint = value.positionalConstraint;
      this._searchString = value.searchString;
      this._fieldToMatch.internalValue = value.fieldToMatch;
      this._textTransformation.internalValue = value.textTransformation;
    }
  }

  // positional_constraint - computed: false, optional: false, required: true
  private _positionalConstraint?: string; 
  public get positionalConstraint() {
    return this.getStringAttribute('positional_constraint');
  }
  public set positionalConstraint(value: string) {
    this._positionalConstraint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionalConstraintInput() {
    return this._positionalConstraint;
  }

  // search_string - computed: false, optional: false, required: true
  private _searchString?: string; 
  public get searchString() {
    return this.getStringAttribute('search_string');
  }
  public set searchString(value: string) {
    this._searchString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchStringInput() {
    return this._searchString;
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchList(this, "field_to_match", false);
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch[] | cdktn.IResolvable) {
    this._fieldToMatch.internalValue = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch.internalValue;
  }

  // text_transformation - computed: false, optional: true, required: false
  private _textTransformation = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationList(this, "text_transformation", false);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[] | cdktn.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  public resetTextTransformation() {
    this._textTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#fallback_behavior Wafv2WebAclRuleA#fallback_behavior}
  */
  readonly fallbackBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#header_name Wafv2WebAclRuleA#header_name}
  */
  readonly headerName: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_behavior: cdktn.stringToTerraform(struct!.fallbackBehavior),
    header_name: cdktn.stringToTerraform(struct!.headerName),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.fallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBehavior = undefined;
      this._headerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBehavior = value.fallbackBehavior;
      this._headerName = value.headerName;
    }
  }

  // fallback_behavior - computed: false, optional: false, required: true
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement {
  /**
  * List of two-character country codes (e.g., US, CA).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#country_codes Wafv2WebAclRuleA#country_codes}
  */
  readonly countryCodes: string[];
  /**
  * forwarded_ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#forwarded_ip_config Wafv2WebAclRuleA#forwarded_ip_config}
  */
  readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    country_codes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.countryCodes),
    forwarded_ip_config: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform, true)(struct!.forwardedIpConfig),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    country_codes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.countryCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    forwarded_ip_config: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToHclTerraform, true)(struct!.forwardedIpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCodes = this._countryCodes;
    }
    if (this._forwardedIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCodes = undefined;
      this._forwardedIpConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCodes = value.countryCodes;
      this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
    }
  }

  // country_codes - computed: false, optional: false, required: true
  private _countryCodes?: string[]; 
  public get countryCodes() {
    return this.getListAttribute('country_codes');
  }
  public set countryCodes(value: string[]) {
    this._countryCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodesInput() {
    return this._countryCodes;
  }

  // forwarded_ip_config - computed: false, optional: true, required: false
  private _forwardedIpConfig = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigList(this, "forwarded_ip_config", false);
  public get forwardedIpConfig() {
    return this._forwardedIpConfig;
  }
  public putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig[] | cdktn.IResolvable) {
    this._forwardedIpConfig.internalValue = value;
  }
  public resetForwardedIpConfig() {
    this._forwardedIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedIpConfigInput() {
    return this._forwardedIpConfig.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#fallback_behavior Wafv2WebAclRuleA#fallback_behavior}
  */
  readonly fallbackBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#header_name Wafv2WebAclRuleA#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#position Wafv2WebAclRuleA#position}
  */
  readonly position: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_behavior: cdktn.stringToTerraform(struct!.fallbackBehavior),
    header_name: cdktn.stringToTerraform(struct!.headerName),
    position: cdktn.stringToTerraform(struct!.position),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.fallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktn.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBehavior = undefined;
      this._headerName = undefined;
      this._position = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBehavior = value.fallbackBehavior;
      this._headerName = value.headerName;
      this._position = value.position;
    }
  }

  // fallback_behavior - computed: false, optional: false, required: true
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // position - computed: false, optional: false, required: true
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement {
  /**
  * ARN of the IP set to reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#arn Wafv2WebAclRuleA#arn}
  */
  readonly arn: string;
  /**
  * ip_set_forwarded_ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#ip_set_forwarded_ip_config Wafv2WebAclRuleA#ip_set_forwarded_ip_config}
  */
  readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    ip_set_forwarded_ip_config: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform, true)(struct!.ipSetForwardedIpConfig),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_set_forwarded_ip_config: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToHclTerraform, true)(struct!.ipSetForwardedIpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._ipSetForwardedIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
  private _ipSetForwardedIpConfig = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigList(this, "ip_set_forwarded_ip_config", false);
  public get ipSetForwardedIpConfig() {
    return this._ipSetForwardedIpConfig;
  }
  public putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig[] | cdktn.IResolvable) {
    this._ipSetForwardedIpConfig.internalValue = value;
  }
  public resetIpSetForwardedIpConfig() {
    this._ipSetForwardedIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetForwardedIpConfigInput() {
    return this._ipSetForwardedIpConfig.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement {
  /**
  * String to match against. Must be 1-1024 characters and match pattern ^[0-9A-Za-z_\-:]+$.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#key Wafv2WebAclRuleA#key}
  */
  readonly key: string;
  /**
  * Specify whether to match using the label name or just the namespace. Valid values: LABEL, NAMESPACE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#scope Wafv2WebAclRuleA#scope}
  */
  readonly scope: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    scope: cdktn.stringToTerraform(struct!.scope),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement | cdktn.IResolvable): any {
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
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._scope = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._scope = value.scope;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatementList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArguments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArguments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArguments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArguments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArguments[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling?: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBodyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBody | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBody | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oversizeHandling = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oversizeHandling = value.oversizeHandling;
    }
  }

  // oversize_handling - computed: true, optional: true, required: false
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  public resetOversizeHandling() {
    this._oversizeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBodyList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBody[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBodyOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#excluded_cookies Wafv2WebAclRuleA#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#included_cookies Wafv2WebAclRuleA#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all Wafv2WebAclRuleA#all}
  */
  readonly all?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excluded_cookies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedCookies),
    all: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform, true)(struct!.all),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excluded_cookies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedCookies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_cookies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedCookies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    all: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllToHclTerraform, true)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedCookies = this._excludedCookies;
    }
    if (this._includedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCookies = this._includedCookies;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedCookies = undefined;
      this._includedCookies = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedCookies = value.excludedCookies;
      this._includedCookies = value.includedCookies;
      this._all.internalValue = value.all;
    }
  }

  // excluded_cookies - computed: false, optional: true, required: false
  private _excludedCookies?: string[]; 
  public get excludedCookies() {
    return this.getListAttribute('excluded_cookies');
  }
  public set excludedCookies(value: string[]) {
    this._excludedCookies = value;
  }
  public resetExcludedCookies() {
    this._excludedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCookiesInput() {
    return this._excludedCookies;
  }

  // included_cookies - computed: false, optional: true, required: false
  private _includedCookies?: string[]; 
  public get includedCookies() {
    return this.getListAttribute('included_cookies');
  }
  public set includedCookies(value: string[]) {
    this._includedCookies = value;
  }
  public resetIncludedCookies() {
    this._includedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCookiesInput() {
    return this._includedCookies;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll[] | cdktn.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_scope Wafv2WebAclRuleA#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_pattern Wafv2WebAclRuleA#match_pattern}
  */
  readonly matchPattern?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_scope: cdktn.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_scope: {
      value: cdktn.stringToHclTerraform(struct!.matchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternToHclTerraform, true)(struct!.matchPattern),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern[] | cdktn.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  public resetMatchPattern() {
    this._matchPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookies[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrderToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrder | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrder | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oversizeHandling = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oversizeHandling = value.oversizeHandling;
    }
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrder[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrderOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAll {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAll[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#excluded_headers Wafv2WebAclRuleA#excluded_headers}
  */
  readonly excludedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#included_headers Wafv2WebAclRuleA#included_headers}
  */
  readonly includedHeaders?: string[];
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all Wafv2WebAclRuleA#all}
  */
  readonly all?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAll[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excluded_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedHeaders),
    included_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedHeaders),
    all: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllToTerraform, true)(struct!.all),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excluded_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    all: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllToHclTerraform, true)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedHeaders = this._excludedHeaders;
    }
    if (this._includedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaders = this._includedHeaders;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedHeaders = undefined;
      this._includedHeaders = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedHeaders = value.excludedHeaders;
      this._includedHeaders = value.includedHeaders;
      this._all.internalValue = value.all;
    }
  }

  // excluded_headers - computed: false, optional: true, required: false
  private _excludedHeaders?: string[]; 
  public get excludedHeaders() {
    return this.getListAttribute('excluded_headers');
  }
  public set excludedHeaders(value: string[]) {
    this._excludedHeaders = value;
  }
  public resetExcludedHeaders() {
    this._excludedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedHeadersInput() {
    return this._excludedHeaders;
  }

  // included_headers - computed: false, optional: true, required: false
  private _includedHeaders?: string[]; 
  public get includedHeaders() {
    return this.getListAttribute('included_headers');
  }
  public set includedHeaders(value: string[]) {
    this._includedHeaders = value;
  }
  public resetIncludedHeaders() {
    this._includedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeadersInput() {
    return this._includedHeaders;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAll[] | cdktn.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPattern[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_scope Wafv2WebAclRuleA#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_pattern Wafv2WebAclRuleA#match_pattern}
  */
  readonly matchPattern?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPattern[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_scope: cdktn.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_scope: {
      value: cdktn.stringToHclTerraform(struct!.matchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternToHclTerraform, true)(struct!.matchPattern),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPattern[] | cdktn.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  public resetMatchPattern() {
    this._matchPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaders[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3Fingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#fallback_behavior Wafv2WebAclRuleA#fallback_behavior}
  */
  readonly fallbackBehavior: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3FingerprintToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_behavior: cdktn.stringToTerraform(struct!.fallbackBehavior),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3FingerprintToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.fallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3FingerprintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBehavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBehavior = value.fallbackBehavior;
    }
  }

  // fallback_behavior - computed: false, optional: false, required: true
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3FingerprintList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3Fingerprint[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3FingerprintOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3FingerprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4Fingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#fallback_behavior Wafv2WebAclRuleA#fallback_behavior}
  */
  readonly fallbackBehavior: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4FingerprintToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_behavior: cdktn.stringToTerraform(struct!.fallbackBehavior),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4FingerprintToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.fallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4FingerprintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBehavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBehavior = value.fallbackBehavior;
    }
  }

  // fallback_behavior - computed: false, optional: false, required: true
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4FingerprintList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4Fingerprint[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4FingerprintOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4FingerprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#included_paths Wafv2WebAclRuleA#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all Wafv2WebAclRuleA#all}
  */
  readonly all?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    included_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedPaths),
    all: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform, true)(struct!.all),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    included_paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    all: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllToHclTerraform, true)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPaths = this._includedPaths;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includedPaths = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includedPaths = value.includedPaths;
      this._all.internalValue = value.all;
    }
  }

  // included_paths - computed: true, optional: true, required: false
  private _includedPaths?: string[]; 
  public get includedPaths() {
    return this.getListAttribute('included_paths');
  }
  public set includedPaths(value: string[]) {
    this._includedPaths = value;
  }
  public resetIncludedPaths() {
    this._includedPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPathsInput() {
    return this._includedPaths;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll[] | cdktn.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#invalid_fallback_behavior Wafv2WebAclRuleA#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_scope Wafv2WebAclRuleA#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_pattern Wafv2WebAclRuleA#match_pattern}
  */
  readonly matchPattern?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invalid_fallback_behavior: cdktn.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktn.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invalid_fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.invalidFallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_scope: {
      value: cdktn.stringToHclTerraform(struct!.matchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternToHclTerraform, true)(struct!.matchPattern),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBody | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidFallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFallbackBehavior = this._invalidFallbackBehavior;
    }
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBody | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invalidFallbackBehavior = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invalidFallbackBehavior = value.invalidFallbackBehavior;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // invalid_fallback_behavior - computed: false, optional: true, required: false
  private _invalidFallbackBehavior?: string; 
  public get invalidFallbackBehavior() {
    return this.getStringAttribute('invalid_fallback_behavior');
  }
  public set invalidFallbackBehavior(value: string) {
    this._invalidFallbackBehavior = value;
  }
  public resetInvalidFallbackBehavior() {
    this._invalidFallbackBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidFallbackBehaviorInput() {
    return this._invalidFallbackBehavior;
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: true, optional: true, required: false
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  public resetOversizeHandling() {
    this._oversizeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern[] | cdktn.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  public resetMatchPattern() {
    this._matchPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBody[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethodOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethodList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethod[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethodOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryStringOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryString | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryString | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryStringList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryString[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryStringOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeader {
  /**
  * Header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#name Wafv2WebAclRuleA#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeaderOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Query argument name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#name Wafv2WebAclRuleA#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgument[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#fallback_behavior Wafv2WebAclRuleA#fallback_behavior}
  */
  readonly fallbackBehavior?: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragmentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_behavior: cdktn.stringToTerraform(struct!.fallbackBehavior),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragmentToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.fallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBehavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBehavior = value.fallbackBehavior;
    }
  }

  // fallback_behavior - computed: true, optional: true, required: false
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  public resetFallbackBehavior() {
    this._fallbackBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragmentList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragment[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragmentOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPath | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPath | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPathList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPath[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPathOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all_query_arguments Wafv2WebAclRuleA#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArguments[] | cdktn.IResolvable;
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#body Wafv2WebAclRuleA#body}
  */
  readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBody[] | cdktn.IResolvable;
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#cookies Wafv2WebAclRuleA#cookies}
  */
  readonly cookies?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookies[] | cdktn.IResolvable;
  /**
  * header_order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#header_order Wafv2WebAclRuleA#header_order}
  */
  readonly headerOrder?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrder[] | cdktn.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#headers Wafv2WebAclRuleA#headers}
  */
  readonly headers?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaders[] | cdktn.IResolvable;
  /**
  * ja3_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#ja3_fingerprint Wafv2WebAclRuleA#ja3_fingerprint}
  */
  readonly ja3Fingerprint?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3Fingerprint[] | cdktn.IResolvable;
  /**
  * ja4_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#ja4_fingerprint Wafv2WebAclRuleA#ja4_fingerprint}
  */
  readonly ja4Fingerprint?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4Fingerprint[] | cdktn.IResolvable;
  /**
  * json_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#json_body Wafv2WebAclRuleA#json_body}
  */
  readonly jsonBody?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBody[] | cdktn.IResolvable;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#method Wafv2WebAclRuleA#method}
  */
  readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethod[] | cdktn.IResolvable;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#query_string Wafv2WebAclRuleA#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryString[] | cdktn.IResolvable;
  /**
  * single_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#single_header Wafv2WebAclRuleA#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeader[] | cdktn.IResolvable;
  /**
  * single_query_argument block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#single_query_argument Wafv2WebAclRuleA#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgument[] | cdktn.IResolvable;
  /**
  * uri_fragment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#uri_fragment Wafv2WebAclRuleA#uri_fragment}
  */
  readonly uriFragment?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragment[] | cdktn.IResolvable;
  /**
  * uri_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#uri_path Wafv2WebAclRuleA#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPath[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_query_arguments: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsToTerraform, true)(struct!.allQueryArguments),
    body: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBodyToTerraform, true)(struct!.body),
    cookies: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesToTerraform, true)(struct!.cookies),
    header_order: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrderToTerraform, true)(struct!.headerOrder),
    headers: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersToTerraform, true)(struct!.headers),
    ja3_fingerprint: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3FingerprintToTerraform, true)(struct!.ja3Fingerprint),
    ja4_fingerprint: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4FingerprintToTerraform, true)(struct!.ja4Fingerprint),
    json_body: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyToTerraform, true)(struct!.jsonBody),
    method: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethodToTerraform, true)(struct!.method),
    query_string: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryStringToTerraform, true)(struct!.queryString),
    single_header: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeaderToTerraform, true)(struct!.singleHeader),
    single_query_argument: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentToTerraform, true)(struct!.singleQueryArgument),
    uri_fragment: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragmentToTerraform, true)(struct!.uriFragment),
    uri_path: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPathToTerraform, true)(struct!.uriPath),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_query_arguments: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsToHclTerraform, true)(struct!.allQueryArguments),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsList",
    },
    body: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBodyToHclTerraform, true)(struct!.body),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBodyList",
    },
    cookies: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesToHclTerraform, true)(struct!.cookies),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesList",
    },
    header_order: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrderToHclTerraform, true)(struct!.headerOrder),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrderList",
    },
    headers: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersList",
    },
    ja3_fingerprint: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3FingerprintToHclTerraform, true)(struct!.ja3Fingerprint),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3FingerprintList",
    },
    ja4_fingerprint: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4FingerprintToHclTerraform, true)(struct!.ja4Fingerprint),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4FingerprintList",
    },
    json_body: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyToHclTerraform, true)(struct!.jsonBody),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyList",
    },
    method: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethodToHclTerraform, true)(struct!.method),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethodList",
    },
    query_string: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryStringToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryStringList",
    },
    single_header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeaderToHclTerraform, true)(struct!.singleHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeaderList",
    },
    single_query_argument: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentToHclTerraform, true)(struct!.singleQueryArgument),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentList",
    },
    uri_fragment: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragmentToHclTerraform, true)(struct!.uriFragment),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragmentList",
    },
    uri_path: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPathToHclTerraform, true)(struct!.uriPath),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allQueryArguments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    if (this._headerOrder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOrder = this._headerOrder?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._ja3Fingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja3Fingerprint = this._ja3Fingerprint?.internalValue;
    }
    if (this._ja4Fingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja4Fingerprint = this._ja4Fingerprint?.internalValue;
    }
    if (this._jsonBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonBody = this._jsonBody?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._singleHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeader = this._singleHeader?.internalValue;
    }
    if (this._singleQueryArgument?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
    }
    if (this._uriFragment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriFragment = this._uriFragment?.internalValue;
    }
    if (this._uriPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._headerOrder.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._ja3Fingerprint.internalValue = undefined;
      this._ja4Fingerprint.internalValue = undefined;
      this._jsonBody.internalValue = undefined;
      this._method.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._singleHeader.internalValue = undefined;
      this._singleQueryArgument.internalValue = undefined;
      this._uriFragment.internalValue = undefined;
      this._uriPath.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allQueryArguments.internalValue = value.allQueryArguments;
      this._body.internalValue = value.body;
      this._cookies.internalValue = value.cookies;
      this._headerOrder.internalValue = value.headerOrder;
      this._headers.internalValue = value.headers;
      this._ja3Fingerprint.internalValue = value.ja3Fingerprint;
      this._ja4Fingerprint.internalValue = value.ja4Fingerprint;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriFragment.internalValue = value.uriFragment;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsList(this, "all_query_arguments", false);
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchAllQueryArguments[] | cdktn.IResolvable) {
    this._allQueryArguments.internalValue = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments.internalValue;
  }

  // body - computed: false, optional: true, required: false
  private _body = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBodyList(this, "body", false);
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchBody[] | cdktn.IResolvable) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookiesList(this, "cookies", false);
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchCookies[] | cdktn.IResolvable) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // header_order - computed: false, optional: true, required: false
  private _headerOrder = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrderList(this, "header_order", false);
  public get headerOrder() {
    return this._headerOrder;
  }
  public putHeaderOrder(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaderOrder[] | cdktn.IResolvable) {
    this._headerOrder.internalValue = value;
  }
  public resetHeaderOrder() {
    this._headerOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOrderInput() {
    return this._headerOrder.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchHeaders[] | cdktn.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // ja3_fingerprint - computed: false, optional: true, required: false
  private _ja3Fingerprint = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3FingerprintList(this, "ja3_fingerprint", false);
  public get ja3Fingerprint() {
    return this._ja3Fingerprint;
  }
  public putJa3Fingerprint(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa3Fingerprint[] | cdktn.IResolvable) {
    this._ja3Fingerprint.internalValue = value;
  }
  public resetJa3Fingerprint() {
    this._ja3Fingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja3FingerprintInput() {
    return this._ja3Fingerprint.internalValue;
  }

  // ja4_fingerprint - computed: false, optional: true, required: false
  private _ja4Fingerprint = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4FingerprintList(this, "ja4_fingerprint", false);
  public get ja4Fingerprint() {
    return this._ja4Fingerprint;
  }
  public putJa4Fingerprint(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJa4Fingerprint[] | cdktn.IResolvable) {
    this._ja4Fingerprint.internalValue = value;
  }
  public resetJa4Fingerprint() {
    this._ja4Fingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4FingerprintInput() {
    return this._ja4Fingerprint.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBodyList(this, "json_body", false);
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchJsonBody[] | cdktn.IResolvable) {
    this._jsonBody.internalValue = value;
  }
  public resetJsonBody() {
    this._jsonBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonBodyInput() {
    return this._jsonBody.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethodList(this, "method", false);
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchMethod[] | cdktn.IResolvable) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryStringList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchQueryString[] | cdktn.IResolvable) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeaderList(this, "single_header", false);
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleHeader[] | cdktn.IResolvable) {
    this._singleHeader.internalValue = value;
  }
  public resetSingleHeader() {
    this._singleHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader.internalValue;
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentList(this, "single_query_argument", false);
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgument[] | cdktn.IResolvable) {
    this._singleQueryArgument.internalValue = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument.internalValue;
  }

  // uri_fragment - computed: false, optional: true, required: false
  private _uriFragment = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragmentList(this, "uri_fragment", false);
  public get uriFragment() {
    return this._uriFragment;
  }
  public putUriFragment(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriFragment[] | cdktn.IResolvable) {
    this._uriFragment.internalValue = value;
  }
  public resetUriFragment() {
    this._uriFragment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriFragmentInput() {
    return this._uriFragment.internalValue;
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPathList(this, "uri_path", false);
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchUriPath[] | cdktn.IResolvable) {
    this._uriPath.internalValue = value;
  }
  public resetUriPath() {
    this._uriPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatch[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#priority Wafv2WebAclRuleA#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#type Wafv2WebAclRuleA#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    priority: cdktn.numberToTerraform(struct!.priority),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformationToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._type = value.type;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformationList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformation[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatement {
  /**
  * Regular expression string (1-512 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#regex_string Wafv2WebAclRuleA#regex_string}
  */
  readonly regexString: string;
  /**
  * field_to_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#field_to_match Wafv2WebAclRuleA#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatch[] | cdktn.IResolvable;
  /**
  * text_transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#text_transformation Wafv2WebAclRuleA#text_transformation}
  */
  readonly textTransformation?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformation[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    regex_string: cdktn.stringToTerraform(struct!.regexString),
    field_to_match: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchToTerraform, true)(struct!.fieldToMatch),
    text_transformation: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    regex_string: {
      value: cdktn.stringToHclTerraform(struct!.regexString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_to_match: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchToHclTerraform, true)(struct!.fieldToMatch),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchList",
    },
    text_transformation: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformationToHclTerraform, true)(struct!.textTransformation),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexString !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexString = this._regexString;
    }
    if (this._fieldToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
    }
    if (this._textTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTransformation = this._textTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regexString = undefined;
      this._fieldToMatch.internalValue = undefined;
      this._textTransformation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regexString = value.regexString;
      this._fieldToMatch.internalValue = value.fieldToMatch;
      this._textTransformation.internalValue = value.textTransformation;
    }
  }

  // regex_string - computed: false, optional: false, required: true
  private _regexString?: string; 
  public get regexString() {
    return this.getStringAttribute('regex_string');
  }
  public set regexString(value: string) {
    this._regexString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexStringInput() {
    return this._regexString;
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatchList(this, "field_to_match", false);
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementFieldToMatch[] | cdktn.IResolvable) {
    this._fieldToMatch.internalValue = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch.internalValue;
  }

  // text_transformation - computed: false, optional: true, required: false
  private _textTransformation = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformationList(this, "text_transformation", false);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementTextTransformation[] | cdktn.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  public resetTextTransformation() {
    this._textTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatement[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexMatchStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling?: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oversizeHandling = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oversizeHandling = value.oversizeHandling;
    }
  }

  // oversize_handling - computed: true, optional: true, required: false
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  public resetOversizeHandling() {
    this._oversizeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#excluded_cookies Wafv2WebAclRuleA#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#included_cookies Wafv2WebAclRuleA#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all Wafv2WebAclRuleA#all}
  */
  readonly all?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excluded_cookies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedCookies),
    all: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllToTerraform, true)(struct!.all),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excluded_cookies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedCookies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_cookies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedCookies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    all: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllToHclTerraform, true)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedCookies = this._excludedCookies;
    }
    if (this._includedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCookies = this._includedCookies;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedCookies = undefined;
      this._includedCookies = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedCookies = value.excludedCookies;
      this._includedCookies = value.includedCookies;
      this._all.internalValue = value.all;
    }
  }

  // excluded_cookies - computed: false, optional: true, required: false
  private _excludedCookies?: string[]; 
  public get excludedCookies() {
    return this.getListAttribute('excluded_cookies');
  }
  public set excludedCookies(value: string[]) {
    this._excludedCookies = value;
  }
  public resetExcludedCookies() {
    this._excludedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCookiesInput() {
    return this._excludedCookies;
  }

  // included_cookies - computed: false, optional: true, required: false
  private _includedCookies?: string[]; 
  public get includedCookies() {
    return this.getListAttribute('included_cookies');
  }
  public set includedCookies(value: string[]) {
    this._includedCookies = value;
  }
  public resetIncludedCookies() {
    this._includedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCookiesInput() {
    return this._includedCookies;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll[] | cdktn.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_scope Wafv2WebAclRuleA#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_pattern Wafv2WebAclRuleA#match_pattern}
  */
  readonly matchPattern?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_scope: cdktn.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_scope: {
      value: cdktn.stringToHclTerraform(struct!.matchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternToHclTerraform, true)(struct!.matchPattern),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern[] | cdktn.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  public resetMatchPattern() {
    this._matchPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookies[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrderToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oversizeHandling = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oversizeHandling = value.oversizeHandling;
    }
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrderOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAll {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAll[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#excluded_headers Wafv2WebAclRuleA#excluded_headers}
  */
  readonly excludedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#included_headers Wafv2WebAclRuleA#included_headers}
  */
  readonly includedHeaders?: string[];
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all Wafv2WebAclRuleA#all}
  */
  readonly all?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAll[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excluded_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedHeaders),
    included_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedHeaders),
    all: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllToTerraform, true)(struct!.all),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excluded_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    all: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllToHclTerraform, true)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedHeaders = this._excludedHeaders;
    }
    if (this._includedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaders = this._includedHeaders;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedHeaders = undefined;
      this._includedHeaders = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedHeaders = value.excludedHeaders;
      this._includedHeaders = value.includedHeaders;
      this._all.internalValue = value.all;
    }
  }

  // excluded_headers - computed: false, optional: true, required: false
  private _excludedHeaders?: string[]; 
  public get excludedHeaders() {
    return this.getListAttribute('excluded_headers');
  }
  public set excludedHeaders(value: string[]) {
    this._excludedHeaders = value;
  }
  public resetExcludedHeaders() {
    this._excludedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedHeadersInput() {
    return this._excludedHeaders;
  }

  // included_headers - computed: false, optional: true, required: false
  private _includedHeaders?: string[]; 
  public get includedHeaders() {
    return this.getListAttribute('included_headers');
  }
  public set includedHeaders(value: string[]) {
    this._includedHeaders = value;
  }
  public resetIncludedHeaders() {
    this._includedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeadersInput() {
    return this._includedHeaders;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAll[] | cdktn.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPattern[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_scope Wafv2WebAclRuleA#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_pattern Wafv2WebAclRuleA#match_pattern}
  */
  readonly matchPattern?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPattern[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_scope: cdktn.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_scope: {
      value: cdktn.stringToHclTerraform(struct!.matchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternToHclTerraform, true)(struct!.matchPattern),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPattern[] | cdktn.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  public resetMatchPattern() {
    this._matchPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#fallback_behavior Wafv2WebAclRuleA#fallback_behavior}
  */
  readonly fallbackBehavior: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3FingerprintToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_behavior: cdktn.stringToTerraform(struct!.fallbackBehavior),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3FingerprintToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.fallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3FingerprintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBehavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBehavior = value.fallbackBehavior;
    }
  }

  // fallback_behavior - computed: false, optional: false, required: true
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3FingerprintList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3FingerprintOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3FingerprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#fallback_behavior Wafv2WebAclRuleA#fallback_behavior}
  */
  readonly fallbackBehavior: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4FingerprintToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_behavior: cdktn.stringToTerraform(struct!.fallbackBehavior),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4FingerprintToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.fallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4FingerprintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBehavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBehavior = value.fallbackBehavior;
    }
  }

  // fallback_behavior - computed: false, optional: false, required: true
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4FingerprintList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4FingerprintOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4FingerprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#included_paths Wafv2WebAclRuleA#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all Wafv2WebAclRuleA#all}
  */
  readonly all?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    included_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedPaths),
    all: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllToTerraform, true)(struct!.all),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    included_paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    all: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllToHclTerraform, true)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPaths = this._includedPaths;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includedPaths = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includedPaths = value.includedPaths;
      this._all.internalValue = value.all;
    }
  }

  // included_paths - computed: true, optional: true, required: false
  private _includedPaths?: string[]; 
  public get includedPaths() {
    return this.getListAttribute('included_paths');
  }
  public set includedPaths(value: string[]) {
    this._includedPaths = value;
  }
  public resetIncludedPaths() {
    this._includedPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPathsInput() {
    return this._includedPaths;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll[] | cdktn.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#invalid_fallback_behavior Wafv2WebAclRuleA#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_scope Wafv2WebAclRuleA#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_pattern Wafv2WebAclRuleA#match_pattern}
  */
  readonly matchPattern?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invalid_fallback_behavior: cdktn.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktn.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invalid_fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.invalidFallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_scope: {
      value: cdktn.stringToHclTerraform(struct!.matchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternToHclTerraform, true)(struct!.matchPattern),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidFallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFallbackBehavior = this._invalidFallbackBehavior;
    }
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invalidFallbackBehavior = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invalidFallbackBehavior = value.invalidFallbackBehavior;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // invalid_fallback_behavior - computed: false, optional: true, required: false
  private _invalidFallbackBehavior?: string; 
  public get invalidFallbackBehavior() {
    return this.getStringAttribute('invalid_fallback_behavior');
  }
  public set invalidFallbackBehavior(value: string) {
    this._invalidFallbackBehavior = value;
  }
  public resetInvalidFallbackBehavior() {
    this._invalidFallbackBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidFallbackBehaviorInput() {
    return this._invalidFallbackBehavior;
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: true, optional: true, required: false
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  public resetOversizeHandling() {
    this._oversizeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern[] | cdktn.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  public resetMatchPattern() {
    this._matchPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  /**
  * Header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#name Wafv2WebAclRuleA#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  /**
  * Query argument name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#name Wafv2WebAclRuleA#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#fallback_behavior Wafv2WebAclRuleA#fallback_behavior}
  */
  readonly fallbackBehavior?: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragmentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_behavior: cdktn.stringToTerraform(struct!.fallbackBehavior),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragmentToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.fallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBehavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBehavior = value.fallbackBehavior;
    }
  }

  // fallback_behavior - computed: true, optional: true, required: false
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  public resetFallbackBehavior() {
    this._fallbackBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragmentList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragmentOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /**
  * all_query_arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all_query_arguments Wafv2WebAclRuleA#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[] | cdktn.IResolvable;
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#body Wafv2WebAclRuleA#body}
  */
  readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[] | cdktn.IResolvable;
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#cookies Wafv2WebAclRuleA#cookies}
  */
  readonly cookies?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookies[] | cdktn.IResolvable;
  /**
  * header_order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#header_order Wafv2WebAclRuleA#header_order}
  */
  readonly headerOrder?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder[] | cdktn.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#headers Wafv2WebAclRuleA#headers}
  */
  readonly headers?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders[] | cdktn.IResolvable;
  /**
  * ja3_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#ja3_fingerprint Wafv2WebAclRuleA#ja3_fingerprint}
  */
  readonly ja3Fingerprint?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint[] | cdktn.IResolvable;
  /**
  * ja4_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#ja4_fingerprint Wafv2WebAclRuleA#ja4_fingerprint}
  */
  readonly ja4Fingerprint?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint[] | cdktn.IResolvable;
  /**
  * json_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#json_body Wafv2WebAclRuleA#json_body}
  */
  readonly jsonBody?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody[] | cdktn.IResolvable;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#method Wafv2WebAclRuleA#method}
  */
  readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[] | cdktn.IResolvable;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#query_string Wafv2WebAclRuleA#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[] | cdktn.IResolvable;
  /**
  * single_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#single_header Wafv2WebAclRuleA#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[] | cdktn.IResolvable;
  /**
  * single_query_argument block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#single_query_argument Wafv2WebAclRuleA#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[] | cdktn.IResolvable;
  /**
  * uri_fragment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#uri_fragment Wafv2WebAclRuleA#uri_fragment}
  */
  readonly uriFragment?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment[] | cdktn.IResolvable;
  /**
  * uri_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#uri_path Wafv2WebAclRuleA#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_query_arguments: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform, true)(struct!.allQueryArguments),
    body: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform, true)(struct!.body),
    cookies: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesToTerraform, true)(struct!.cookies),
    header_order: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrderToTerraform, true)(struct!.headerOrder),
    headers: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersToTerraform, true)(struct!.headers),
    ja3_fingerprint: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3FingerprintToTerraform, true)(struct!.ja3Fingerprint),
    ja4_fingerprint: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4FingerprintToTerraform, true)(struct!.ja4Fingerprint),
    json_body: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyToTerraform, true)(struct!.jsonBody),
    method: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform, true)(struct!.method),
    query_string: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform, true)(struct!.queryString),
    single_header: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform, true)(struct!.singleHeader),
    single_query_argument: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform, true)(struct!.singleQueryArgument),
    uri_fragment: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragmentToTerraform, true)(struct!.uriFragment),
    uri_path: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform, true)(struct!.uriPath),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_query_arguments: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToHclTerraform, true)(struct!.allQueryArguments),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsList",
    },
    body: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToHclTerraform, true)(struct!.body),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyList",
    },
    cookies: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesToHclTerraform, true)(struct!.cookies),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesList",
    },
    header_order: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrderToHclTerraform, true)(struct!.headerOrder),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrderList",
    },
    headers: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersList",
    },
    ja3_fingerprint: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3FingerprintToHclTerraform, true)(struct!.ja3Fingerprint),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3FingerprintList",
    },
    ja4_fingerprint: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4FingerprintToHclTerraform, true)(struct!.ja4Fingerprint),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4FingerprintList",
    },
    json_body: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyToHclTerraform, true)(struct!.jsonBody),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyList",
    },
    method: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToHclTerraform, true)(struct!.method),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodList",
    },
    query_string: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringList",
    },
    single_header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToHclTerraform, true)(struct!.singleHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderList",
    },
    single_query_argument: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToHclTerraform, true)(struct!.singleQueryArgument),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentList",
    },
    uri_fragment: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragmentToHclTerraform, true)(struct!.uriFragment),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragmentList",
    },
    uri_path: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToHclTerraform, true)(struct!.uriPath),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allQueryArguments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    if (this._headerOrder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOrder = this._headerOrder?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._ja3Fingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja3Fingerprint = this._ja3Fingerprint?.internalValue;
    }
    if (this._ja4Fingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja4Fingerprint = this._ja4Fingerprint?.internalValue;
    }
    if (this._jsonBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonBody = this._jsonBody?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._singleHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeader = this._singleHeader?.internalValue;
    }
    if (this._singleQueryArgument?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
    }
    if (this._uriFragment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriFragment = this._uriFragment?.internalValue;
    }
    if (this._uriPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._headerOrder.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._ja3Fingerprint.internalValue = undefined;
      this._ja4Fingerprint.internalValue = undefined;
      this._jsonBody.internalValue = undefined;
      this._method.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._singleHeader.internalValue = undefined;
      this._singleQueryArgument.internalValue = undefined;
      this._uriFragment.internalValue = undefined;
      this._uriPath.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allQueryArguments.internalValue = value.allQueryArguments;
      this._body.internalValue = value.body;
      this._cookies.internalValue = value.cookies;
      this._headerOrder.internalValue = value.headerOrder;
      this._headers.internalValue = value.headers;
      this._ja3Fingerprint.internalValue = value.ja3Fingerprint;
      this._ja4Fingerprint.internalValue = value.ja4Fingerprint;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriFragment.internalValue = value.uriFragment;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsList(this, "all_query_arguments", false);
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[] | cdktn.IResolvable) {
    this._allQueryArguments.internalValue = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments.internalValue;
  }

  // body - computed: false, optional: true, required: false
  private _body = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyList(this, "body", false);
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[] | cdktn.IResolvable) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesList(this, "cookies", false);
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookies[] | cdktn.IResolvable) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // header_order - computed: false, optional: true, required: false
  private _headerOrder = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrderList(this, "header_order", false);
  public get headerOrder() {
    return this._headerOrder;
  }
  public putHeaderOrder(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaderOrder[] | cdktn.IResolvable) {
    this._headerOrder.internalValue = value;
  }
  public resetHeaderOrder() {
    this._headerOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOrderInput() {
    return this._headerOrder.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders[] | cdktn.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // ja3_fingerprint - computed: false, optional: true, required: false
  private _ja3Fingerprint = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3FingerprintList(this, "ja3_fingerprint", false);
  public get ja3Fingerprint() {
    return this._ja3Fingerprint;
  }
  public putJa3Fingerprint(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa3Fingerprint[] | cdktn.IResolvable) {
    this._ja3Fingerprint.internalValue = value;
  }
  public resetJa3Fingerprint() {
    this._ja3Fingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja3FingerprintInput() {
    return this._ja3Fingerprint.internalValue;
  }

  // ja4_fingerprint - computed: false, optional: true, required: false
  private _ja4Fingerprint = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4FingerprintList(this, "ja4_fingerprint", false);
  public get ja4Fingerprint() {
    return this._ja4Fingerprint;
  }
  public putJa4Fingerprint(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJa4Fingerprint[] | cdktn.IResolvable) {
    this._ja4Fingerprint.internalValue = value;
  }
  public resetJa4Fingerprint() {
    this._ja4Fingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4FingerprintInput() {
    return this._ja4Fingerprint.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyList(this, "json_body", false);
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody[] | cdktn.IResolvable) {
    this._jsonBody.internalValue = value;
  }
  public resetJsonBody() {
    this._jsonBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonBodyInput() {
    return this._jsonBody.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodList(this, "method", false);
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[] | cdktn.IResolvable) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[] | cdktn.IResolvable) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderList(this, "single_header", false);
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[] | cdktn.IResolvable) {
    this._singleHeader.internalValue = value;
  }
  public resetSingleHeader() {
    this._singleHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader.internalValue;
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentList(this, "single_query_argument", false);
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[] | cdktn.IResolvable) {
    this._singleQueryArgument.internalValue = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument.internalValue;
  }

  // uri_fragment - computed: false, optional: true, required: false
  private _uriFragment = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragmentList(this, "uri_fragment", false);
  public get uriFragment() {
    return this._uriFragment;
  }
  public putUriFragment(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriFragment[] | cdktn.IResolvable) {
    this._uriFragment.internalValue = value;
  }
  public resetUriFragment() {
    this._uriFragment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriFragmentInput() {
    return this._uriFragment.internalValue;
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathList(this, "uri_path", false);
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[] | cdktn.IResolvable) {
    this._uriPath.internalValue = value;
  }
  public resetUriPath() {
    this._uriPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#priority Wafv2WebAclRuleA#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#type Wafv2WebAclRuleA#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    priority: cdktn.numberToTerraform(struct!.priority),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._type = value.type;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
  /**
  * ARN of the RegexPatternSet (20-2048 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#arn Wafv2WebAclRuleA#arn}
  */
  readonly arn: string;
  /**
  * field_to_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#field_to_match Wafv2WebAclRuleA#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch[] | cdktn.IResolvable;
  /**
  * text_transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#text_transformation Wafv2WebAclRuleA#text_transformation}
  */
  readonly textTransformation?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
    field_to_match: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform, true)(struct!.fieldToMatch),
    text_transformation: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_to_match: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToHclTerraform, true)(struct!.fieldToMatch),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchList",
    },
    text_transformation: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToHclTerraform, true)(struct!.textTransformation),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._fieldToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
    }
    if (this._textTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTransformation = this._textTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._fieldToMatch.internalValue = undefined;
      this._textTransformation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._fieldToMatch.internalValue = value.fieldToMatch;
      this._textTransformation.internalValue = value.textTransformation;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchList(this, "field_to_match", false);
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch[] | cdktn.IResolvable) {
    this._fieldToMatch.internalValue = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch.internalValue;
  }

  // text_transformation - computed: false, optional: true, required: false
  private _textTransformation = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationList(this, "text_transformation", false);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktn.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  public resetTextTransformation() {
    this._textTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling?: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oversizeHandling = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oversizeHandling = value.oversizeHandling;
    }
  }

  // oversize_handling - computed: true, optional: true, required: false
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  public resetOversizeHandling() {
    this._oversizeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#excluded_cookies Wafv2WebAclRuleA#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#included_cookies Wafv2WebAclRuleA#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all Wafv2WebAclRuleA#all}
  */
  readonly all?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excluded_cookies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedCookies),
    all: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllToTerraform, true)(struct!.all),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excluded_cookies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedCookies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_cookies: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedCookies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    all: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllToHclTerraform, true)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedCookies = this._excludedCookies;
    }
    if (this._includedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCookies = this._includedCookies;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedCookies = undefined;
      this._includedCookies = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedCookies = value.excludedCookies;
      this._includedCookies = value.includedCookies;
      this._all.internalValue = value.all;
    }
  }

  // excluded_cookies - computed: false, optional: true, required: false
  private _excludedCookies?: string[]; 
  public get excludedCookies() {
    return this.getListAttribute('excluded_cookies');
  }
  public set excludedCookies(value: string[]) {
    this._excludedCookies = value;
  }
  public resetExcludedCookies() {
    this._excludedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCookiesInput() {
    return this._excludedCookies;
  }

  // included_cookies - computed: false, optional: true, required: false
  private _includedCookies?: string[]; 
  public get includedCookies() {
    return this.getListAttribute('included_cookies');
  }
  public set includedCookies(value: string[]) {
    this._includedCookies = value;
  }
  public resetIncludedCookies() {
    this._includedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCookiesInput() {
    return this._includedCookies;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll[] | cdktn.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_scope Wafv2WebAclRuleA#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_pattern Wafv2WebAclRuleA#match_pattern}
  */
  readonly matchPattern?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_scope: cdktn.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_scope: {
      value: cdktn.stringToHclTerraform(struct!.matchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternToHclTerraform, true)(struct!.matchPattern),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern[] | cdktn.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  public resetMatchPattern() {
    this._matchPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookies[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrder {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrderToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrder | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrder | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrder | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oversizeHandling = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oversizeHandling = value.oversizeHandling;
    }
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrder[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrderOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAll {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAll | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAll[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#excluded_headers Wafv2WebAclRuleA#excluded_headers}
  */
  readonly excludedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#included_headers Wafv2WebAclRuleA#included_headers}
  */
  readonly includedHeaders?: string[];
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all Wafv2WebAclRuleA#all}
  */
  readonly all?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAll[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    excluded_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedHeaders),
    included_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedHeaders),
    all: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllToTerraform, true)(struct!.all),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    excluded_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    all: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllToHclTerraform, true)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedHeaders = this._excludedHeaders;
    }
    if (this._includedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaders = this._includedHeaders;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedHeaders = undefined;
      this._includedHeaders = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedHeaders = value.excludedHeaders;
      this._includedHeaders = value.includedHeaders;
      this._all.internalValue = value.all;
    }
  }

  // excluded_headers - computed: false, optional: true, required: false
  private _excludedHeaders?: string[]; 
  public get excludedHeaders() {
    return this.getListAttribute('excluded_headers');
  }
  public set excludedHeaders(value: string[]) {
    this._excludedHeaders = value;
  }
  public resetExcludedHeaders() {
    this._excludedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedHeadersInput() {
    return this._excludedHeaders;
  }

  // included_headers - computed: false, optional: true, required: false
  private _includedHeaders?: string[]; 
  public get includedHeaders() {
    return this.getListAttribute('included_headers');
  }
  public set includedHeaders(value: string[]) {
    this._includedHeaders = value;
  }
  public resetIncludedHeaders() {
    this._includedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeadersInput() {
    return this._includedHeaders;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAll[] | cdktn.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPattern[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_scope Wafv2WebAclRuleA#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_pattern Wafv2WebAclRuleA#match_pattern}
  */
  readonly matchPattern?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPattern[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    match_scope: cdktn.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    match_scope: {
      value: cdktn.stringToHclTerraform(struct!.matchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternToHclTerraform, true)(struct!.matchPattern),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPattern[] | cdktn.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  public resetMatchPattern() {
    this._matchPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaders[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3Fingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#fallback_behavior Wafv2WebAclRuleA#fallback_behavior}
  */
  readonly fallbackBehavior: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3FingerprintToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_behavior: cdktn.stringToTerraform(struct!.fallbackBehavior),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3FingerprintToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.fallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3FingerprintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3Fingerprint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBehavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBehavior = value.fallbackBehavior;
    }
  }

  // fallback_behavior - computed: false, optional: false, required: true
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3FingerprintList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3Fingerprint[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3FingerprintOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3FingerprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4Fingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#fallback_behavior Wafv2WebAclRuleA#fallback_behavior}
  */
  readonly fallbackBehavior: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4FingerprintToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_behavior: cdktn.stringToTerraform(struct!.fallbackBehavior),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4FingerprintToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.fallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4FingerprintOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4Fingerprint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBehavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBehavior = value.fallbackBehavior;
    }
  }

  // fallback_behavior - computed: false, optional: false, required: true
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4FingerprintList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4Fingerprint[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4FingerprintOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4FingerprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#included_paths Wafv2WebAclRuleA#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all Wafv2WebAclRuleA#all}
  */
  readonly all?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    included_paths: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includedPaths),
    all: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllToTerraform, true)(struct!.all),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    included_paths: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includedPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    all: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllToHclTerraform, true)(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPaths = this._includedPaths;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includedPaths = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includedPaths = value.includedPaths;
      this._all.internalValue = value.all;
    }
  }

  // included_paths - computed: true, optional: true, required: false
  private _includedPaths?: string[]; 
  public get includedPaths() {
    return this.getListAttribute('included_paths');
  }
  public set includedPaths(value: string[]) {
    this._includedPaths = value;
  }
  public resetIncludedPaths() {
    this._includedPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPathsInput() {
    return this._includedPaths;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllList(this, "all", false);
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll[] | cdktn.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#invalid_fallback_behavior Wafv2WebAclRuleA#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_scope Wafv2WebAclRuleA#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#match_pattern Wafv2WebAclRuleA#match_pattern}
  */
  readonly matchPattern?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    invalid_fallback_behavior: cdktn.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktn.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    invalid_fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.invalidFallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_scope: {
      value: cdktn.stringToHclTerraform(struct!.matchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternToHclTerraform, true)(struct!.matchPattern),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBody | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidFallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFallbackBehavior = this._invalidFallbackBehavior;
    }
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBody | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invalidFallbackBehavior = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invalidFallbackBehavior = value.invalidFallbackBehavior;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // invalid_fallback_behavior - computed: false, optional: true, required: false
  private _invalidFallbackBehavior?: string; 
  public get invalidFallbackBehavior() {
    return this.getStringAttribute('invalid_fallback_behavior');
  }
  public set invalidFallbackBehavior(value: string) {
    this._invalidFallbackBehavior = value;
  }
  public resetInvalidFallbackBehavior() {
    this._invalidFallbackBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidFallbackBehaviorInput() {
    return this._invalidFallbackBehavior;
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: true, optional: true, required: false
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  public resetOversizeHandling() {
    this._oversizeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern[] | cdktn.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  public resetMatchPattern() {
    this._matchPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBody[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  /**
  * Header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#name Wafv2WebAclRuleA#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  /**
  * Query argument name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#name Wafv2WebAclRuleA#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#fallback_behavior Wafv2WebAclRuleA#fallback_behavior}
  */
  readonly fallbackBehavior?: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragmentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fallback_behavior: cdktn.stringToTerraform(struct!.fallbackBehavior),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragmentToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fallback_behavior: {
      value: cdktn.stringToHclTerraform(struct!.fallbackBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackBehavior = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackBehavior = value.fallbackBehavior;
    }
  }

  // fallback_behavior - computed: true, optional: true, required: false
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  public resetFallbackBehavior() {
    this._fallbackBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragmentList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragment[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragmentOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
  /**
  * all_query_arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#all_query_arguments Wafv2WebAclRuleA#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[] | cdktn.IResolvable;
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#body Wafv2WebAclRuleA#body}
  */
  readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody[] | cdktn.IResolvable;
  /**
  * cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#cookies Wafv2WebAclRuleA#cookies}
  */
  readonly cookies?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookies[] | cdktn.IResolvable;
  /**
  * header_order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#header_order Wafv2WebAclRuleA#header_order}
  */
  readonly headerOrder?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrder[] | cdktn.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#headers Wafv2WebAclRuleA#headers}
  */
  readonly headers?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaders[] | cdktn.IResolvable;
  /**
  * ja3_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#ja3_fingerprint Wafv2WebAclRuleA#ja3_fingerprint}
  */
  readonly ja3Fingerprint?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3Fingerprint[] | cdktn.IResolvable;
  /**
  * ja4_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#ja4_fingerprint Wafv2WebAclRuleA#ja4_fingerprint}
  */
  readonly ja4Fingerprint?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4Fingerprint[] | cdktn.IResolvable;
  /**
  * json_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#json_body Wafv2WebAclRuleA#json_body}
  */
  readonly jsonBody?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBody[] | cdktn.IResolvable;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#method Wafv2WebAclRuleA#method}
  */
  readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod[] | cdktn.IResolvable;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#query_string Wafv2WebAclRuleA#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString[] | cdktn.IResolvable;
  /**
  * single_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#single_header Wafv2WebAclRuleA#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[] | cdktn.IResolvable;
  /**
  * single_query_argument block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#single_query_argument Wafv2WebAclRuleA#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[] | cdktn.IResolvable;
  /**
  * uri_fragment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#uri_fragment Wafv2WebAclRuleA#uri_fragment}
  */
  readonly uriFragment?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragment[] | cdktn.IResolvable;
  /**
  * uri_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#uri_path Wafv2WebAclRuleA#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all_query_arguments: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform, true)(struct!.allQueryArguments),
    body: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform, true)(struct!.body),
    cookies: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesToTerraform, true)(struct!.cookies),
    header_order: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrderToTerraform, true)(struct!.headerOrder),
    headers: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersToTerraform, true)(struct!.headers),
    ja3_fingerprint: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3FingerprintToTerraform, true)(struct!.ja3Fingerprint),
    ja4_fingerprint: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4FingerprintToTerraform, true)(struct!.ja4Fingerprint),
    json_body: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyToTerraform, true)(struct!.jsonBody),
    method: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform, true)(struct!.method),
    query_string: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform, true)(struct!.queryString),
    single_header: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform, true)(struct!.singleHeader),
    single_query_argument: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform, true)(struct!.singleQueryArgument),
    uri_fragment: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragmentToTerraform, true)(struct!.uriFragment),
    uri_path: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform, true)(struct!.uriPath),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all_query_arguments: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToHclTerraform, true)(struct!.allQueryArguments),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsList",
    },
    body: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToHclTerraform, true)(struct!.body),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyList",
    },
    cookies: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesToHclTerraform, true)(struct!.cookies),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesList",
    },
    header_order: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrderToHclTerraform, true)(struct!.headerOrder),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrderList",
    },
    headers: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersList",
    },
    ja3_fingerprint: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3FingerprintToHclTerraform, true)(struct!.ja3Fingerprint),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3FingerprintList",
    },
    ja4_fingerprint: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4FingerprintToHclTerraform, true)(struct!.ja4Fingerprint),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4FingerprintList",
    },
    json_body: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyToHclTerraform, true)(struct!.jsonBody),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyList",
    },
    method: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToHclTerraform, true)(struct!.method),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodList",
    },
    query_string: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringList",
    },
    single_header: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToHclTerraform, true)(struct!.singleHeader),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderList",
    },
    single_query_argument: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToHclTerraform, true)(struct!.singleQueryArgument),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentList",
    },
    uri_fragment: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragmentToHclTerraform, true)(struct!.uriFragment),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragmentList",
    },
    uri_path: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToHclTerraform, true)(struct!.uriPath),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allQueryArguments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    if (this._headerOrder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOrder = this._headerOrder?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._ja3Fingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja3Fingerprint = this._ja3Fingerprint?.internalValue;
    }
    if (this._ja4Fingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja4Fingerprint = this._ja4Fingerprint?.internalValue;
    }
    if (this._jsonBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonBody = this._jsonBody?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._singleHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeader = this._singleHeader?.internalValue;
    }
    if (this._singleQueryArgument?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
    }
    if (this._uriFragment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriFragment = this._uriFragment?.internalValue;
    }
    if (this._uriPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._headerOrder.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._ja3Fingerprint.internalValue = undefined;
      this._ja4Fingerprint.internalValue = undefined;
      this._jsonBody.internalValue = undefined;
      this._method.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._singleHeader.internalValue = undefined;
      this._singleQueryArgument.internalValue = undefined;
      this._uriFragment.internalValue = undefined;
      this._uriPath.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allQueryArguments.internalValue = value.allQueryArguments;
      this._body.internalValue = value.body;
      this._cookies.internalValue = value.cookies;
      this._headerOrder.internalValue = value.headerOrder;
      this._headers.internalValue = value.headers;
      this._ja3Fingerprint.internalValue = value.ja3Fingerprint;
      this._ja4Fingerprint.internalValue = value.ja4Fingerprint;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriFragment.internalValue = value.uriFragment;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsList(this, "all_query_arguments", false);
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[] | cdktn.IResolvable) {
    this._allQueryArguments.internalValue = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments.internalValue;
  }

  // body - computed: false, optional: true, required: false
  private _body = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyList(this, "body", false);
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody[] | cdktn.IResolvable) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookiesList(this, "cookies", false);
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchCookies[] | cdktn.IResolvable) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // header_order - computed: false, optional: true, required: false
  private _headerOrder = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrderList(this, "header_order", false);
  public get headerOrder() {
    return this._headerOrder;
  }
  public putHeaderOrder(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaderOrder[] | cdktn.IResolvable) {
    this._headerOrder.internalValue = value;
  }
  public resetHeaderOrder() {
    this._headerOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOrderInput() {
    return this._headerOrder.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchHeaders[] | cdktn.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // ja3_fingerprint - computed: false, optional: true, required: false
  private _ja3Fingerprint = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3FingerprintList(this, "ja3_fingerprint", false);
  public get ja3Fingerprint() {
    return this._ja3Fingerprint;
  }
  public putJa3Fingerprint(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa3Fingerprint[] | cdktn.IResolvable) {
    this._ja3Fingerprint.internalValue = value;
  }
  public resetJa3Fingerprint() {
    this._ja3Fingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja3FingerprintInput() {
    return this._ja3Fingerprint.internalValue;
  }

  // ja4_fingerprint - computed: false, optional: true, required: false
  private _ja4Fingerprint = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4FingerprintList(this, "ja4_fingerprint", false);
  public get ja4Fingerprint() {
    return this._ja4Fingerprint;
  }
  public putJa4Fingerprint(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJa4Fingerprint[] | cdktn.IResolvable) {
    this._ja4Fingerprint.internalValue = value;
  }
  public resetJa4Fingerprint() {
    this._ja4Fingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4FingerprintInput() {
    return this._ja4Fingerprint.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBodyList(this, "json_body", false);
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchJsonBody[] | cdktn.IResolvable) {
    this._jsonBody.internalValue = value;
  }
  public resetJsonBody() {
    this._jsonBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonBodyInput() {
    return this._jsonBody.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodList(this, "method", false);
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod[] | cdktn.IResolvable) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString[] | cdktn.IResolvable) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderList(this, "single_header", false);
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[] | cdktn.IResolvable) {
    this._singleHeader.internalValue = value;
  }
  public resetSingleHeader() {
    this._singleHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader.internalValue;
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentList(this, "single_query_argument", false);
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[] | cdktn.IResolvable) {
    this._singleQueryArgument.internalValue = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument.internalValue;
  }

  // uri_fragment - computed: false, optional: true, required: false
  private _uriFragment = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragmentList(this, "uri_fragment", false);
  public get uriFragment() {
    return this._uriFragment;
  }
  public putUriFragment(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriFragment[] | cdktn.IResolvable) {
    this._uriFragment.internalValue = value;
  }
  public resetUriFragment() {
    this._uriFragment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriFragmentInput() {
    return this._uriFragment.internalValue;
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathList(this, "uri_path", false);
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath[] | cdktn.IResolvable) {
    this._uriPath.internalValue = value;
  }
  public resetUriPath() {
    this._uriPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#priority Wafv2WebAclRuleA#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#type Wafv2WebAclRuleA#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    priority: cdktn.numberToTerraform(struct!.priority),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._type = value.type;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#comparison_operator Wafv2WebAclRuleA#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#size Wafv2WebAclRuleA#size}
  */
  readonly size: number;
  /**
  * field_to_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#field_to_match Wafv2WebAclRuleA#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch[] | cdktn.IResolvable;
  /**
  * text_transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#text_transformation Wafv2WebAclRuleA#text_transformation}
  */
  readonly textTransformation?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[] | cdktn.IResolvable;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    size: cdktn.numberToTerraform(struct!.size),
    field_to_match: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform, true)(struct!.fieldToMatch),
    text_transformation: cdktn.listMapper(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field_to_match: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToHclTerraform, true)(struct!.fieldToMatch),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchList",
    },
    text_transformation: {
      value: cdktn.listMapperHcl(wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToHclTerraform, true)(struct!.textTransformation),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._fieldToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
    }
    if (this._textTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTransformation = this._textTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonOperator = undefined;
      this._size = undefined;
      this._fieldToMatch.internalValue = undefined;
      this._textTransformation.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonOperator = value.comparisonOperator;
      this._size = value.size;
      this._fieldToMatch.internalValue = value.fieldToMatch;
      this._textTransformation.internalValue = value.textTransformation;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchList(this, "field_to_match", false);
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch[] | cdktn.IResolvable) {
    this._fieldToMatch.internalValue = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch.internalValue;
  }

  // text_transformation - computed: false, optional: true, required: false
  private _textTransformation = new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationList(this, "text_transformation", false);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[] | cdktn.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  public resetTextTransformation() {
    this._textTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/wafv2_web_acl_rule#oversize_handling Wafv2WebAclRuleA#oversize_handling}
  */
  readonly oversizeHandling?: string;
}

export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    oversize_handling: cdktn.stringToTerraform(struct!.oversizeHandling),
  }
}


export function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToHclTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    oversize_handling: {
      value: cdktn.stringToHclTerraform(struct!.oversizeHandling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oversizeHandling = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oversizeHandling = value.oversizeHandling;
    }
  }

  // oversize_handling - computed: true, optional: true, required: false
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  public resetOversizeHandling() {
    this._oversizeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }
}

export class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyList extends cdktn.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody[] | cdktn.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference {
    return new Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
