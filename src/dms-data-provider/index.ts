/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DmsDataProviderConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#description DmsDataProvider#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#name DmsDataProvider#name}
  */
  readonly name?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#region DmsDataProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#virtual DmsDataProvider#virtual}
  */
  readonly virtual?: boolean | cdktn.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#settings DmsDataProvider#settings}
  */
  readonly settings?: DmsDataProviderSettings[] | cdktn.IResolvable;
}
export interface DmsDataProviderSettingsDocDbSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}
  */
  readonly sslMode?: string;
}

export function dmsDataProviderSettingsDocDbSettingsToTerraform(struct?: DmsDataProviderSettingsDocDbSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    port: cdktn.numberToTerraform(struct!.port),
    server_name: cdktn.stringToTerraform(struct!.serverName),
    ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
  }
}


export function dmsDataProviderSettingsDocDbSettingsToHclTerraform(struct?: DmsDataProviderSettingsDocDbSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_name: {
      value: cdktn.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktn.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsDataProviderSettingsDocDbSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsDataProviderSettingsDocDbSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsDataProviderSettingsDocDbSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateArn = undefined;
      this._databaseName = undefined;
      this._port = undefined;
      this._serverName = undefined;
      this._sslMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateArn = value.certificateArn;
      this._databaseName = value.databaseName;
      this._port = value.port;
      this._serverName = value.serverName;
      this._sslMode = value.sslMode;
    }
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}

export class DmsDataProviderSettingsDocDbSettingsList extends cdktn.ComplexList {
  public internalValue? : DmsDataProviderSettingsDocDbSettings[] | cdktn.IResolvable

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
  public get(index: number): DmsDataProviderSettingsDocDbSettingsOutputReference {
    return new DmsDataProviderSettingsDocDbSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsDataProviderSettingsIbmDb2LuwSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#encryption_algorithm DmsDataProvider#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}
  */
  readonly s3AccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}
  */
  readonly s3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#security_mechanism DmsDataProvider#security_mechanism}
  */
  readonly securityMechanism?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}
  */
  readonly sslMode?: string;
}

export function dmsDataProviderSettingsIbmDb2LuwSettingsToTerraform(struct?: DmsDataProviderSettingsIbmDb2LuwSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    encryption_algorithm: cdktn.numberToTerraform(struct!.encryptionAlgorithm),
    port: cdktn.numberToTerraform(struct!.port),
    s3_access_role_arn: cdktn.stringToTerraform(struct!.s3AccessRoleArn),
    s3_path: cdktn.stringToTerraform(struct!.s3Path),
    security_mechanism: cdktn.numberToTerraform(struct!.securityMechanism),
    server_name: cdktn.stringToTerraform(struct!.serverName),
    ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
  }
}


export function dmsDataProviderSettingsIbmDb2LuwSettingsToHclTerraform(struct?: DmsDataProviderSettingsIbmDb2LuwSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_algorithm: {
      value: cdktn.numberToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.s3AccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_path: {
      value: cdktn.stringToHclTerraform(struct!.s3Path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_mechanism: {
      value: cdktn.numberToHclTerraform(struct!.securityMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_name: {
      value: cdktn.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktn.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsDataProviderSettingsIbmDb2LuwSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._s3AccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AccessRoleArn = this._s3AccessRoleArn;
    }
    if (this._s3Path !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Path = this._s3Path;
    }
    if (this._securityMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMechanism = this._securityMechanism;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsDataProviderSettingsIbmDb2LuwSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateArn = undefined;
      this._databaseName = undefined;
      this._encryptionAlgorithm = undefined;
      this._port = undefined;
      this._s3AccessRoleArn = undefined;
      this._s3Path = undefined;
      this._securityMechanism = undefined;
      this._serverName = undefined;
      this._sslMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateArn = value.certificateArn;
      this._databaseName = value.databaseName;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._port = value.port;
      this._s3AccessRoleArn = value.s3AccessRoleArn;
      this._s3Path = value.s3Path;
      this._securityMechanism = value.securityMechanism;
      this._serverName = value.serverName;
      this._sslMode = value.sslMode;
    }
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // encryption_algorithm - computed: true, optional: true, required: false
  private _encryptionAlgorithm?: number; 
  public get encryptionAlgorithm() {
    return this.getNumberAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: number) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // s3_access_role_arn - computed: false, optional: true, required: false
  private _s3AccessRoleArn?: string; 
  public get s3AccessRoleArn() {
    return this.getStringAttribute('s3_access_role_arn');
  }
  public set s3AccessRoleArn(value: string) {
    this._s3AccessRoleArn = value;
  }
  public resetS3AccessRoleArn() {
    this._s3AccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessRoleArnInput() {
    return this._s3AccessRoleArn;
  }

  // s3_path - computed: false, optional: true, required: false
  private _s3Path?: string; 
  public get s3Path() {
    return this.getStringAttribute('s3_path');
  }
  public set s3Path(value: string) {
    this._s3Path = value;
  }
  public resetS3Path() {
    this._s3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PathInput() {
    return this._s3Path;
  }

  // security_mechanism - computed: true, optional: true, required: false
  private _securityMechanism?: number; 
  public get securityMechanism() {
    return this.getNumberAttribute('security_mechanism');
  }
  public set securityMechanism(value: number) {
    this._securityMechanism = value;
  }
  public resetSecurityMechanism() {
    this._securityMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityMechanismInput() {
    return this._securityMechanism;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}

export class DmsDataProviderSettingsIbmDb2LuwSettingsList extends cdktn.ComplexList {
  public internalValue? : DmsDataProviderSettingsIbmDb2LuwSettings[] | cdktn.IResolvable

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
  public get(index: number): DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference {
    return new DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsDataProviderSettingsIbmDb2ZosSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}
  */
  readonly s3AccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}
  */
  readonly s3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}
  */
  readonly sslMode?: string;
}

export function dmsDataProviderSettingsIbmDb2ZosSettingsToTerraform(struct?: DmsDataProviderSettingsIbmDb2ZosSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    port: cdktn.numberToTerraform(struct!.port),
    s3_access_role_arn: cdktn.stringToTerraform(struct!.s3AccessRoleArn),
    s3_path: cdktn.stringToTerraform(struct!.s3Path),
    server_name: cdktn.stringToTerraform(struct!.serverName),
    ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
  }
}


export function dmsDataProviderSettingsIbmDb2ZosSettingsToHclTerraform(struct?: DmsDataProviderSettingsIbmDb2ZosSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.s3AccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_path: {
      value: cdktn.stringToHclTerraform(struct!.s3Path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktn.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktn.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsDataProviderSettingsIbmDb2ZosSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._s3AccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AccessRoleArn = this._s3AccessRoleArn;
    }
    if (this._s3Path !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Path = this._s3Path;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsDataProviderSettingsIbmDb2ZosSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateArn = undefined;
      this._databaseName = undefined;
      this._port = undefined;
      this._s3AccessRoleArn = undefined;
      this._s3Path = undefined;
      this._serverName = undefined;
      this._sslMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateArn = value.certificateArn;
      this._databaseName = value.databaseName;
      this._port = value.port;
      this._s3AccessRoleArn = value.s3AccessRoleArn;
      this._s3Path = value.s3Path;
      this._serverName = value.serverName;
      this._sslMode = value.sslMode;
    }
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // s3_access_role_arn - computed: false, optional: true, required: false
  private _s3AccessRoleArn?: string; 
  public get s3AccessRoleArn() {
    return this.getStringAttribute('s3_access_role_arn');
  }
  public set s3AccessRoleArn(value: string) {
    this._s3AccessRoleArn = value;
  }
  public resetS3AccessRoleArn() {
    this._s3AccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessRoleArnInput() {
    return this._s3AccessRoleArn;
  }

  // s3_path - computed: false, optional: true, required: false
  private _s3Path?: string; 
  public get s3Path() {
    return this.getStringAttribute('s3_path');
  }
  public set s3Path(value: string) {
    this._s3Path = value;
  }
  public resetS3Path() {
    this._s3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PathInput() {
    return this._s3Path;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}

export class DmsDataProviderSettingsIbmDb2ZosSettingsList extends cdktn.ComplexList {
  public internalValue? : DmsDataProviderSettingsIbmDb2ZosSettings[] | cdktn.IResolvable

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
  public get(index: number): DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference {
    return new DmsDataProviderSettingsIbmDb2ZosSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsDataProviderSettingsMariaDbSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}
  */
  readonly s3AccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}
  */
  readonly s3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}
  */
  readonly sslMode?: string;
}

export function dmsDataProviderSettingsMariaDbSettingsToTerraform(struct?: DmsDataProviderSettingsMariaDbSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    port: cdktn.numberToTerraform(struct!.port),
    s3_access_role_arn: cdktn.stringToTerraform(struct!.s3AccessRoleArn),
    s3_path: cdktn.stringToTerraform(struct!.s3Path),
    server_name: cdktn.stringToTerraform(struct!.serverName),
    ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
  }
}


export function dmsDataProviderSettingsMariaDbSettingsToHclTerraform(struct?: DmsDataProviderSettingsMariaDbSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.s3AccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_path: {
      value: cdktn.stringToHclTerraform(struct!.s3Path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktn.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktn.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsDataProviderSettingsMariaDbSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsDataProviderSettingsMariaDbSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._s3AccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AccessRoleArn = this._s3AccessRoleArn;
    }
    if (this._s3Path !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Path = this._s3Path;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsDataProviderSettingsMariaDbSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateArn = undefined;
      this._port = undefined;
      this._s3AccessRoleArn = undefined;
      this._s3Path = undefined;
      this._serverName = undefined;
      this._sslMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateArn = value.certificateArn;
      this._port = value.port;
      this._s3AccessRoleArn = value.s3AccessRoleArn;
      this._s3Path = value.s3Path;
      this._serverName = value.serverName;
      this._sslMode = value.sslMode;
    }
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // s3_access_role_arn - computed: false, optional: true, required: false
  private _s3AccessRoleArn?: string; 
  public get s3AccessRoleArn() {
    return this.getStringAttribute('s3_access_role_arn');
  }
  public set s3AccessRoleArn(value: string) {
    this._s3AccessRoleArn = value;
  }
  public resetS3AccessRoleArn() {
    this._s3AccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessRoleArnInput() {
    return this._s3AccessRoleArn;
  }

  // s3_path - computed: false, optional: true, required: false
  private _s3Path?: string; 
  public get s3Path() {
    return this.getStringAttribute('s3_path');
  }
  public set s3Path(value: string) {
    this._s3Path = value;
  }
  public resetS3Path() {
    this._s3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PathInput() {
    return this._s3Path;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}

export class DmsDataProviderSettingsMariaDbSettingsList extends cdktn.ComplexList {
  public internalValue? : DmsDataProviderSettingsMariaDbSettings[] | cdktn.IResolvable

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
  public get(index: number): DmsDataProviderSettingsMariaDbSettingsOutputReference {
    return new DmsDataProviderSettingsMariaDbSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsDataProviderSettingsMicrosoftSqlServerSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}
  */
  readonly s3AccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}
  */
  readonly s3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}
  */
  readonly sslMode?: string;
}

export function dmsDataProviderSettingsMicrosoftSqlServerSettingsToTerraform(struct?: DmsDataProviderSettingsMicrosoftSqlServerSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    port: cdktn.numberToTerraform(struct!.port),
    s3_access_role_arn: cdktn.stringToTerraform(struct!.s3AccessRoleArn),
    s3_path: cdktn.stringToTerraform(struct!.s3Path),
    server_name: cdktn.stringToTerraform(struct!.serverName),
    ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
  }
}


export function dmsDataProviderSettingsMicrosoftSqlServerSettingsToHclTerraform(struct?: DmsDataProviderSettingsMicrosoftSqlServerSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.s3AccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_path: {
      value: cdktn.stringToHclTerraform(struct!.s3Path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktn.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktn.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsDataProviderSettingsMicrosoftSqlServerSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._s3AccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AccessRoleArn = this._s3AccessRoleArn;
    }
    if (this._s3Path !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Path = this._s3Path;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsDataProviderSettingsMicrosoftSqlServerSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateArn = undefined;
      this._databaseName = undefined;
      this._port = undefined;
      this._s3AccessRoleArn = undefined;
      this._s3Path = undefined;
      this._serverName = undefined;
      this._sslMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateArn = value.certificateArn;
      this._databaseName = value.databaseName;
      this._port = value.port;
      this._s3AccessRoleArn = value.s3AccessRoleArn;
      this._s3Path = value.s3Path;
      this._serverName = value.serverName;
      this._sslMode = value.sslMode;
    }
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // s3_access_role_arn - computed: false, optional: true, required: false
  private _s3AccessRoleArn?: string; 
  public get s3AccessRoleArn() {
    return this.getStringAttribute('s3_access_role_arn');
  }
  public set s3AccessRoleArn(value: string) {
    this._s3AccessRoleArn = value;
  }
  public resetS3AccessRoleArn() {
    this._s3AccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessRoleArnInput() {
    return this._s3AccessRoleArn;
  }

  // s3_path - computed: false, optional: true, required: false
  private _s3Path?: string; 
  public get s3Path() {
    return this.getStringAttribute('s3_path');
  }
  public set s3Path(value: string) {
    this._s3Path = value;
  }
  public resetS3Path() {
    this._s3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PathInput() {
    return this._s3Path;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}

export class DmsDataProviderSettingsMicrosoftSqlServerSettingsList extends cdktn.ComplexList {
  public internalValue? : DmsDataProviderSettingsMicrosoftSqlServerSettings[] | cdktn.IResolvable

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
  public get(index: number): DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference {
    return new DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsDataProviderSettingsMongoDbSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}
  */
  readonly authMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}
  */
  readonly authSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}
  */
  readonly sslMode?: string;
}

export function dmsDataProviderSettingsMongoDbSettingsToTerraform(struct?: DmsDataProviderSettingsMongoDbSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_mechanism: cdktn.stringToTerraform(struct!.authMechanism),
    auth_source: cdktn.stringToTerraform(struct!.authSource),
    auth_type: cdktn.stringToTerraform(struct!.authType),
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    port: cdktn.numberToTerraform(struct!.port),
    server_name: cdktn.stringToTerraform(struct!.serverName),
    ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
  }
}


export function dmsDataProviderSettingsMongoDbSettingsToHclTerraform(struct?: DmsDataProviderSettingsMongoDbSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_mechanism: {
      value: cdktn.stringToHclTerraform(struct!.authMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_source: {
      value: cdktn.stringToHclTerraform(struct!.authSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktn.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_name: {
      value: cdktn.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktn.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsDataProviderSettingsMongoDbSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsDataProviderSettingsMongoDbSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMechanism = this._authMechanism;
    }
    if (this._authSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSource = this._authSource;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsDataProviderSettingsMongoDbSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMechanism = undefined;
      this._authSource = undefined;
      this._authType = undefined;
      this._certificateArn = undefined;
      this._databaseName = undefined;
      this._port = undefined;
      this._serverName = undefined;
      this._sslMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMechanism = value.authMechanism;
      this._authSource = value.authSource;
      this._authType = value.authType;
      this._certificateArn = value.certificateArn;
      this._databaseName = value.databaseName;
      this._port = value.port;
      this._serverName = value.serverName;
      this._sslMode = value.sslMode;
    }
  }

  // auth_mechanism - computed: true, optional: true, required: false
  private _authMechanism?: string; 
  public get authMechanism() {
    return this.getStringAttribute('auth_mechanism');
  }
  public set authMechanism(value: string) {
    this._authMechanism = value;
  }
  public resetAuthMechanism() {
    this._authMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMechanismInput() {
    return this._authMechanism;
  }

  // auth_source - computed: true, optional: true, required: false
  private _authSource?: string; 
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }
  public set authSource(value: string) {
    this._authSource = value;
  }
  public resetAuthSource() {
    this._authSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSourceInput() {
    return this._authSource;
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}

export class DmsDataProviderSettingsMongoDbSettingsList extends cdktn.ComplexList {
  public internalValue? : DmsDataProviderSettingsMongoDbSettings[] | cdktn.IResolvable

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
  public get(index: number): DmsDataProviderSettingsMongoDbSettingsOutputReference {
    return new DmsDataProviderSettingsMongoDbSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsDataProviderSettingsMysqlSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}
  */
  readonly s3AccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}
  */
  readonly s3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}
  */
  readonly sslMode?: string;
}

export function dmsDataProviderSettingsMysqlSettingsToTerraform(struct?: DmsDataProviderSettingsMysqlSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    port: cdktn.numberToTerraform(struct!.port),
    s3_access_role_arn: cdktn.stringToTerraform(struct!.s3AccessRoleArn),
    s3_path: cdktn.stringToTerraform(struct!.s3Path),
    server_name: cdktn.stringToTerraform(struct!.serverName),
    ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
  }
}


export function dmsDataProviderSettingsMysqlSettingsToHclTerraform(struct?: DmsDataProviderSettingsMysqlSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.s3AccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_path: {
      value: cdktn.stringToHclTerraform(struct!.s3Path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktn.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktn.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsDataProviderSettingsMysqlSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsDataProviderSettingsMysqlSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._s3AccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AccessRoleArn = this._s3AccessRoleArn;
    }
    if (this._s3Path !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Path = this._s3Path;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsDataProviderSettingsMysqlSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateArn = undefined;
      this._port = undefined;
      this._s3AccessRoleArn = undefined;
      this._s3Path = undefined;
      this._serverName = undefined;
      this._sslMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateArn = value.certificateArn;
      this._port = value.port;
      this._s3AccessRoleArn = value.s3AccessRoleArn;
      this._s3Path = value.s3Path;
      this._serverName = value.serverName;
      this._sslMode = value.sslMode;
    }
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // s3_access_role_arn - computed: false, optional: true, required: false
  private _s3AccessRoleArn?: string; 
  public get s3AccessRoleArn() {
    return this.getStringAttribute('s3_access_role_arn');
  }
  public set s3AccessRoleArn(value: string) {
    this._s3AccessRoleArn = value;
  }
  public resetS3AccessRoleArn() {
    this._s3AccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessRoleArnInput() {
    return this._s3AccessRoleArn;
  }

  // s3_path - computed: false, optional: true, required: false
  private _s3Path?: string; 
  public get s3Path() {
    return this.getStringAttribute('s3_path');
  }
  public set s3Path(value: string) {
    this._s3Path = value;
  }
  public resetS3Path() {
    this._s3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PathInput() {
    return this._s3Path;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}

export class DmsDataProviderSettingsMysqlSettingsList extends cdktn.ComplexList {
  public internalValue? : DmsDataProviderSettingsMysqlSettings[] | cdktn.IResolvable

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
  public get(index: number): DmsDataProviderSettingsMysqlSettingsOutputReference {
    return new DmsDataProviderSettingsMysqlSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsDataProviderSettingsOracleSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}
  */
  readonly asmServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}
  */
  readonly s3AccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}
  */
  readonly s3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}
  */
  readonly secretsManagerOracleAsmAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}
  */
  readonly secretsManagerOracleAsmSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}
  */
  readonly secretsManagerSecurityDbEncryptionAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}
  */
  readonly secretsManagerSecurityDbEncryptionSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}
  */
  readonly sslMode?: string;
}

export function dmsDataProviderSettingsOracleSettingsToTerraform(struct?: DmsDataProviderSettingsOracleSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    asm_server: cdktn.stringToTerraform(struct!.asmServer),
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    port: cdktn.numberToTerraform(struct!.port),
    s3_access_role_arn: cdktn.stringToTerraform(struct!.s3AccessRoleArn),
    s3_path: cdktn.stringToTerraform(struct!.s3Path),
    secrets_manager_oracle_asm_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerOracleAsmAccessRoleArn),
    secrets_manager_oracle_asm_secret_id: cdktn.stringToTerraform(struct!.secretsManagerOracleAsmSecretId),
    secrets_manager_security_db_encryption_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerSecurityDbEncryptionAccessRoleArn),
    secrets_manager_security_db_encryption_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecurityDbEncryptionSecretId),
    server_name: cdktn.stringToTerraform(struct!.serverName),
    ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
  }
}


export function dmsDataProviderSettingsOracleSettingsToHclTerraform(struct?: DmsDataProviderSettingsOracleSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    asm_server: {
      value: cdktn.stringToHclTerraform(struct!.asmServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.s3AccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_path: {
      value: cdktn.stringToHclTerraform(struct!.s3Path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_oracle_asm_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerOracleAsmAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_oracle_asm_secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerOracleAsmSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_security_db_encryption_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerSecurityDbEncryptionAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets_manager_security_db_encryption_secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretsManagerSecurityDbEncryptionSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktn.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktn.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsDataProviderSettingsOracleSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsDataProviderSettingsOracleSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asmServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmServer = this._asmServer;
    }
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._s3AccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AccessRoleArn = this._s3AccessRoleArn;
    }
    if (this._s3Path !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Path = this._s3Path;
    }
    if (this._secretsManagerOracleAsmAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerOracleAsmAccessRoleArn = this._secretsManagerOracleAsmAccessRoleArn;
    }
    if (this._secretsManagerOracleAsmSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerOracleAsmSecretId = this._secretsManagerOracleAsmSecretId;
    }
    if (this._secretsManagerSecurityDbEncryptionAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerSecurityDbEncryptionAccessRoleArn = this._secretsManagerSecurityDbEncryptionAccessRoleArn;
    }
    if (this._secretsManagerSecurityDbEncryptionSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerSecurityDbEncryptionSecretId = this._secretsManagerSecurityDbEncryptionSecretId;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsDataProviderSettingsOracleSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asmServer = undefined;
      this._certificateArn = undefined;
      this._databaseName = undefined;
      this._port = undefined;
      this._s3AccessRoleArn = undefined;
      this._s3Path = undefined;
      this._secretsManagerOracleAsmAccessRoleArn = undefined;
      this._secretsManagerOracleAsmSecretId = undefined;
      this._secretsManagerSecurityDbEncryptionAccessRoleArn = undefined;
      this._secretsManagerSecurityDbEncryptionSecretId = undefined;
      this._serverName = undefined;
      this._sslMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asmServer = value.asmServer;
      this._certificateArn = value.certificateArn;
      this._databaseName = value.databaseName;
      this._port = value.port;
      this._s3AccessRoleArn = value.s3AccessRoleArn;
      this._s3Path = value.s3Path;
      this._secretsManagerOracleAsmAccessRoleArn = value.secretsManagerOracleAsmAccessRoleArn;
      this._secretsManagerOracleAsmSecretId = value.secretsManagerOracleAsmSecretId;
      this._secretsManagerSecurityDbEncryptionAccessRoleArn = value.secretsManagerSecurityDbEncryptionAccessRoleArn;
      this._secretsManagerSecurityDbEncryptionSecretId = value.secretsManagerSecurityDbEncryptionSecretId;
      this._serverName = value.serverName;
      this._sslMode = value.sslMode;
    }
  }

  // asm_server - computed: false, optional: true, required: false
  private _asmServer?: string; 
  public get asmServer() {
    return this.getStringAttribute('asm_server');
  }
  public set asmServer(value: string) {
    this._asmServer = value;
  }
  public resetAsmServer() {
    this._asmServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmServerInput() {
    return this._asmServer;
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // s3_access_role_arn - computed: false, optional: true, required: false
  private _s3AccessRoleArn?: string; 
  public get s3AccessRoleArn() {
    return this.getStringAttribute('s3_access_role_arn');
  }
  public set s3AccessRoleArn(value: string) {
    this._s3AccessRoleArn = value;
  }
  public resetS3AccessRoleArn() {
    this._s3AccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessRoleArnInput() {
    return this._s3AccessRoleArn;
  }

  // s3_path - computed: false, optional: true, required: false
  private _s3Path?: string; 
  public get s3Path() {
    return this.getStringAttribute('s3_path');
  }
  public set s3Path(value: string) {
    this._s3Path = value;
  }
  public resetS3Path() {
    this._s3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PathInput() {
    return this._s3Path;
  }

  // secrets_manager_oracle_asm_access_role_arn - computed: false, optional: true, required: false
  private _secretsManagerOracleAsmAccessRoleArn?: string; 
  public get secretsManagerOracleAsmAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_oracle_asm_access_role_arn');
  }
  public set secretsManagerOracleAsmAccessRoleArn(value: string) {
    this._secretsManagerOracleAsmAccessRoleArn = value;
  }
  public resetSecretsManagerOracleAsmAccessRoleArn() {
    this._secretsManagerOracleAsmAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerOracleAsmAccessRoleArnInput() {
    return this._secretsManagerOracleAsmAccessRoleArn;
  }

  // secrets_manager_oracle_asm_secret_id - computed: false, optional: true, required: false
  private _secretsManagerOracleAsmSecretId?: string; 
  public get secretsManagerOracleAsmSecretId() {
    return this.getStringAttribute('secrets_manager_oracle_asm_secret_id');
  }
  public set secretsManagerOracleAsmSecretId(value: string) {
    this._secretsManagerOracleAsmSecretId = value;
  }
  public resetSecretsManagerOracleAsmSecretId() {
    this._secretsManagerOracleAsmSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerOracleAsmSecretIdInput() {
    return this._secretsManagerOracleAsmSecretId;
  }

  // secrets_manager_security_db_encryption_access_role_arn - computed: false, optional: true, required: false
  private _secretsManagerSecurityDbEncryptionAccessRoleArn?: string; 
  public get secretsManagerSecurityDbEncryptionAccessRoleArn() {
    return this.getStringAttribute('secrets_manager_security_db_encryption_access_role_arn');
  }
  public set secretsManagerSecurityDbEncryptionAccessRoleArn(value: string) {
    this._secretsManagerSecurityDbEncryptionAccessRoleArn = value;
  }
  public resetSecretsManagerSecurityDbEncryptionAccessRoleArn() {
    this._secretsManagerSecurityDbEncryptionAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerSecurityDbEncryptionAccessRoleArnInput() {
    return this._secretsManagerSecurityDbEncryptionAccessRoleArn;
  }

  // secrets_manager_security_db_encryption_secret_id - computed: false, optional: true, required: false
  private _secretsManagerSecurityDbEncryptionSecretId?: string; 
  public get secretsManagerSecurityDbEncryptionSecretId() {
    return this.getStringAttribute('secrets_manager_security_db_encryption_secret_id');
  }
  public set secretsManagerSecurityDbEncryptionSecretId(value: string) {
    this._secretsManagerSecurityDbEncryptionSecretId = value;
  }
  public resetSecretsManagerSecurityDbEncryptionSecretId() {
    this._secretsManagerSecurityDbEncryptionSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerSecurityDbEncryptionSecretIdInput() {
    return this._secretsManagerSecurityDbEncryptionSecretId;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}

export class DmsDataProviderSettingsOracleSettingsList extends cdktn.ComplexList {
  public internalValue? : DmsDataProviderSettingsOracleSettings[] | cdktn.IResolvable

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
  public get(index: number): DmsDataProviderSettingsOracleSettingsOutputReference {
    return new DmsDataProviderSettingsOracleSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsDataProviderSettingsPostgresqlSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}
  */
  readonly s3AccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}
  */
  readonly s3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}
  */
  readonly sslMode?: string;
}

export function dmsDataProviderSettingsPostgresqlSettingsToTerraform(struct?: DmsDataProviderSettingsPostgresqlSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    port: cdktn.numberToTerraform(struct!.port),
    s3_access_role_arn: cdktn.stringToTerraform(struct!.s3AccessRoleArn),
    s3_path: cdktn.stringToTerraform(struct!.s3Path),
    server_name: cdktn.stringToTerraform(struct!.serverName),
    ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
  }
}


export function dmsDataProviderSettingsPostgresqlSettingsToHclTerraform(struct?: DmsDataProviderSettingsPostgresqlSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.s3AccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_path: {
      value: cdktn.stringToHclTerraform(struct!.s3Path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktn.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktn.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsDataProviderSettingsPostgresqlSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsDataProviderSettingsPostgresqlSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._s3AccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AccessRoleArn = this._s3AccessRoleArn;
    }
    if (this._s3Path !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Path = this._s3Path;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsDataProviderSettingsPostgresqlSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateArn = undefined;
      this._databaseName = undefined;
      this._port = undefined;
      this._s3AccessRoleArn = undefined;
      this._s3Path = undefined;
      this._serverName = undefined;
      this._sslMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateArn = value.certificateArn;
      this._databaseName = value.databaseName;
      this._port = value.port;
      this._s3AccessRoleArn = value.s3AccessRoleArn;
      this._s3Path = value.s3Path;
      this._serverName = value.serverName;
      this._sslMode = value.sslMode;
    }
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // s3_access_role_arn - computed: false, optional: true, required: false
  private _s3AccessRoleArn?: string; 
  public get s3AccessRoleArn() {
    return this.getStringAttribute('s3_access_role_arn');
  }
  public set s3AccessRoleArn(value: string) {
    this._s3AccessRoleArn = value;
  }
  public resetS3AccessRoleArn() {
    this._s3AccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessRoleArnInput() {
    return this._s3AccessRoleArn;
  }

  // s3_path - computed: false, optional: true, required: false
  private _s3Path?: string; 
  public get s3Path() {
    return this.getStringAttribute('s3_path');
  }
  public set s3Path(value: string) {
    this._s3Path = value;
  }
  public resetS3Path() {
    this._s3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PathInput() {
    return this._s3Path;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}

export class DmsDataProviderSettingsPostgresqlSettingsList extends cdktn.ComplexList {
  public internalValue? : DmsDataProviderSettingsPostgresqlSettings[] | cdktn.IResolvable

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
  public get(index: number): DmsDataProviderSettingsPostgresqlSettingsOutputReference {
    return new DmsDataProviderSettingsPostgresqlSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsDataProviderSettingsRedshiftSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_access_role_arn DmsDataProvider#s3_access_role_arn}
  */
  readonly s3AccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#s3_path DmsDataProvider#s3_path}
  */
  readonly s3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}
  */
  readonly serverName?: string;
}

export function dmsDataProviderSettingsRedshiftSettingsToTerraform(struct?: DmsDataProviderSettingsRedshiftSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    port: cdktn.numberToTerraform(struct!.port),
    s3_access_role_arn: cdktn.stringToTerraform(struct!.s3AccessRoleArn),
    s3_path: cdktn.stringToTerraform(struct!.s3Path),
    server_name: cdktn.stringToTerraform(struct!.serverName),
  }
}


export function dmsDataProviderSettingsRedshiftSettingsToHclTerraform(struct?: DmsDataProviderSettingsRedshiftSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    s3_access_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.s3AccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_path: {
      value: cdktn.stringToHclTerraform(struct!.s3Path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktn.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsDataProviderSettingsRedshiftSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsDataProviderSettingsRedshiftSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._s3AccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AccessRoleArn = this._s3AccessRoleArn;
    }
    if (this._s3Path !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Path = this._s3Path;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsDataProviderSettingsRedshiftSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._port = undefined;
      this._s3AccessRoleArn = undefined;
      this._s3Path = undefined;
      this._serverName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._port = value.port;
      this._s3AccessRoleArn = value.s3AccessRoleArn;
      this._s3Path = value.s3Path;
      this._serverName = value.serverName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // s3_access_role_arn - computed: false, optional: true, required: false
  private _s3AccessRoleArn?: string; 
  public get s3AccessRoleArn() {
    return this.getStringAttribute('s3_access_role_arn');
  }
  public set s3AccessRoleArn(value: string) {
    this._s3AccessRoleArn = value;
  }
  public resetS3AccessRoleArn() {
    this._s3AccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessRoleArnInput() {
    return this._s3AccessRoleArn;
  }

  // s3_path - computed: false, optional: true, required: false
  private _s3Path?: string; 
  public get s3Path() {
    return this.getStringAttribute('s3_path');
  }
  public set s3Path(value: string) {
    this._s3Path = value;
  }
  public resetS3Path() {
    this._s3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PathInput() {
    return this._s3Path;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}

export class DmsDataProviderSettingsRedshiftSettingsList extends cdktn.ComplexList {
  public internalValue? : DmsDataProviderSettingsRedshiftSettings[] | cdktn.IResolvable

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
  public get(index: number): DmsDataProviderSettingsRedshiftSettingsOutputReference {
    return new DmsDataProviderSettingsRedshiftSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsDataProviderSettingsSybaseAseSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}
  */
  readonly encryptPassword?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#port DmsDataProvider#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}
  */
  readonly sslMode?: string;
}

export function dmsDataProviderSettingsSybaseAseSettingsToTerraform(struct?: DmsDataProviderSettingsSybaseAseSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    encrypt_password: cdktn.booleanToTerraform(struct!.encryptPassword),
    port: cdktn.numberToTerraform(struct!.port),
    server_name: cdktn.stringToTerraform(struct!.serverName),
    ssl_mode: cdktn.stringToTerraform(struct!.sslMode),
  }
}


export function dmsDataProviderSettingsSybaseAseSettingsToHclTerraform(struct?: DmsDataProviderSettingsSybaseAseSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt_password: {
      value: cdktn.booleanToHclTerraform(struct!.encryptPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_name: {
      value: cdktn.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_mode: {
      value: cdktn.stringToHclTerraform(struct!.sslMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsDataProviderSettingsSybaseAseSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsDataProviderSettingsSybaseAseSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._encryptPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptPassword = this._encryptPassword;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._sslMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsDataProviderSettingsSybaseAseSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateArn = undefined;
      this._databaseName = undefined;
      this._encryptPassword = undefined;
      this._port = undefined;
      this._serverName = undefined;
      this._sslMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateArn = value.certificateArn;
      this._databaseName = value.databaseName;
      this._encryptPassword = value.encryptPassword;
      this._port = value.port;
      this._serverName = value.serverName;
      this._sslMode = value.sslMode;
    }
  }

  // certificate_arn - computed: false, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // encrypt_password - computed: true, optional: true, required: false
  private _encryptPassword?: boolean | cdktn.IResolvable; 
  public get encryptPassword() {
    return this.getBooleanAttribute('encrypt_password');
  }
  public set encryptPassword(value: boolean | cdktn.IResolvable) {
    this._encryptPassword = value;
  }
  public resetEncryptPassword() {
    this._encryptPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptPasswordInput() {
    return this._encryptPassword;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // ssl_mode - computed: true, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
  }
}

export class DmsDataProviderSettingsSybaseAseSettingsList extends cdktn.ComplexList {
  public internalValue? : DmsDataProviderSettingsSybaseAseSettings[] | cdktn.IResolvable

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
  public get(index: number): DmsDataProviderSettingsSybaseAseSettingsOutputReference {
    return new DmsDataProviderSettingsSybaseAseSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsDataProviderSettings {
  /**
  * doc_db_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#doc_db_settings DmsDataProvider#doc_db_settings}
  */
  readonly docDbSettings?: DmsDataProviderSettingsDocDbSettings[] | cdktn.IResolvable;
  /**
  * ibm_db2_luw_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ibm_db2_luw_settings DmsDataProvider#ibm_db2_luw_settings}
  */
  readonly ibmDb2LuwSettings?: DmsDataProviderSettingsIbmDb2LuwSettings[] | cdktn.IResolvable;
  /**
  * ibm_db2_zos_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#ibm_db2_zos_settings DmsDataProvider#ibm_db2_zos_settings}
  */
  readonly ibmDb2ZosSettings?: DmsDataProviderSettingsIbmDb2ZosSettings[] | cdktn.IResolvable;
  /**
  * maria_db_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#maria_db_settings DmsDataProvider#maria_db_settings}
  */
  readonly mariaDbSettings?: DmsDataProviderSettingsMariaDbSettings[] | cdktn.IResolvable;
  /**
  * microsoft_sql_server_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#microsoft_sql_server_settings DmsDataProvider#microsoft_sql_server_settings}
  */
  readonly microsoftSqlServerSettings?: DmsDataProviderSettingsMicrosoftSqlServerSettings[] | cdktn.IResolvable;
  /**
  * mongo_db_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#mongo_db_settings DmsDataProvider#mongo_db_settings}
  */
  readonly mongoDbSettings?: DmsDataProviderSettingsMongoDbSettings[] | cdktn.IResolvable;
  /**
  * mysql_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#mysql_settings DmsDataProvider#mysql_settings}
  */
  readonly mysqlSettings?: DmsDataProviderSettingsMysqlSettings[] | cdktn.IResolvable;
  /**
  * oracle_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#oracle_settings DmsDataProvider#oracle_settings}
  */
  readonly oracleSettings?: DmsDataProviderSettingsOracleSettings[] | cdktn.IResolvable;
  /**
  * postgresql_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#postgresql_settings DmsDataProvider#postgresql_settings}
  */
  readonly postgresqlSettings?: DmsDataProviderSettingsPostgresqlSettings[] | cdktn.IResolvable;
  /**
  * redshift_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#redshift_settings DmsDataProvider#redshift_settings}
  */
  readonly redshiftSettings?: DmsDataProviderSettingsRedshiftSettings[] | cdktn.IResolvable;
  /**
  * sybase_ase_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#sybase_ase_settings DmsDataProvider#sybase_ase_settings}
  */
  readonly sybaseAseSettings?: DmsDataProviderSettingsSybaseAseSettings[] | cdktn.IResolvable;
}

export function dmsDataProviderSettingsToTerraform(struct?: DmsDataProviderSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    doc_db_settings: cdktn.listMapper(dmsDataProviderSettingsDocDbSettingsToTerraform, true)(struct!.docDbSettings),
    ibm_db2_luw_settings: cdktn.listMapper(dmsDataProviderSettingsIbmDb2LuwSettingsToTerraform, true)(struct!.ibmDb2LuwSettings),
    ibm_db2_zos_settings: cdktn.listMapper(dmsDataProviderSettingsIbmDb2ZosSettingsToTerraform, true)(struct!.ibmDb2ZosSettings),
    maria_db_settings: cdktn.listMapper(dmsDataProviderSettingsMariaDbSettingsToTerraform, true)(struct!.mariaDbSettings),
    microsoft_sql_server_settings: cdktn.listMapper(dmsDataProviderSettingsMicrosoftSqlServerSettingsToTerraform, true)(struct!.microsoftSqlServerSettings),
    mongo_db_settings: cdktn.listMapper(dmsDataProviderSettingsMongoDbSettingsToTerraform, true)(struct!.mongoDbSettings),
    mysql_settings: cdktn.listMapper(dmsDataProviderSettingsMysqlSettingsToTerraform, true)(struct!.mysqlSettings),
    oracle_settings: cdktn.listMapper(dmsDataProviderSettingsOracleSettingsToTerraform, true)(struct!.oracleSettings),
    postgresql_settings: cdktn.listMapper(dmsDataProviderSettingsPostgresqlSettingsToTerraform, true)(struct!.postgresqlSettings),
    redshift_settings: cdktn.listMapper(dmsDataProviderSettingsRedshiftSettingsToTerraform, true)(struct!.redshiftSettings),
    sybase_ase_settings: cdktn.listMapper(dmsDataProviderSettingsSybaseAseSettingsToTerraform, true)(struct!.sybaseAseSettings),
  }
}


export function dmsDataProviderSettingsToHclTerraform(struct?: DmsDataProviderSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    doc_db_settings: {
      value: cdktn.listMapperHcl(dmsDataProviderSettingsDocDbSettingsToHclTerraform, true)(struct!.docDbSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DmsDataProviderSettingsDocDbSettingsList",
    },
    ibm_db2_luw_settings: {
      value: cdktn.listMapperHcl(dmsDataProviderSettingsIbmDb2LuwSettingsToHclTerraform, true)(struct!.ibmDb2LuwSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DmsDataProviderSettingsIbmDb2LuwSettingsList",
    },
    ibm_db2_zos_settings: {
      value: cdktn.listMapperHcl(dmsDataProviderSettingsIbmDb2ZosSettingsToHclTerraform, true)(struct!.ibmDb2ZosSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DmsDataProviderSettingsIbmDb2ZosSettingsList",
    },
    maria_db_settings: {
      value: cdktn.listMapperHcl(dmsDataProviderSettingsMariaDbSettingsToHclTerraform, true)(struct!.mariaDbSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DmsDataProviderSettingsMariaDbSettingsList",
    },
    microsoft_sql_server_settings: {
      value: cdktn.listMapperHcl(dmsDataProviderSettingsMicrosoftSqlServerSettingsToHclTerraform, true)(struct!.microsoftSqlServerSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DmsDataProviderSettingsMicrosoftSqlServerSettingsList",
    },
    mongo_db_settings: {
      value: cdktn.listMapperHcl(dmsDataProviderSettingsMongoDbSettingsToHclTerraform, true)(struct!.mongoDbSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DmsDataProviderSettingsMongoDbSettingsList",
    },
    mysql_settings: {
      value: cdktn.listMapperHcl(dmsDataProviderSettingsMysqlSettingsToHclTerraform, true)(struct!.mysqlSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DmsDataProviderSettingsMysqlSettingsList",
    },
    oracle_settings: {
      value: cdktn.listMapperHcl(dmsDataProviderSettingsOracleSettingsToHclTerraform, true)(struct!.oracleSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DmsDataProviderSettingsOracleSettingsList",
    },
    postgresql_settings: {
      value: cdktn.listMapperHcl(dmsDataProviderSettingsPostgresqlSettingsToHclTerraform, true)(struct!.postgresqlSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DmsDataProviderSettingsPostgresqlSettingsList",
    },
    redshift_settings: {
      value: cdktn.listMapperHcl(dmsDataProviderSettingsRedshiftSettingsToHclTerraform, true)(struct!.redshiftSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DmsDataProviderSettingsRedshiftSettingsList",
    },
    sybase_ase_settings: {
      value: cdktn.listMapperHcl(dmsDataProviderSettingsSybaseAseSettingsToHclTerraform, true)(struct!.sybaseAseSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DmsDataProviderSettingsSybaseAseSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsDataProviderSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsDataProviderSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._docDbSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.docDbSettings = this._docDbSettings?.internalValue;
    }
    if (this._ibmDb2LuwSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibmDb2LuwSettings = this._ibmDb2LuwSettings?.internalValue;
    }
    if (this._ibmDb2ZosSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibmDb2ZosSettings = this._ibmDb2ZosSettings?.internalValue;
    }
    if (this._mariaDbSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mariaDbSettings = this._mariaDbSettings?.internalValue;
    }
    if (this._microsoftSqlServerSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftSqlServerSettings = this._microsoftSqlServerSettings?.internalValue;
    }
    if (this._mongoDbSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongoDbSettings = this._mongoDbSettings?.internalValue;
    }
    if (this._mysqlSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlSettings = this._mysqlSettings?.internalValue;
    }
    if (this._oracleSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleSettings = this._oracleSettings?.internalValue;
    }
    if (this._postgresqlSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresqlSettings = this._postgresqlSettings?.internalValue;
    }
    if (this._redshiftSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshiftSettings = this._redshiftSettings?.internalValue;
    }
    if (this._sybaseAseSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sybaseAseSettings = this._sybaseAseSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsDataProviderSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._docDbSettings.internalValue = undefined;
      this._ibmDb2LuwSettings.internalValue = undefined;
      this._ibmDb2ZosSettings.internalValue = undefined;
      this._mariaDbSettings.internalValue = undefined;
      this._microsoftSqlServerSettings.internalValue = undefined;
      this._mongoDbSettings.internalValue = undefined;
      this._mysqlSettings.internalValue = undefined;
      this._oracleSettings.internalValue = undefined;
      this._postgresqlSettings.internalValue = undefined;
      this._redshiftSettings.internalValue = undefined;
      this._sybaseAseSettings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._docDbSettings.internalValue = value.docDbSettings;
      this._ibmDb2LuwSettings.internalValue = value.ibmDb2LuwSettings;
      this._ibmDb2ZosSettings.internalValue = value.ibmDb2ZosSettings;
      this._mariaDbSettings.internalValue = value.mariaDbSettings;
      this._microsoftSqlServerSettings.internalValue = value.microsoftSqlServerSettings;
      this._mongoDbSettings.internalValue = value.mongoDbSettings;
      this._mysqlSettings.internalValue = value.mysqlSettings;
      this._oracleSettings.internalValue = value.oracleSettings;
      this._postgresqlSettings.internalValue = value.postgresqlSettings;
      this._redshiftSettings.internalValue = value.redshiftSettings;
      this._sybaseAseSettings.internalValue = value.sybaseAseSettings;
    }
  }

  // doc_db_settings - computed: false, optional: true, required: false
  private _docDbSettings = new DmsDataProviderSettingsDocDbSettingsList(this, "doc_db_settings", false);
  public get docDbSettings() {
    return this._docDbSettings;
  }
  public putDocDbSettings(value: DmsDataProviderSettingsDocDbSettings[] | cdktn.IResolvable) {
    this._docDbSettings.internalValue = value;
  }
  public resetDocDbSettings() {
    this._docDbSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docDbSettingsInput() {
    return this._docDbSettings.internalValue;
  }

  // ibm_db2_luw_settings - computed: false, optional: true, required: false
  private _ibmDb2LuwSettings = new DmsDataProviderSettingsIbmDb2LuwSettingsList(this, "ibm_db2_luw_settings", false);
  public get ibmDb2LuwSettings() {
    return this._ibmDb2LuwSettings;
  }
  public putIbmDb2LuwSettings(value: DmsDataProviderSettingsIbmDb2LuwSettings[] | cdktn.IResolvable) {
    this._ibmDb2LuwSettings.internalValue = value;
  }
  public resetIbmDb2LuwSettings() {
    this._ibmDb2LuwSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmDb2LuwSettingsInput() {
    return this._ibmDb2LuwSettings.internalValue;
  }

  // ibm_db2_zos_settings - computed: false, optional: true, required: false
  private _ibmDb2ZosSettings = new DmsDataProviderSettingsIbmDb2ZosSettingsList(this, "ibm_db2_zos_settings", false);
  public get ibmDb2ZosSettings() {
    return this._ibmDb2ZosSettings;
  }
  public putIbmDb2ZosSettings(value: DmsDataProviderSettingsIbmDb2ZosSettings[] | cdktn.IResolvable) {
    this._ibmDb2ZosSettings.internalValue = value;
  }
  public resetIbmDb2ZosSettings() {
    this._ibmDb2ZosSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmDb2ZosSettingsInput() {
    return this._ibmDb2ZosSettings.internalValue;
  }

  // maria_db_settings - computed: false, optional: true, required: false
  private _mariaDbSettings = new DmsDataProviderSettingsMariaDbSettingsList(this, "maria_db_settings", false);
  public get mariaDbSettings() {
    return this._mariaDbSettings;
  }
  public putMariaDbSettings(value: DmsDataProviderSettingsMariaDbSettings[] | cdktn.IResolvable) {
    this._mariaDbSettings.internalValue = value;
  }
  public resetMariaDbSettings() {
    this._mariaDbSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariaDbSettingsInput() {
    return this._mariaDbSettings.internalValue;
  }

  // microsoft_sql_server_settings - computed: false, optional: true, required: false
  private _microsoftSqlServerSettings = new DmsDataProviderSettingsMicrosoftSqlServerSettingsList(this, "microsoft_sql_server_settings", false);
  public get microsoftSqlServerSettings() {
    return this._microsoftSqlServerSettings;
  }
  public putMicrosoftSqlServerSettings(value: DmsDataProviderSettingsMicrosoftSqlServerSettings[] | cdktn.IResolvable) {
    this._microsoftSqlServerSettings.internalValue = value;
  }
  public resetMicrosoftSqlServerSettings() {
    this._microsoftSqlServerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftSqlServerSettingsInput() {
    return this._microsoftSqlServerSettings.internalValue;
  }

  // mongo_db_settings - computed: false, optional: true, required: false
  private _mongoDbSettings = new DmsDataProviderSettingsMongoDbSettingsList(this, "mongo_db_settings", false);
  public get mongoDbSettings() {
    return this._mongoDbSettings;
  }
  public putMongoDbSettings(value: DmsDataProviderSettingsMongoDbSettings[] | cdktn.IResolvable) {
    this._mongoDbSettings.internalValue = value;
  }
  public resetMongoDbSettings() {
    this._mongoDbSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoDbSettingsInput() {
    return this._mongoDbSettings.internalValue;
  }

  // mysql_settings - computed: false, optional: true, required: false
  private _mysqlSettings = new DmsDataProviderSettingsMysqlSettingsList(this, "mysql_settings", false);
  public get mysqlSettings() {
    return this._mysqlSettings;
  }
  public putMysqlSettings(value: DmsDataProviderSettingsMysqlSettings[] | cdktn.IResolvable) {
    this._mysqlSettings.internalValue = value;
  }
  public resetMysqlSettings() {
    this._mysqlSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSettingsInput() {
    return this._mysqlSettings.internalValue;
  }

  // oracle_settings - computed: false, optional: true, required: false
  private _oracleSettings = new DmsDataProviderSettingsOracleSettingsList(this, "oracle_settings", false);
  public get oracleSettings() {
    return this._oracleSettings;
  }
  public putOracleSettings(value: DmsDataProviderSettingsOracleSettings[] | cdktn.IResolvable) {
    this._oracleSettings.internalValue = value;
  }
  public resetOracleSettings() {
    this._oracleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleSettingsInput() {
    return this._oracleSettings.internalValue;
  }

  // postgresql_settings - computed: false, optional: true, required: false
  private _postgresqlSettings = new DmsDataProviderSettingsPostgresqlSettingsList(this, "postgresql_settings", false);
  public get postgresqlSettings() {
    return this._postgresqlSettings;
  }
  public putPostgresqlSettings(value: DmsDataProviderSettingsPostgresqlSettings[] | cdktn.IResolvable) {
    this._postgresqlSettings.internalValue = value;
  }
  public resetPostgresqlSettings() {
    this._postgresqlSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlSettingsInput() {
    return this._postgresqlSettings.internalValue;
  }

  // redshift_settings - computed: false, optional: true, required: false
  private _redshiftSettings = new DmsDataProviderSettingsRedshiftSettingsList(this, "redshift_settings", false);
  public get redshiftSettings() {
    return this._redshiftSettings;
  }
  public putRedshiftSettings(value: DmsDataProviderSettingsRedshiftSettings[] | cdktn.IResolvable) {
    this._redshiftSettings.internalValue = value;
  }
  public resetRedshiftSettings() {
    this._redshiftSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftSettingsInput() {
    return this._redshiftSettings.internalValue;
  }

  // sybase_ase_settings - computed: false, optional: true, required: false
  private _sybaseAseSettings = new DmsDataProviderSettingsSybaseAseSettingsList(this, "sybase_ase_settings", false);
  public get sybaseAseSettings() {
    return this._sybaseAseSettings;
  }
  public putSybaseAseSettings(value: DmsDataProviderSettingsSybaseAseSettings[] | cdktn.IResolvable) {
    this._sybaseAseSettings.internalValue = value;
  }
  public resetSybaseAseSettings() {
    this._sybaseAseSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sybaseAseSettingsInput() {
    return this._sybaseAseSettings.internalValue;
  }
}

export class DmsDataProviderSettingsList extends cdktn.ComplexList {
  public internalValue? : DmsDataProviderSettings[] | cdktn.IResolvable

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
  public get(index: number): DmsDataProviderSettingsOutputReference {
    return new DmsDataProviderSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider aws_dms_data_provider}
*/
export class DmsDataProvider extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dms_data_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsDataProvider to import
  * @param importFromId The id of the existing DmsDataProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsDataProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "aws_dms_data_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/resources/dms_data_provider aws_dms_data_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsDataProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DmsDataProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dms_data_provider',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.64.0',
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
    this._description = config.description;
    this._engine = config.engine;
    this._name = config.name;
    this._region = config.region;
    this._tags = config.tags;
    this._virtual = config.virtual;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktn.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // virtual - computed: true, optional: true, required: false
  private _virtual?: boolean | cdktn.IResolvable; 
  public get virtual() {
    return this.getBooleanAttribute('virtual');
  }
  public set virtual(value: boolean | cdktn.IResolvable) {
    this._virtual = value;
  }
  public resetVirtual() {
    this._virtual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualInput() {
    return this._virtual;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DmsDataProviderSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DmsDataProviderSettings[] | cdktn.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      engine: cdktn.stringToTerraform(this._engine),
      name: cdktn.stringToTerraform(this._name),
      region: cdktn.stringToTerraform(this._region),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      virtual: cdktn.booleanToTerraform(this._virtual),
      settings: cdktn.listMapper(dmsDataProviderSettingsToTerraform, true)(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine: {
        value: cdktn.stringToHclTerraform(this._engine),
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
      virtual: {
        value: cdktn.booleanToHclTerraform(this._virtual),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      settings: {
        value: cdktn.listMapperHcl(dmsDataProviderSettingsToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsDataProviderSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
