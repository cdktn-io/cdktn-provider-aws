# `odbAutonomousDatabase` Submodule <a name="`odbAutonomousDatabase` Submodule" id="@cdktn/provider-aws.odbAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbAutonomousDatabase <a name="OdbAutonomousDatabase" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database aws_odb_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabase(scope: Construct, id: string, config?: OdbAutonomousDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig">OdbAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig">OdbAutonomousDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putAdminPasswordSource">putAdminPasswordSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putCustomerContactsToSendToOci">putCustomerContactsToSendToOci</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putDbToolsDetails">putDbToolsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putLongTermBackupSchedule">putLongTermBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putResourcePoolSummary">putResourcePoolSummary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putScheduledOperations">putScheduledOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putSourceConfiguration">putSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTransportableTablespace">putTransportableTablespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordSource">resetAdminPasswordSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWo">resetAdminPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWoVersion">resetAdminPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAllowlistedIps">resetAllowlistedIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutonomousMaintenanceScheduleType">resetAutonomousMaintenanceScheduleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshFrequencyInSeconds">resetAutoRefreshFrequencyInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshPointLagInSeconds">resetAutoRefreshPointLagInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetBackupRetentionPeriodInDays">resetBackupRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetByolComputeCountLimit">resetByolComputeCountLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCharacterSet">resetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCustomerContactsToSendToOci">resetCustomerContactsToSendToOci</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDatabaseEdition">resetDatabaseEdition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInGbs">resetDataStorageSizeInGbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInTbs">resetDataStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbToolsDetails">resetDbToolsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbVersion">resetDbVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbWorkload">resetDbWorkload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetEncryptionKeyProvider">resetEncryptionKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingEnabled">resetIsAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingForStorageEnabled">resetIsAutoScalingForStorageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsBackupRetentionLocked">resetIsBackupRetentionLocked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsLocalDataGuardEnabled">resetIsLocalDataGuardEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsMtlsConnectionRequired">resetIsMtlsConnectionRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsRefreshableClone">resetIsRefreshableClone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit">resetLocalAdgAutoFailoverMaxDataLossLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLongTermBackupSchedule">resetLongTermBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetNcharacterSet">resetNcharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOdbNetworkId">resetOdbNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOpenMode">resetOpenMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPermissionLevel">resetPermissionLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointIp">resetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointLabel">resetPrivateEndpointLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRefreshableMode">resetRefreshableMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolLeaderId">resetResourcePoolLeaderId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolSummary">resetResourcePoolSummary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetScheduledOperations">resetScheduledOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSourceConfiguration">resetSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIps">resetStandbyAllowlistedIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIpsSource">resetStandbyAllowlistedIpsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeOfAutoRefreshStart">resetTimeOfAutoRefreshStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTransportableTablespace">resetTransportableTablespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdminPasswordSource` <a name="putAdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putAdminPasswordSource"></a>

```typescript
public putAdminPasswordSource(value: IResolvable | OdbAutonomousDatabaseAdminPasswordSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putAdminPasswordSource.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>[]

---

##### `putCustomerContactsToSendToOci` <a name="putCustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putCustomerContactsToSendToOci"></a>

```typescript
public putCustomerContactsToSendToOci(value: IResolvable | OdbAutonomousDatabaseCustomerContactsToSendToOci[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putCustomerContactsToSendToOci.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>[]

---

##### `putDbToolsDetails` <a name="putDbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putDbToolsDetails"></a>

```typescript
public putDbToolsDetails(value: IResolvable | OdbAutonomousDatabaseDbToolsDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putDbToolsDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>[]

---

##### `putLongTermBackupSchedule` <a name="putLongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putLongTermBackupSchedule"></a>

```typescript
public putLongTermBackupSchedule(value: IResolvable | OdbAutonomousDatabaseLongTermBackupSchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putLongTermBackupSchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>[]

---

##### `putResourcePoolSummary` <a name="putResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putResourcePoolSummary"></a>

```typescript
public putResourcePoolSummary(value: IResolvable | OdbAutonomousDatabaseResourcePoolSummary[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putResourcePoolSummary.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>[]

---

##### `putScheduledOperations` <a name="putScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putScheduledOperations"></a>

```typescript
public putScheduledOperations(value: IResolvable | OdbAutonomousDatabaseScheduledOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putScheduledOperations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>[]

---

##### `putSourceConfiguration` <a name="putSourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putSourceConfiguration"></a>

```typescript
public putSourceConfiguration(value: IResolvable | OdbAutonomousDatabaseSourceConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putSourceConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: OdbAutonomousDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

---

##### `putTransportableTablespace` <a name="putTransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTransportableTablespace"></a>

```typescript
public putTransportableTablespace(value: IResolvable | OdbAutonomousDatabaseTransportableTablespace[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTransportableTablespace.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>[]

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPassword"></a>

```typescript
public resetAdminPassword(): void
```

##### `resetAdminPasswordSource` <a name="resetAdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordSource"></a>

```typescript
public resetAdminPasswordSource(): void
```

##### `resetAdminPasswordWo` <a name="resetAdminPasswordWo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWo"></a>

```typescript
public resetAdminPasswordWo(): void
```

##### `resetAdminPasswordWoVersion` <a name="resetAdminPasswordWoVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWoVersion"></a>

```typescript
public resetAdminPasswordWoVersion(): void
```

##### `resetAllowlistedIps` <a name="resetAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAllowlistedIps"></a>

```typescript
public resetAllowlistedIps(): void
```

##### `resetAutonomousMaintenanceScheduleType` <a name="resetAutonomousMaintenanceScheduleType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutonomousMaintenanceScheduleType"></a>

```typescript
public resetAutonomousMaintenanceScheduleType(): void
```

##### `resetAutoRefreshFrequencyInSeconds` <a name="resetAutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshFrequencyInSeconds"></a>

```typescript
public resetAutoRefreshFrequencyInSeconds(): void
```

##### `resetAutoRefreshPointLagInSeconds` <a name="resetAutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshPointLagInSeconds"></a>

```typescript
public resetAutoRefreshPointLagInSeconds(): void
```

##### `resetBackupRetentionPeriodInDays` <a name="resetBackupRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetBackupRetentionPeriodInDays"></a>

```typescript
public resetBackupRetentionPeriodInDays(): void
```

##### `resetByolComputeCountLimit` <a name="resetByolComputeCountLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetByolComputeCountLimit"></a>

```typescript
public resetByolComputeCountLimit(): void
```

##### `resetCharacterSet` <a name="resetCharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCharacterSet"></a>

```typescript
public resetCharacterSet(): void
```

##### `resetComputeCount` <a name="resetComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetComputeCount"></a>

```typescript
public resetComputeCount(): void
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCpuCoreCount"></a>

```typescript
public resetCpuCoreCount(): void
```

##### `resetCustomerContactsToSendToOci` <a name="resetCustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCustomerContactsToSendToOci"></a>

```typescript
public resetCustomerContactsToSendToOci(): void
```

##### `resetDatabaseEdition` <a name="resetDatabaseEdition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDatabaseEdition"></a>

```typescript
public resetDatabaseEdition(): void
```

##### `resetDataStorageSizeInGbs` <a name="resetDataStorageSizeInGbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInGbs"></a>

```typescript
public resetDataStorageSizeInGbs(): void
```

##### `resetDataStorageSizeInTbs` <a name="resetDataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInTbs"></a>

```typescript
public resetDataStorageSizeInTbs(): void
```

##### `resetDbName` <a name="resetDbName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbName"></a>

```typescript
public resetDbName(): void
```

##### `resetDbToolsDetails` <a name="resetDbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbToolsDetails"></a>

```typescript
public resetDbToolsDetails(): void
```

##### `resetDbVersion` <a name="resetDbVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbVersion"></a>

```typescript
public resetDbVersion(): void
```

##### `resetDbWorkload` <a name="resetDbWorkload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbWorkload"></a>

```typescript
public resetDbWorkload(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEncryptionKeyProvider` <a name="resetEncryptionKeyProvider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetEncryptionKeyProvider"></a>

```typescript
public resetEncryptionKeyProvider(): void
```

##### `resetIsAutoScalingEnabled` <a name="resetIsAutoScalingEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingEnabled"></a>

```typescript
public resetIsAutoScalingEnabled(): void
```

##### `resetIsAutoScalingForStorageEnabled` <a name="resetIsAutoScalingForStorageEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingForStorageEnabled"></a>

```typescript
public resetIsAutoScalingForStorageEnabled(): void
```

##### `resetIsBackupRetentionLocked` <a name="resetIsBackupRetentionLocked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsBackupRetentionLocked"></a>

```typescript
public resetIsBackupRetentionLocked(): void
```

##### `resetIsLocalDataGuardEnabled` <a name="resetIsLocalDataGuardEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsLocalDataGuardEnabled"></a>

```typescript
public resetIsLocalDataGuardEnabled(): void
```

##### `resetIsMtlsConnectionRequired` <a name="resetIsMtlsConnectionRequired" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsMtlsConnectionRequired"></a>

```typescript
public resetIsMtlsConnectionRequired(): void
```

##### `resetIsRefreshableClone` <a name="resetIsRefreshableClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsRefreshableClone"></a>

```typescript
public resetIsRefreshableClone(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLicenseModel"></a>

```typescript
public resetLicenseModel(): void
```

##### `resetLocalAdgAutoFailoverMaxDataLossLimit` <a name="resetLocalAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit"></a>

```typescript
public resetLocalAdgAutoFailoverMaxDataLossLimit(): void
```

##### `resetLongTermBackupSchedule` <a name="resetLongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLongTermBackupSchedule"></a>

```typescript
public resetLongTermBackupSchedule(): void
```

##### `resetNcharacterSet` <a name="resetNcharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetNcharacterSet"></a>

```typescript
public resetNcharacterSet(): void
```

##### `resetOdbNetworkId` <a name="resetOdbNetworkId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOdbNetworkId"></a>

```typescript
public resetOdbNetworkId(): void
```

##### `resetOpenMode` <a name="resetOpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOpenMode"></a>

```typescript
public resetOpenMode(): void
```

##### `resetPermissionLevel` <a name="resetPermissionLevel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPermissionLevel"></a>

```typescript
public resetPermissionLevel(): void
```

##### `resetPrivateEndpointIp` <a name="resetPrivateEndpointIp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointIp"></a>

```typescript
public resetPrivateEndpointIp(): void
```

##### `resetPrivateEndpointLabel` <a name="resetPrivateEndpointLabel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointLabel"></a>

```typescript
public resetPrivateEndpointLabel(): void
```

##### `resetRefreshableMode` <a name="resetRefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRefreshableMode"></a>

```typescript
public resetRefreshableMode(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResourcePoolLeaderId` <a name="resetResourcePoolLeaderId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolLeaderId"></a>

```typescript
public resetResourcePoolLeaderId(): void
```

##### `resetResourcePoolSummary` <a name="resetResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolSummary"></a>

```typescript
public resetResourcePoolSummary(): void
```

##### `resetScheduledOperations` <a name="resetScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetScheduledOperations"></a>

```typescript
public resetScheduledOperations(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSourceConfiguration` <a name="resetSourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSourceConfiguration"></a>

```typescript
public resetSourceConfiguration(): void
```

##### `resetStandbyAllowlistedIps` <a name="resetStandbyAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIps"></a>

```typescript
public resetStandbyAllowlistedIps(): void
```

##### `resetStandbyAllowlistedIpsSource` <a name="resetStandbyAllowlistedIpsSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIpsSource"></a>

```typescript
public resetStandbyAllowlistedIpsSource(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeOfAutoRefreshStart` <a name="resetTimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeOfAutoRefreshStart"></a>

```typescript
public resetTimeOfAutoRefreshStart(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransportableTablespace` <a name="resetTransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTransportableTablespace"></a>

```typescript
public resetTransportableTablespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OdbAutonomousDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isConstruct"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

odbAutonomousDatabase.OdbAutonomousDatabase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OdbAutonomousDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OdbAutonomousDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OdbAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OdbAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">actualUsedDataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSource">adminPasswordSource</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList">OdbAutonomousDatabaseAdminPasswordSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allocatedStorageSizeInTbs">allocatedStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availableUpgradeVersions">availableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOci">customerContactsToSendToOci</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList">OdbAutonomousDatabaseCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetails">dbToolsDetails</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList">OdbAutonomousDatabaseDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupSchedule">longTermBackupSchedule</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList">OdbAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkArn">odbNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.percentProgress">percentProgress</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpoint">privateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummary">resourcePoolSummary</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList">OdbAutonomousDatabaseResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperations">scheduledOperations</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList">OdbAutonomousDatabaseScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.serviceConsoleUrl">serviceConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList">OdbAutonomousDatabaseSourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sqlWebDeveloperUrl">sqlWebDeveloperUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference">OdbAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespace">transportableTablespace</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList">OdbAutonomousDatabaseTransportableTablespaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSourceInput">adminPasswordSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoInput">adminPasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersionInput">adminPasswordWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIpsInput">allowlistedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput">autonomousMaintenanceScheduleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput">autoRefreshFrequencyInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSecondsInput">autoRefreshPointLagInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDaysInput">backupRetentionPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimitInput">byolComputeCountLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSetInput">characterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCountInput">computeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOciInput">customerContactsToSendToOciInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEditionInput">databaseEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbsInput">dataStorageSizeInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbsInput">dataStorageSizeInTbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetailsInput">dbToolsDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersionInput">dbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkloadInput">dbWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProviderInput">encryptionKeyProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabledInput">isAutoScalingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabledInput">isAutoScalingForStorageEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLockedInput">isBackupRetentionLockedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabledInput">isLocalDataGuardEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequiredInput">isMtlsConnectionRequiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableCloneInput">isRefreshableCloneInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput">localAdgAutoFailoverMaxDataLossLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupScheduleInput">longTermBackupScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSetInput">ncharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkIdInput">odbNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openModeInput">openModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevelInput">permissionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIpInput">privateEndpointIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabelInput">privateEndpointLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableModeInput">refreshableModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderIdInput">resourcePoolLeaderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummaryInput">resourcePoolSummaryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperationsInput">scheduledOperationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfigurationInput">sourceConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsInput">standbyAllowlistedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSourceInput">standbyAllowlistedIpsSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStartInput">timeOfAutoRefreshStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespaceInput">transportableTablespaceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWo">adminPasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersion">adminPasswordWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIps">allowlistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleType">autonomousMaintenanceScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimit">byolComputeCountLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEdition">databaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkload">dbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProvider">encryptionKeyProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabled">isAutoScalingForStorageEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLocked">isBackupRetentionLocked</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequired">isMtlsConnectionRequired</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableClone">isRefreshableClone</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSet">ncharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevel">permissionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableMode">refreshableMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderId">resourcePoolLeaderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIps">standbyAllowlistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSource">standbyAllowlistedIpsSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actualUsedDataStorageSizeInTbs`<sup>Required</sup> <a name="actualUsedDataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```typescript
public readonly actualUsedDataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `adminPasswordSource`<sup>Required</sup> <a name="adminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSource"></a>

```typescript
public readonly adminPasswordSource: OdbAutonomousDatabaseAdminPasswordSourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList">OdbAutonomousDatabaseAdminPasswordSourceList</a>

---

##### `allocatedStorageSizeInTbs`<sup>Required</sup> <a name="allocatedStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```typescript
public readonly allocatedStorageSizeInTbs: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `availableUpgradeVersions`<sup>Required</sup> <a name="availableUpgradeVersions" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availableUpgradeVersions"></a>

```typescript
public readonly availableUpgradeVersions: string[];
```

- *Type:* string[]

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `customerContactsToSendToOci`<sup>Required</sup> <a name="customerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOci"></a>

```typescript
public readonly customerContactsToSendToOci: OdbAutonomousDatabaseCustomerContactsToSendToOciList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList">OdbAutonomousDatabaseCustomerContactsToSendToOciList</a>

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `dbToolsDetails`<sup>Required</sup> <a name="dbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetails"></a>

```typescript
public readonly dbToolsDetails: OdbAutonomousDatabaseDbToolsDetailsList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList">OdbAutonomousDatabaseDbToolsDetailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `longTermBackupSchedule`<sup>Required</sup> <a name="longTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupSchedule"></a>

```typescript
public readonly longTermBackupSchedule: OdbAutonomousDatabaseLongTermBackupScheduleList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList">OdbAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociResourceAnchorName"></a>

```typescript
public readonly ociResourceAnchorName: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `odbNetworkArn`<sup>Required</sup> <a name="odbNetworkArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkArn"></a>

```typescript
public readonly odbNetworkArn: string;
```

- *Type:* string

---

##### `percentProgress`<sup>Required</sup> <a name="percentProgress" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.percentProgress"></a>

```typescript
public readonly percentProgress: number;
```

- *Type:* number

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: string;
```

- *Type:* string

---

##### `resourcePoolSummary`<sup>Required</sup> <a name="resourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummary"></a>

```typescript
public readonly resourcePoolSummary: OdbAutonomousDatabaseResourcePoolSummaryList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList">OdbAutonomousDatabaseResourcePoolSummaryList</a>

---

##### `scheduledOperations`<sup>Required</sup> <a name="scheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperations"></a>

```typescript
public readonly scheduledOperations: OdbAutonomousDatabaseScheduledOperationsList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList">OdbAutonomousDatabaseScheduledOperationsList</a>

---

##### `serviceConsoleUrl`<sup>Required</sup> <a name="serviceConsoleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.serviceConsoleUrl"></a>

```typescript
public readonly serviceConsoleUrl: string;
```

- *Type:* string

---

##### `sourceConfiguration`<sup>Required</sup> <a name="sourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfiguration"></a>

```typescript
public readonly sourceConfiguration: OdbAutonomousDatabaseSourceConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList">OdbAutonomousDatabaseSourceConfigurationList</a>

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `sqlWebDeveloperUrl`<sup>Required</sup> <a name="sqlWebDeveloperUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sqlWebDeveloperUrl"></a>

```typescript
public readonly sqlWebDeveloperUrl: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: OdbAutonomousDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference">OdbAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `transportableTablespace`<sup>Required</sup> <a name="transportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespace"></a>

```typescript
public readonly transportableTablespace: OdbAutonomousDatabaseTransportableTablespaceList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList">OdbAutonomousDatabaseTransportableTablespaceList</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `adminPasswordSourceInput`<sup>Optional</sup> <a name="adminPasswordSourceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSourceInput"></a>

```typescript
public readonly adminPasswordSourceInput: IResolvable | OdbAutonomousDatabaseAdminPasswordSource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>[]

---

##### `adminPasswordWoInput`<sup>Optional</sup> <a name="adminPasswordWoInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoInput"></a>

```typescript
public readonly adminPasswordWoInput: string;
```

- *Type:* string

---

##### `adminPasswordWoVersionInput`<sup>Optional</sup> <a name="adminPasswordWoVersionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersionInput"></a>

```typescript
public readonly adminPasswordWoVersionInput: number;
```

- *Type:* number

---

##### `allowlistedIpsInput`<sup>Optional</sup> <a name="allowlistedIpsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIpsInput"></a>

```typescript
public readonly allowlistedIpsInput: string[];
```

- *Type:* string[]

---

##### `autonomousMaintenanceScheduleTypeInput`<sup>Optional</sup> <a name="autonomousMaintenanceScheduleTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput"></a>

```typescript
public readonly autonomousMaintenanceScheduleTypeInput: string;
```

- *Type:* string

---

##### `autoRefreshFrequencyInSecondsInput`<sup>Optional</sup> <a name="autoRefreshFrequencyInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput"></a>

```typescript
public readonly autoRefreshFrequencyInSecondsInput: number;
```

- *Type:* number

---

##### `autoRefreshPointLagInSecondsInput`<sup>Optional</sup> <a name="autoRefreshPointLagInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSecondsInput"></a>

```typescript
public readonly autoRefreshPointLagInSecondsInput: number;
```

- *Type:* number

---

##### `backupRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="backupRetentionPeriodInDaysInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDaysInput"></a>

```typescript
public readonly backupRetentionPeriodInDaysInput: number;
```

- *Type:* number

---

##### `byolComputeCountLimitInput`<sup>Optional</sup> <a name="byolComputeCountLimitInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimitInput"></a>

```typescript
public readonly byolComputeCountLimitInput: number;
```

- *Type:* number

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSetInput"></a>

```typescript
public readonly characterSetInput: string;
```

- *Type:* string

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCountInput"></a>

```typescript
public readonly computeCountInput: number;
```

- *Type:* number

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCountInput"></a>

```typescript
public readonly cpuCoreCountInput: number;
```

- *Type:* number

---

##### `customerContactsToSendToOciInput`<sup>Optional</sup> <a name="customerContactsToSendToOciInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOciInput"></a>

```typescript
public readonly customerContactsToSendToOciInput: IResolvable | OdbAutonomousDatabaseCustomerContactsToSendToOci[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>[]

---

##### `databaseEditionInput`<sup>Optional</sup> <a name="databaseEditionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEditionInput"></a>

```typescript
public readonly databaseEditionInput: string;
```

- *Type:* string

---

##### `dataStorageSizeInGbsInput`<sup>Optional</sup> <a name="dataStorageSizeInGbsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbsInput"></a>

```typescript
public readonly dataStorageSizeInGbsInput: number;
```

- *Type:* number

---

##### `dataStorageSizeInTbsInput`<sup>Optional</sup> <a name="dataStorageSizeInTbsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbsInput"></a>

```typescript
public readonly dataStorageSizeInTbsInput: number;
```

- *Type:* number

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `dbToolsDetailsInput`<sup>Optional</sup> <a name="dbToolsDetailsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetailsInput"></a>

```typescript
public readonly dbToolsDetailsInput: IResolvable | OdbAutonomousDatabaseDbToolsDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>[]

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersionInput"></a>

```typescript
public readonly dbVersionInput: string;
```

- *Type:* string

---

##### `dbWorkloadInput`<sup>Optional</sup> <a name="dbWorkloadInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkloadInput"></a>

```typescript
public readonly dbWorkloadInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `encryptionKeyProviderInput`<sup>Optional</sup> <a name="encryptionKeyProviderInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProviderInput"></a>

```typescript
public readonly encryptionKeyProviderInput: string;
```

- *Type:* string

---

##### `isAutoScalingEnabledInput`<sup>Optional</sup> <a name="isAutoScalingEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabledInput"></a>

```typescript
public readonly isAutoScalingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isAutoScalingForStorageEnabledInput`<sup>Optional</sup> <a name="isAutoScalingForStorageEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabledInput"></a>

```typescript
public readonly isAutoScalingForStorageEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isBackupRetentionLockedInput`<sup>Optional</sup> <a name="isBackupRetentionLockedInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLockedInput"></a>

```typescript
public readonly isBackupRetentionLockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isLocalDataGuardEnabledInput`<sup>Optional</sup> <a name="isLocalDataGuardEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabledInput"></a>

```typescript
public readonly isLocalDataGuardEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isMtlsConnectionRequiredInput`<sup>Optional</sup> <a name="isMtlsConnectionRequiredInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequiredInput"></a>

```typescript
public readonly isMtlsConnectionRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isRefreshableCloneInput`<sup>Optional</sup> <a name="isRefreshableCloneInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableCloneInput"></a>

```typescript
public readonly isRefreshableCloneInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `localAdgAutoFailoverMaxDataLossLimitInput`<sup>Optional</sup> <a name="localAdgAutoFailoverMaxDataLossLimitInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput"></a>

```typescript
public readonly localAdgAutoFailoverMaxDataLossLimitInput: number;
```

- *Type:* number

---

##### `longTermBackupScheduleInput`<sup>Optional</sup> <a name="longTermBackupScheduleInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupScheduleInput"></a>

```typescript
public readonly longTermBackupScheduleInput: IResolvable | OdbAutonomousDatabaseLongTermBackupSchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>[]

---

##### `ncharacterSetInput`<sup>Optional</sup> <a name="ncharacterSetInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSetInput"></a>

```typescript
public readonly ncharacterSetInput: string;
```

- *Type:* string

---

##### `odbNetworkIdInput`<sup>Optional</sup> <a name="odbNetworkIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkIdInput"></a>

```typescript
public readonly odbNetworkIdInput: string;
```

- *Type:* string

---

##### `openModeInput`<sup>Optional</sup> <a name="openModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openModeInput"></a>

```typescript
public readonly openModeInput: string;
```

- *Type:* string

---

##### `permissionLevelInput`<sup>Optional</sup> <a name="permissionLevelInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevelInput"></a>

```typescript
public readonly permissionLevelInput: string;
```

- *Type:* string

---

##### `privateEndpointIpInput`<sup>Optional</sup> <a name="privateEndpointIpInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIpInput"></a>

```typescript
public readonly privateEndpointIpInput: string;
```

- *Type:* string

---

##### `privateEndpointLabelInput`<sup>Optional</sup> <a name="privateEndpointLabelInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabelInput"></a>

```typescript
public readonly privateEndpointLabelInput: string;
```

- *Type:* string

---

##### `refreshableModeInput`<sup>Optional</sup> <a name="refreshableModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableModeInput"></a>

```typescript
public readonly refreshableModeInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourcePoolLeaderIdInput`<sup>Optional</sup> <a name="resourcePoolLeaderIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderIdInput"></a>

```typescript
public readonly resourcePoolLeaderIdInput: string;
```

- *Type:* string

---

##### `resourcePoolSummaryInput`<sup>Optional</sup> <a name="resourcePoolSummaryInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummaryInput"></a>

```typescript
public readonly resourcePoolSummaryInput: IResolvable | OdbAutonomousDatabaseResourcePoolSummary[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>[]

---

##### `scheduledOperationsInput`<sup>Optional</sup> <a name="scheduledOperationsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperationsInput"></a>

```typescript
public readonly scheduledOperationsInput: IResolvable | OdbAutonomousDatabaseScheduledOperations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>[]

---

##### `sourceConfigurationInput`<sup>Optional</sup> <a name="sourceConfigurationInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfigurationInput"></a>

```typescript
public readonly sourceConfigurationInput: IResolvable | OdbAutonomousDatabaseSourceConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `standbyAllowlistedIpsInput`<sup>Optional</sup> <a name="standbyAllowlistedIpsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsInput"></a>

```typescript
public readonly standbyAllowlistedIpsInput: string[];
```

- *Type:* string[]

---

##### `standbyAllowlistedIpsSourceInput`<sup>Optional</sup> <a name="standbyAllowlistedIpsSourceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSourceInput"></a>

```typescript
public readonly standbyAllowlistedIpsSourceInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeOfAutoRefreshStartInput`<sup>Optional</sup> <a name="timeOfAutoRefreshStartInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStartInput"></a>

```typescript
public readonly timeOfAutoRefreshStartInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OdbAutonomousDatabaseTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

---

##### `transportableTablespaceInput`<sup>Optional</sup> <a name="transportableTablespaceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespaceInput"></a>

```typescript
public readonly transportableTablespaceInput: IResolvable | OdbAutonomousDatabaseTransportableTablespace[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>[]

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### ~~`adminPasswordWo`~~<sup>Required</sup> <a name="adminPasswordWo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly adminPasswordWo: string;
```

- *Type:* string

---

##### `adminPasswordWoVersion`<sup>Required</sup> <a name="adminPasswordWoVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersion"></a>

```typescript
public readonly adminPasswordWoVersion: number;
```

- *Type:* number

---

##### `allowlistedIps`<sup>Required</sup> <a name="allowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIps"></a>

```typescript
public readonly allowlistedIps: string[];
```

- *Type:* string[]

---

##### `autonomousMaintenanceScheduleType`<sup>Required</sup> <a name="autonomousMaintenanceScheduleType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleType"></a>

```typescript
public readonly autonomousMaintenanceScheduleType: string;
```

- *Type:* string

---

##### `autoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="autoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds"></a>

```typescript
public readonly autoRefreshFrequencyInSeconds: number;
```

- *Type:* number

---

##### `autoRefreshPointLagInSeconds`<sup>Required</sup> <a name="autoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSeconds"></a>

```typescript
public readonly autoRefreshPointLagInSeconds: number;
```

- *Type:* number

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```typescript
public readonly backupRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `byolComputeCountLimit`<sup>Required</sup> <a name="byolComputeCountLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimit"></a>

```typescript
public readonly byolComputeCountLimit: number;
```

- *Type:* number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEdition"></a>

```typescript
public readonly databaseEdition: string;
```

- *Type:* string

---

##### `dataStorageSizeInGbs`<sup>Required</sup> <a name="dataStorageSizeInGbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbs"></a>

```typescript
public readonly dataStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```typescript
public readonly dataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkload"></a>

```typescript
public readonly dbWorkload: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `encryptionKeyProvider`<sup>Required</sup> <a name="encryptionKeyProvider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProvider"></a>

```typescript
public readonly encryptionKeyProvider: string;
```

- *Type:* string

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabled"></a>

```typescript
public readonly isAutoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isAutoScalingForStorageEnabled`<sup>Required</sup> <a name="isAutoScalingForStorageEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabled"></a>

```typescript
public readonly isAutoScalingForStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isBackupRetentionLocked`<sup>Required</sup> <a name="isBackupRetentionLocked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLocked"></a>

```typescript
public readonly isBackupRetentionLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isLocalDataGuardEnabled`<sup>Required</sup> <a name="isLocalDataGuardEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabled"></a>

```typescript
public readonly isLocalDataGuardEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isMtlsConnectionRequired`<sup>Required</sup> <a name="isMtlsConnectionRequired" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequired"></a>

```typescript
public readonly isMtlsConnectionRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableClone"></a>

```typescript
public readonly isRefreshableClone: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```typescript
public readonly localAdgAutoFailoverMaxDataLossLimit: number;
```

- *Type:* number

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSet"></a>

```typescript
public readonly ncharacterSet: string;
```

- *Type:* string

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `permissionLevel`<sup>Required</sup> <a name="permissionLevel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevel"></a>

```typescript
public readonly permissionLevel: string;
```

- *Type:* string

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

---

##### `privateEndpointLabel`<sup>Required</sup> <a name="privateEndpointLabel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabel"></a>

```typescript
public readonly privateEndpointLabel: string;
```

- *Type:* string

---

##### `refreshableMode`<sup>Required</sup> <a name="refreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableMode"></a>

```typescript
public readonly refreshableMode: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourcePoolLeaderId`<sup>Required</sup> <a name="resourcePoolLeaderId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderId"></a>

```typescript
public readonly resourcePoolLeaderId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `standbyAllowlistedIps`<sup>Required</sup> <a name="standbyAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIps"></a>

```typescript
public readonly standbyAllowlistedIps: string[];
```

- *Type:* string[]

---

##### `standbyAllowlistedIpsSource`<sup>Required</sup> <a name="standbyAllowlistedIpsSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSource"></a>

```typescript
public readonly standbyAllowlistedIpsSource: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeOfAutoRefreshStart`<sup>Required</sup> <a name="timeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStart"></a>

```typescript
public readonly timeOfAutoRefreshStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbAutonomousDatabaseAdminPasswordSource <a name="OdbAutonomousDatabaseAdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseAdminPasswordSource: odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.property.customerManagedAwsSecret">customerManagedAwsSecret</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>[]</code> | customer_managed_aws_secret block. |

---

##### `customerManagedAwsSecret`<sup>Optional</sup> <a name="customerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.property.customerManagedAwsSecret"></a>

```typescript
public readonly customerManagedAwsSecret: IResolvable | OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>[]

customer_managed_aws_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#customer_managed_aws_secret OdbAutonomousDatabase#customer_managed_aws_secret}

---

### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret: odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.externalIdType">externalIdType</a></code> | <code>string</code> | Type of OCI identifier supplied as the external ID when OCI assumes the IAM role. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | ARN of the customer-managed IAM role OCI assumes to retrieve the secret. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.secretArn">secretArn</a></code> | <code>string</code> | ARN of the AWS Secrets Manager secret that contains the ADMIN password. |

---

##### `externalIdType`<sup>Required</sup> <a name="externalIdType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.externalIdType"></a>

```typescript
public readonly externalIdType: string;
```

- *Type:* string

Type of OCI identifier supplied as the external ID when OCI assumes the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#external_id_type OdbAutonomousDatabase#external_id_type}

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

ARN of the customer-managed IAM role OCI assumes to retrieve the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#iam_role_arn OdbAutonomousDatabase#iam_role_arn}

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

ARN of the AWS Secrets Manager secret that contains the ADMIN password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#secret_arn OdbAutonomousDatabase#secret_arn}

---

### OdbAutonomousDatabaseConfig <a name="OdbAutonomousDatabaseConfig" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseConfig: odbAutonomousDatabase.OdbAutonomousDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPassword">adminPassword</a></code> | <code>string</code> | Password for the ADMIN user. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordSource">adminPasswordSource</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>[]</code> | admin_password_source block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWo">adminPasswordWo</a></code> | <code>string</code> | Password for the ADMIN user. This write-only value is never stored in Terraform state. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWoVersion">adminPasswordWoVersion</a></code> | <code>number</code> | Arbitrary version used to trigger an ADMIN password update. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.allowlistedIps">allowlistedIps</a></code> | <code>string[]</code> | IP addresses allowed to access the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType">autonomousMaintenanceScheduleType</a></code> | <code>string</code> | Maintenance schedule type for the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>number</code> | Frequency at which a refreshable clone is automatically refreshed, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>number</code> | Time lag between a refreshable clone and its source, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>number</code> | Retention period for automatic backups, in days. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.byolComputeCountLimit">byolComputeCountLimit</a></code> | <code>number</code> | Maximum compute capacity under the bring-your-own-license model. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.characterSet">characterSet</a></code> | <code>string</code> | Character set of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.computeCount">computeCount</a></code> | <code>number</code> | Compute capacity in ECPUs or OCPUs. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | Number of CPU cores allocated to the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.customerContactsToSendToOci">customerContactsToSendToOci</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>[]</code> | customer_contacts_to_send_to_oci block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.databaseEdition">databaseEdition</a></code> | <code>string</code> | Oracle Database edition. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInGbs">dataStorageSizeInGbs</a></code> | <code>number</code> | Data volume size in GB. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>number</code> | Data volume size in TB. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbName">dbName</a></code> | <code>string</code> | Name of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbToolsDetails">dbToolsDetails</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>[]</code> | db_tools_details block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbVersion">dbVersion</a></code> | <code>string</code> | Oracle Database software version. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbWorkload">dbWorkload</a></code> | <code>string</code> | Intended database workload. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.displayName">displayName</a></code> | <code>string</code> | User-friendly name for the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.encryptionKeyProvider">encryptionKeyProvider</a></code> | <code>string</code> | Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether automatic compute scaling is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled">isAutoScalingForStorageEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether automatic storage scaling is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isBackupRetentionLocked">isBackupRetentionLocked</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the backup retention period is locked. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether local Oracle Data Guard is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isMtlsConnectionRequired">isMtlsConnectionRequired</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether mutual TLS authentication is required. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isRefreshableClone">isRefreshableClone</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the Autonomous Database is a refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | ARN of the AWS KMS key used to encrypt the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | Oracle license model. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>number</code> | Maximum data-loss limit for automatic local Data Guard failover, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.longTermBackupSchedule">longTermBackupSchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>[]</code> | long_term_backup_schedule block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.ncharacterSet">ncharacterSet</a></code> | <code>string</code> | National character set of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | ID of the associated ODB network. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.openMode">openMode</a></code> | <code>string</code> | Open mode of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.permissionLevel">permissionLevel</a></code> | <code>string</code> | Permission level of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | Private endpoint IP address. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>string</code> | Private endpoint label. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.refreshableMode">refreshableMode</a></code> | <code>string</code> | Refresh mode of a refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolLeaderId">resourcePoolLeaderId</a></code> | <code>string</code> | ID of the resource-pool leader Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolSummary">resourcePoolSummary</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>[]</code> | resource_pool_summary block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.scheduledOperations">scheduledOperations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>[]</code> | scheduled_operations block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.source">source</a></code> | <code>string</code> | Source from which to create the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.sourceConfiguration">sourceConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>[]</code> | source_configuration block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIps">standbyAllowlistedIps</a></code> | <code>string[]</code> | IP addresses allowed to access the standby Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIpsSource">standbyAllowlistedIpsSource</a></code> | <code>string</code> | Source of the standby allowlisted IP addresses. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>string</code> | Date and time when automatic refresh begins. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.transportableTablespace">transportableTablespace</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>[]</code> | transportable_tablespace block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

Password for the ADMIN user.

This value is stored in Terraform state. Use admin_password_wo with Terraform 1.11 or later to avoid storing the password in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#admin_password OdbAutonomousDatabase#admin_password}

---

##### `adminPasswordSource`<sup>Optional</sup> <a name="adminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordSource"></a>

```typescript
public readonly adminPasswordSource: IResolvable | OdbAutonomousDatabaseAdminPasswordSource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>[]

admin_password_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#admin_password_source OdbAutonomousDatabase#admin_password_source}

---

##### `adminPasswordWo`<sup>Optional</sup> <a name="adminPasswordWo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWo"></a>

```typescript
public readonly adminPasswordWo: string;
```

- *Type:* string

Password for the ADMIN user. This write-only value is never stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#admin_password_wo OdbAutonomousDatabase#admin_password_wo}

---

##### `adminPasswordWoVersion`<sup>Optional</sup> <a name="adminPasswordWoVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWoVersion"></a>

```typescript
public readonly adminPasswordWoVersion: number;
```

- *Type:* number

Arbitrary version used to trigger an ADMIN password update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#admin_password_wo_version OdbAutonomousDatabase#admin_password_wo_version}

---

##### `allowlistedIps`<sup>Optional</sup> <a name="allowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.allowlistedIps"></a>

```typescript
public readonly allowlistedIps: string[];
```

- *Type:* string[]

IP addresses allowed to access the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#allowlisted_ips OdbAutonomousDatabase#allowlisted_ips}

---

##### `autonomousMaintenanceScheduleType`<sup>Optional</sup> <a name="autonomousMaintenanceScheduleType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType"></a>

```typescript
public readonly autonomousMaintenanceScheduleType: string;
```

- *Type:* string

Maintenance schedule type for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#autonomous_maintenance_schedule_type OdbAutonomousDatabase#autonomous_maintenance_schedule_type}

---

##### `autoRefreshFrequencyInSeconds`<sup>Optional</sup> <a name="autoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds"></a>

```typescript
public readonly autoRefreshFrequencyInSeconds: number;
```

- *Type:* number

Frequency at which a refreshable clone is automatically refreshed, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#auto_refresh_frequency_in_seconds OdbAutonomousDatabase#auto_refresh_frequency_in_seconds}

---

##### `autoRefreshPointLagInSeconds`<sup>Optional</sup> <a name="autoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds"></a>

```typescript
public readonly autoRefreshPointLagInSeconds: number;
```

- *Type:* number

Time lag between a refreshable clone and its source, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#auto_refresh_point_lag_in_seconds OdbAutonomousDatabase#auto_refresh_point_lag_in_seconds}

---

##### `backupRetentionPeriodInDays`<sup>Optional</sup> <a name="backupRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.backupRetentionPeriodInDays"></a>

```typescript
public readonly backupRetentionPeriodInDays: number;
```

- *Type:* number

Retention period for automatic backups, in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#backup_retention_period_in_days OdbAutonomousDatabase#backup_retention_period_in_days}

---

##### `byolComputeCountLimit`<sup>Optional</sup> <a name="byolComputeCountLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.byolComputeCountLimit"></a>

```typescript
public readonly byolComputeCountLimit: number;
```

- *Type:* number

Maximum compute capacity under the bring-your-own-license model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#byol_compute_count_limit OdbAutonomousDatabase#byol_compute_count_limit}

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

Character set of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#character_set OdbAutonomousDatabase#character_set}

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

Compute capacity in ECPUs or OCPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#compute_count OdbAutonomousDatabase#compute_count}

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

Number of CPU cores allocated to the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#cpu_core_count OdbAutonomousDatabase#cpu_core_count}

---

##### `customerContactsToSendToOci`<sup>Optional</sup> <a name="customerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.customerContactsToSendToOci"></a>

```typescript
public readonly customerContactsToSendToOci: IResolvable | OdbAutonomousDatabaseCustomerContactsToSendToOci[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>[]

customer_contacts_to_send_to_oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#customer_contacts_to_send_to_oci OdbAutonomousDatabase#customer_contacts_to_send_to_oci}

---

##### `databaseEdition`<sup>Optional</sup> <a name="databaseEdition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.databaseEdition"></a>

```typescript
public readonly databaseEdition: string;
```

- *Type:* string

Oracle Database edition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#database_edition OdbAutonomousDatabase#database_edition}

---

##### `dataStorageSizeInGbs`<sup>Optional</sup> <a name="dataStorageSizeInGbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInGbs"></a>

```typescript
public readonly dataStorageSizeInGbs: number;
```

- *Type:* number

Data volume size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#data_storage_size_in_gbs OdbAutonomousDatabase#data_storage_size_in_gbs}

---

##### `dataStorageSizeInTbs`<sup>Optional</sup> <a name="dataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInTbs"></a>

```typescript
public readonly dataStorageSizeInTbs: number;
```

- *Type:* number

Data volume size in TB.

Configured values must be whole numbers; computed values may be fractional when storage is configured in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#data_storage_size_in_tbs OdbAutonomousDatabase#data_storage_size_in_tbs}

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

Name of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#db_name OdbAutonomousDatabase#db_name}

---

##### `dbToolsDetails`<sup>Optional</sup> <a name="dbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbToolsDetails"></a>

```typescript
public readonly dbToolsDetails: IResolvable | OdbAutonomousDatabaseDbToolsDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>[]

db_tools_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#db_tools_details OdbAutonomousDatabase#db_tools_details}

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

Oracle Database software version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#db_version OdbAutonomousDatabase#db_version}

---

##### `dbWorkload`<sup>Optional</sup> <a name="dbWorkload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbWorkload"></a>

```typescript
public readonly dbWorkload: string;
```

- *Type:* string

Intended database workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#db_workload OdbAutonomousDatabase#db_workload}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-friendly name for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#display_name OdbAutonomousDatabase#display_name}

---

##### `encryptionKeyProvider`<sup>Optional</sup> <a name="encryptionKeyProvider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.encryptionKeyProvider"></a>

```typescript
public readonly encryptionKeyProvider: string;
```

- *Type:* string

Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#encryption_key_provider OdbAutonomousDatabase#encryption_key_provider}

---

##### `isAutoScalingEnabled`<sup>Optional</sup> <a name="isAutoScalingEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingEnabled"></a>

```typescript
public readonly isAutoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether automatic compute scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_auto_scaling_enabled OdbAutonomousDatabase#is_auto_scaling_enabled}

---

##### `isAutoScalingForStorageEnabled`<sup>Optional</sup> <a name="isAutoScalingForStorageEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled"></a>

```typescript
public readonly isAutoScalingForStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether automatic storage scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_auto_scaling_for_storage_enabled OdbAutonomousDatabase#is_auto_scaling_for_storage_enabled}

---

##### `isBackupRetentionLocked`<sup>Optional</sup> <a name="isBackupRetentionLocked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isBackupRetentionLocked"></a>

```typescript
public readonly isBackupRetentionLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the backup retention period is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_backup_retention_locked OdbAutonomousDatabase#is_backup_retention_locked}

---

##### `isLocalDataGuardEnabled`<sup>Optional</sup> <a name="isLocalDataGuardEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isLocalDataGuardEnabled"></a>

```typescript
public readonly isLocalDataGuardEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether local Oracle Data Guard is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_local_data_guard_enabled OdbAutonomousDatabase#is_local_data_guard_enabled}

---

##### `isMtlsConnectionRequired`<sup>Optional</sup> <a name="isMtlsConnectionRequired" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isMtlsConnectionRequired"></a>

```typescript
public readonly isMtlsConnectionRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether mutual TLS authentication is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_mtls_connection_required OdbAutonomousDatabase#is_mtls_connection_required}

---

##### `isRefreshableClone`<sup>Optional</sup> <a name="isRefreshableClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isRefreshableClone"></a>

```typescript
public readonly isRefreshableClone: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the Autonomous Database is a refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_refreshable_clone OdbAutonomousDatabase#is_refreshable_clone}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

ARN of the AWS KMS key used to encrypt the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#kms_key_id OdbAutonomousDatabase#kms_key_id}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

Oracle license model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#license_model OdbAutonomousDatabase#license_model}

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Optional</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```typescript
public readonly localAdgAutoFailoverMaxDataLossLimit: number;
```

- *Type:* number

Maximum data-loss limit for automatic local Data Guard failover, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#local_adg_auto_failover_max_data_loss_limit OdbAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}

---

##### `longTermBackupSchedule`<sup>Optional</sup> <a name="longTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.longTermBackupSchedule"></a>

```typescript
public readonly longTermBackupSchedule: IResolvable | OdbAutonomousDatabaseLongTermBackupSchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>[]

long_term_backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#long_term_backup_schedule OdbAutonomousDatabase#long_term_backup_schedule}

---

##### `ncharacterSet`<sup>Optional</sup> <a name="ncharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.ncharacterSet"></a>

```typescript
public readonly ncharacterSet: string;
```

- *Type:* string

National character set of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#ncharacter_set OdbAutonomousDatabase#ncharacter_set}

---

##### `odbNetworkId`<sup>Optional</sup> <a name="odbNetworkId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

ID of the associated ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#odb_network_id OdbAutonomousDatabase#odb_network_id}

---

##### `openMode`<sup>Optional</sup> <a name="openMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

Open mode of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#open_mode OdbAutonomousDatabase#open_mode}

---

##### `permissionLevel`<sup>Optional</sup> <a name="permissionLevel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.permissionLevel"></a>

```typescript
public readonly permissionLevel: string;
```

- *Type:* string

Permission level of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#permission_level OdbAutonomousDatabase#permission_level}

---

##### `privateEndpointIp`<sup>Optional</sup> <a name="privateEndpointIp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

Private endpoint IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#private_endpoint_ip OdbAutonomousDatabase#private_endpoint_ip}

---

##### `privateEndpointLabel`<sup>Optional</sup> <a name="privateEndpointLabel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointLabel"></a>

```typescript
public readonly privateEndpointLabel: string;
```

- *Type:* string

Private endpoint label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#private_endpoint_label OdbAutonomousDatabase#private_endpoint_label}

---

##### `refreshableMode`<sup>Optional</sup> <a name="refreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.refreshableMode"></a>

```typescript
public readonly refreshableMode: string;
```

- *Type:* string

Refresh mode of a refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#refreshable_mode OdbAutonomousDatabase#refreshable_mode}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#region OdbAutonomousDatabase#region}

---

##### `resourcePoolLeaderId`<sup>Optional</sup> <a name="resourcePoolLeaderId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolLeaderId"></a>

```typescript
public readonly resourcePoolLeaderId: string;
```

- *Type:* string

ID of the resource-pool leader Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#resource_pool_leader_id OdbAutonomousDatabase#resource_pool_leader_id}

---

##### `resourcePoolSummary`<sup>Optional</sup> <a name="resourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolSummary"></a>

```typescript
public readonly resourcePoolSummary: IResolvable | OdbAutonomousDatabaseResourcePoolSummary[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>[]

resource_pool_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#resource_pool_summary OdbAutonomousDatabase#resource_pool_summary}

---

##### `scheduledOperations`<sup>Optional</sup> <a name="scheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.scheduledOperations"></a>

```typescript
public readonly scheduledOperations: IResolvable | OdbAutonomousDatabaseScheduledOperations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>[]

scheduled_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#scheduled_operations OdbAutonomousDatabase#scheduled_operations}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Source from which to create the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source OdbAutonomousDatabase#source}

---

##### `sourceConfiguration`<sup>Optional</sup> <a name="sourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.sourceConfiguration"></a>

```typescript
public readonly sourceConfiguration: IResolvable | OdbAutonomousDatabaseSourceConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>[]

source_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_configuration OdbAutonomousDatabase#source_configuration}

---

##### `standbyAllowlistedIps`<sup>Optional</sup> <a name="standbyAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIps"></a>

```typescript
public readonly standbyAllowlistedIps: string[];
```

- *Type:* string[]

IP addresses allowed to access the standby Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips OdbAutonomousDatabase#standby_allowlisted_ips}

---

##### `standbyAllowlistedIpsSource`<sup>Optional</sup> <a name="standbyAllowlistedIpsSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIpsSource"></a>

```typescript
public readonly standbyAllowlistedIpsSource: string;
```

- *Type:* string

Source of the standby allowlisted IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips_source OdbAutonomousDatabase#standby_allowlisted_ips_source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}.

---

##### `timeOfAutoRefreshStart`<sup>Optional</sup> <a name="timeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeOfAutoRefreshStart"></a>

```typescript
public readonly timeOfAutoRefreshStart: string;
```

- *Type:* string

Date and time when automatic refresh begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#time_of_auto_refresh_start OdbAutonomousDatabase#time_of_auto_refresh_start}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OdbAutonomousDatabaseTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#timeouts OdbAutonomousDatabase#timeouts}

---

##### `transportableTablespace`<sup>Optional</sup> <a name="transportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.transportableTablespace"></a>

```typescript
public readonly transportableTablespace: IResolvable | OdbAutonomousDatabaseTransportableTablespace[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>[]

transportable_tablespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#transportable_tablespace OdbAutonomousDatabase#transportable_tablespace}

---

### OdbAutonomousDatabaseCustomerContactsToSendToOci <a name="OdbAutonomousDatabaseCustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseCustomerContactsToSendToOci: odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.property.email">email</a></code> | <code>string</code> | Email address of the customer contact. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Email address of the customer contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#email OdbAutonomousDatabase#email}

---

### OdbAutonomousDatabaseDbToolsDetails <a name="OdbAutonomousDatabaseDbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseDbToolsDetails: odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.computeCount">computeCount</a></code> | <code>number</code> | Compute capacity allocated to the database tool. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the database tool is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes">maxIdleTimeInMinutes</a></code> | <code>number</code> | Maximum idle time before the database tool is shut down, in minutes. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.name">name</a></code> | <code>string</code> | Name of the database tool. |

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

Compute capacity allocated to the database tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#compute_count OdbAutonomousDatabase#compute_count}

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the database tool is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_enabled OdbAutonomousDatabase#is_enabled}

---

##### `maxIdleTimeInMinutes`<sup>Optional</sup> <a name="maxIdleTimeInMinutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes"></a>

```typescript
public readonly maxIdleTimeInMinutes: number;
```

- *Type:* number

Maximum idle time before the database tool is shut down, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#max_idle_time_in_minutes OdbAutonomousDatabase#max_idle_time_in_minutes}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the database tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#name OdbAutonomousDatabase#name}

---

### OdbAutonomousDatabaseLongTermBackupSchedule <a name="OdbAutonomousDatabaseLongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseLongTermBackupSchedule: odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.isDisabled">isDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the long-term backup schedule is disabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence">repeatCadence</a></code> | <code>string</code> | Cadence at which long-term backups are taken. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | Retention period for long-term backups, in days. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup">timeOfBackup</a></code> | <code>string</code> | Date and time at which the long-term backup is taken. |

---

##### `isDisabled`<sup>Optional</sup> <a name="isDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.isDisabled"></a>

```typescript
public readonly isDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the long-term backup schedule is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_disabled OdbAutonomousDatabase#is_disabled}

---

##### `repeatCadence`<sup>Optional</sup> <a name="repeatCadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence"></a>

```typescript
public readonly repeatCadence: string;
```

- *Type:* string

Cadence at which long-term backups are taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#repeat_cadence OdbAutonomousDatabase#repeat_cadence}

---

##### `retentionPeriodInDays`<sup>Optional</sup> <a name="retentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

Retention period for long-term backups, in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#retention_period_in_days OdbAutonomousDatabase#retention_period_in_days}

---

##### `timeOfBackup`<sup>Optional</sup> <a name="timeOfBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup"></a>

```typescript
public readonly timeOfBackup: string;
```

- *Type:* string

Date and time at which the long-term backup is taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#time_of_backup OdbAutonomousDatabase#time_of_backup}

---

### OdbAutonomousDatabaseResourcePoolSummary <a name="OdbAutonomousDatabaseResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseResourcePoolSummary: odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.isDisabled">isDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the resource pool is disabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolSize">poolSize</a></code> | <code>number</code> | Number of Autonomous Databases the resource pool can contain. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolStorageSizeInTbs">poolStorageSizeInTbs</a></code> | <code>number</code> | Total storage size of the resource pool, in TB. |

---

##### `isDisabled`<sup>Optional</sup> <a name="isDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.isDisabled"></a>

```typescript
public readonly isDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the resource pool is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_disabled OdbAutonomousDatabase#is_disabled}

---

##### `poolSize`<sup>Optional</sup> <a name="poolSize" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolSize"></a>

```typescript
public readonly poolSize: number;
```

- *Type:* number

Number of Autonomous Databases the resource pool can contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#pool_size OdbAutonomousDatabase#pool_size}

---

##### `poolStorageSizeInTbs`<sup>Optional</sup> <a name="poolStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolStorageSizeInTbs"></a>

```typescript
public readonly poolStorageSizeInTbs: number;
```

- *Type:* number

Total storage size of the resource pool, in TB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#pool_storage_size_in_tbs OdbAutonomousDatabase#pool_storage_size_in_tbs}

---

### OdbAutonomousDatabaseScheduledOperations <a name="OdbAutonomousDatabaseScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseScheduledOperations: odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Day of the week. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStartTime">scheduledStartTime</a></code> | <code>string</code> | Scheduled start time in UTC. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStopTime">scheduledStopTime</a></code> | <code>string</code> | Scheduled stop time in UTC. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Day of the week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#day_of_week OdbAutonomousDatabase#day_of_week}

---

##### `scheduledStartTime`<sup>Optional</sup> <a name="scheduledStartTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStartTime"></a>

```typescript
public readonly scheduledStartTime: string;
```

- *Type:* string

Scheduled start time in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#scheduled_start_time OdbAutonomousDatabase#scheduled_start_time}

---

##### `scheduledStopTime`<sup>Optional</sup> <a name="scheduledStopTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStopTime"></a>

```typescript
public readonly scheduledStopTime: string;
```

- *Type:* string

Scheduled stop time in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#scheduled_stop_time OdbAutonomousDatabase#scheduled_stop_time}

---

### OdbAutonomousDatabaseSourceConfiguration <a name="OdbAutonomousDatabaseSourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseSourceConfiguration: odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.cloneToRefreshable">cloneToRefreshable</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>[]</code> | clone_to_refreshable block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDataGuard">crossRegionDataGuard</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>[]</code> | cross_region_data_guard block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDisasterRecovery">crossRegionDisasterRecovery</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>[]</code> | cross_region_disaster_recovery block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.databaseClone">databaseClone</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>[]</code> | database_clone block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.pointInTimeRestore">pointInTimeRestore</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>[]</code> | point_in_time_restore block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.restoreFromBackup">restoreFromBackup</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>[]</code> | restore_from_backup block. |

---

##### `cloneToRefreshable`<sup>Optional</sup> <a name="cloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.cloneToRefreshable"></a>

```typescript
public readonly cloneToRefreshable: IResolvable | OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>[]

clone_to_refreshable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_to_refreshable OdbAutonomousDatabase#clone_to_refreshable}

---

##### `crossRegionDataGuard`<sup>Optional</sup> <a name="crossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDataGuard"></a>

```typescript
public readonly crossRegionDataGuard: IResolvable | OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>[]

cross_region_data_guard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#cross_region_data_guard OdbAutonomousDatabase#cross_region_data_guard}

---

##### `crossRegionDisasterRecovery`<sup>Optional</sup> <a name="crossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDisasterRecovery"></a>

```typescript
public readonly crossRegionDisasterRecovery: IResolvable | OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>[]

cross_region_disaster_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#cross_region_disaster_recovery OdbAutonomousDatabase#cross_region_disaster_recovery}

---

##### `databaseClone`<sup>Optional</sup> <a name="databaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.databaseClone"></a>

```typescript
public readonly databaseClone: IResolvable | OdbAutonomousDatabaseSourceConfigurationDatabaseClone[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>[]

database_clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#database_clone OdbAutonomousDatabase#database_clone}

---

##### `pointInTimeRestore`<sup>Optional</sup> <a name="pointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.pointInTimeRestore"></a>

```typescript
public readonly pointInTimeRestore: IResolvable | OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>[]

point_in_time_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#point_in_time_restore OdbAutonomousDatabase#point_in_time_restore}

---

##### `restoreFromBackup`<sup>Optional</sup> <a name="restoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.restoreFromBackup"></a>

```typescript
public readonly restoreFromBackup: IResolvable | OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>[]

restore_from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#restore_from_backup OdbAutonomousDatabase#restore_from_backup}

---

### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseSourceConfigurationCloneToRefreshable: odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>string</code> | ID of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>number</code> | Frequency at which the refreshable clone is automatically refreshed, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>number</code> | Time lag between the refreshable clone and its source, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.cloneType">cloneType</a></code> | <code>string</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.openMode">openMode</a></code> | <code>string</code> | Open mode of the refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.refreshableMode">refreshableMode</a></code> | <code>string</code> | Refresh mode of the clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>string</code> | Date and time when automatic refresh starts. |

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.sourceAutonomousDatabaseId"></a>

```typescript
public readonly sourceAutonomousDatabaseId: string;
```

- *Type:* string

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

##### `autoRefreshFrequencyInSeconds`<sup>Optional</sup> <a name="autoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshFrequencyInSeconds"></a>

```typescript
public readonly autoRefreshFrequencyInSeconds: number;
```

- *Type:* number

Frequency at which the refreshable clone is automatically refreshed, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#auto_refresh_frequency_in_seconds OdbAutonomousDatabase#auto_refresh_frequency_in_seconds}

---

##### `autoRefreshPointLagInSeconds`<sup>Optional</sup> <a name="autoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshPointLagInSeconds"></a>

```typescript
public readonly autoRefreshPointLagInSeconds: number;
```

- *Type:* number

Time lag between the refreshable clone and its source, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#auto_refresh_point_lag_in_seconds OdbAutonomousDatabase#auto_refresh_point_lag_in_seconds}

---

##### `cloneType`<sup>Optional</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.cloneType"></a>

```typescript
public readonly cloneType: string;
```

- *Type:* string

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `openMode`<sup>Optional</sup> <a name="openMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

Open mode of the refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#open_mode OdbAutonomousDatabase#open_mode}

---

##### `refreshableMode`<sup>Optional</sup> <a name="refreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.refreshableMode"></a>

```typescript
public readonly refreshableMode: string;
```

- *Type:* string

Refresh mode of the clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#refreshable_mode OdbAutonomousDatabase#refreshable_mode}

---

##### `timeOfAutoRefreshStart`<sup>Optional</sup> <a name="timeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.timeOfAutoRefreshStart"></a>

```typescript
public readonly timeOfAutoRefreshStart: string;
```

- *Type:* string

Date and time when automatic refresh starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#time_of_auto_refresh_start OdbAutonomousDatabase#time_of_auto_refresh_start}

---

### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard: odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.property.sourceAutonomousDatabaseArn">sourceAutonomousDatabaseArn</a></code> | <code>string</code> | ARN of the source Autonomous Database. |

---

##### `sourceAutonomousDatabaseArn`<sup>Required</sup> <a name="sourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.property.sourceAutonomousDatabaseArn"></a>

```typescript
public readonly sourceAutonomousDatabaseArn: string;
```

- *Type:* string

ARN of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_arn OdbAutonomousDatabase#source_autonomous_database_arn}

---

### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery: odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType">remoteDisasterRecoveryType</a></code> | <code>string</code> | Type of remote disaster recovery. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseArn">sourceAutonomousDatabaseArn</a></code> | <code>string</code> | ARN of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.isReplicateAutomaticBackups">isReplicateAutomaticBackups</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether automatic backups are replicated to the disaster recovery database. |

---

##### `remoteDisasterRecoveryType`<sup>Required</sup> <a name="remoteDisasterRecoveryType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType"></a>

```typescript
public readonly remoteDisasterRecoveryType: string;
```

- *Type:* string

Type of remote disaster recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#remote_disaster_recovery_type OdbAutonomousDatabase#remote_disaster_recovery_type}

---

##### `sourceAutonomousDatabaseArn`<sup>Required</sup> <a name="sourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseArn"></a>

```typescript
public readonly sourceAutonomousDatabaseArn: string;
```

- *Type:* string

ARN of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_arn OdbAutonomousDatabase#source_autonomous_database_arn}

---

##### `isReplicateAutomaticBackups`<sup>Optional</sup> <a name="isReplicateAutomaticBackups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.isReplicateAutomaticBackups"></a>

```typescript
public readonly isReplicateAutomaticBackups: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether automatic backups are replicated to the disaster recovery database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_replicate_automatic_backups OdbAutonomousDatabase#is_replicate_automatic_backups}

---

### OdbAutonomousDatabaseSourceConfigurationDatabaseClone <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseSourceConfigurationDatabaseClone: odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.cloneType">cloneType</a></code> | <code>string</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>string</code> | ID of the source Autonomous Database. |

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.cloneType"></a>

```typescript
public readonly cloneType: string;
```

- *Type:* string

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.sourceAutonomousDatabaseId"></a>

```typescript
public readonly sourceAutonomousDatabaseId: string;
```

- *Type:* string

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseSourceConfigurationPointInTimeRestore: odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneType">cloneType</a></code> | <code>string</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>string</code> | ID of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneTableSpaceList">cloneTableSpaceList</a></code> | <code>number[]</code> | Tablespace IDs to clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.timestamp">timestamp</a></code> | <code>string</code> | Date and time to which the database is restored. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.useLatestAvailableBackupTimestamp">useLatestAvailableBackupTimestamp</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to use the latest available backup timestamp. |

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneType"></a>

```typescript
public readonly cloneType: string;
```

- *Type:* string

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.sourceAutonomousDatabaseId"></a>

```typescript
public readonly sourceAutonomousDatabaseId: string;
```

- *Type:* string

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

##### `cloneTableSpaceList`<sup>Optional</sup> <a name="cloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneTableSpaceList"></a>

```typescript
public readonly cloneTableSpaceList: number[];
```

- *Type:* number[]

Tablespace IDs to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_table_space_list OdbAutonomousDatabase#clone_table_space_list}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

Date and time to which the database is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#timestamp OdbAutonomousDatabase#timestamp}

---

##### `useLatestAvailableBackupTimestamp`<sup>Optional</sup> <a name="useLatestAvailableBackupTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.useLatestAvailableBackupTimestamp"></a>

```typescript
public readonly useLatestAvailableBackupTimestamp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to use the latest available backup timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#use_latest_available_backup_timestamp OdbAutonomousDatabase#use_latest_available_backup_timestamp}

---

### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseSourceConfigurationRestoreFromBackup: odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.autonomousDatabaseBackupId">autonomousDatabaseBackupId</a></code> | <code>string</code> | ID of the Autonomous Database backup. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneType">cloneType</a></code> | <code>string</code> | Type of clone to create from the backup. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneTableSpaceList">cloneTableSpaceList</a></code> | <code>number[]</code> | Tablespace IDs to clone. |

---

##### `autonomousDatabaseBackupId`<sup>Required</sup> <a name="autonomousDatabaseBackupId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.autonomousDatabaseBackupId"></a>

```typescript
public readonly autonomousDatabaseBackupId: string;
```

- *Type:* string

ID of the Autonomous Database backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#autonomous_database_backup_id OdbAutonomousDatabase#autonomous_database_backup_id}

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneType"></a>

```typescript
public readonly cloneType: string;
```

- *Type:* string

Type of clone to create from the backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `cloneTableSpaceList`<sup>Optional</sup> <a name="cloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneTableSpaceList"></a>

```typescript
public readonly cloneTableSpaceList: number[];
```

- *Type:* number[]

Tablespace IDs to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_table_space_list OdbAutonomousDatabase#clone_table_space_list}

---

### OdbAutonomousDatabaseTimeouts <a name="OdbAutonomousDatabaseTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseTimeouts: odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#create OdbAutonomousDatabase#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#delete OdbAutonomousDatabase#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#update OdbAutonomousDatabase#update}

---

### OdbAutonomousDatabaseTransportableTablespace <a name="OdbAutonomousDatabaseTransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

const odbAutonomousDatabaseTransportableTablespace: odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.property.ttsBundleUrl">ttsBundleUrl</a></code> | <code>string</code> | URL of the transportable tablespace bundle. |

---

##### `ttsBundleUrl`<sup>Optional</sup> <a name="ttsBundleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.property.ttsBundleUrl"></a>

```typescript
public readonly ttsBundleUrl: string;
```

- *Type:* string

URL of the transportable tablespace bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#tts_bundle_url OdbAutonomousDatabase#tts_bundle_url}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>[]

---


### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdTypeInput">externalIdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType">externalIdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIdTypeInput`<sup>Optional</sup> <a name="externalIdTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdTypeInput"></a>

```typescript
public readonly externalIdTypeInput: string;
```

- *Type:* string

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `externalIdType`<sup>Required</sup> <a name="externalIdType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType"></a>

```typescript
public readonly externalIdType: string;
```

- *Type:* string

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>

---


### OdbAutonomousDatabaseAdminPasswordSourceList <a name="OdbAutonomousDatabaseAdminPasswordSourceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseAdminPasswordSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseAdminPasswordSource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>[]

---


### OdbAutonomousDatabaseAdminPasswordSourceOutputReference <a name="OdbAutonomousDatabaseAdminPasswordSourceOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.putCustomerManagedAwsSecret">putCustomerManagedAwsSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resetCustomerManagedAwsSecret">resetCustomerManagedAwsSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerManagedAwsSecret` <a name="putCustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.putCustomerManagedAwsSecret"></a>

```typescript
public putCustomerManagedAwsSecret(value: IResolvable | OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.putCustomerManagedAwsSecret.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>[]

---

##### `resetCustomerManagedAwsSecret` <a name="resetCustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resetCustomerManagedAwsSecret"></a>

```typescript
public resetCustomerManagedAwsSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret">customerManagedAwsSecret</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecretInput">customerManagedAwsSecretInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedAwsSecret`<sup>Required</sup> <a name="customerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret"></a>

```typescript
public readonly customerManagedAwsSecret: OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a>

---

##### `customerManagedAwsSecretInput`<sup>Optional</sup> <a name="customerManagedAwsSecretInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecretInput"></a>

```typescript
public readonly customerManagedAwsSecretInput: IResolvable | OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseAdminPasswordSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>

---


### OdbAutonomousDatabaseCustomerContactsToSendToOciList <a name="OdbAutonomousDatabaseCustomerContactsToSendToOciList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseCustomerContactsToSendToOci[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>[]

---


### OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference <a name="OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseCustomerContactsToSendToOci;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>

---


### OdbAutonomousDatabaseDbToolsDetailsList <a name="OdbAutonomousDatabaseDbToolsDetailsList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseDbToolsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseDbToolsDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>[]

---


### OdbAutonomousDatabaseDbToolsDetailsOutputReference <a name="OdbAutonomousDatabaseDbToolsDetailsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes">resetMaxIdleTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeCount` <a name="resetComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount"></a>

```typescript
public resetComputeCount(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetMaxIdleTimeInMinutes` <a name="resetMaxIdleTimeInMinutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes"></a>

```typescript
public resetMaxIdleTimeInMinutes(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput">computeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput">maxIdleTimeInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">maxIdleTimeInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput"></a>

```typescript
public readonly computeCountInput: number;
```

- *Type:* number

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxIdleTimeInMinutesInput`<sup>Optional</sup> <a name="maxIdleTimeInMinutesInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput"></a>

```typescript
public readonly maxIdleTimeInMinutesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxIdleTimeInMinutes`<sup>Required</sup> <a name="maxIdleTimeInMinutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```typescript
public readonly maxIdleTimeInMinutes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseDbToolsDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>

---


### OdbAutonomousDatabaseLongTermBackupScheduleList <a name="OdbAutonomousDatabaseLongTermBackupScheduleList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseLongTermBackupSchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>[]

---


### OdbAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="OdbAutonomousDatabaseLongTermBackupScheduleOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled">resetIsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence">resetRepeatCadence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays">resetRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup">resetTimeOfBackup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDisabled` <a name="resetIsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled"></a>

```typescript
public resetIsDisabled(): void
```

##### `resetRepeatCadence` <a name="resetRepeatCadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence"></a>

```typescript
public resetRepeatCadence(): void
```

##### `resetRetentionPeriodInDays` <a name="resetRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays"></a>

```typescript
public resetRetentionPeriodInDays(): void
```

##### `resetTimeOfBackup` <a name="resetTimeOfBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup"></a>

```typescript
public resetTimeOfBackup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput">isDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput">repeatCadenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput">retentionPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput">timeOfBackupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled">isDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">repeatCadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">timeOfBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDisabledInput`<sup>Optional</sup> <a name="isDisabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput"></a>

```typescript
public readonly isDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `repeatCadenceInput`<sup>Optional</sup> <a name="repeatCadenceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput"></a>

```typescript
public readonly repeatCadenceInput: string;
```

- *Type:* string

---

##### `retentionPeriodInDaysInput`<sup>Optional</sup> <a name="retentionPeriodInDaysInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput"></a>

```typescript
public readonly retentionPeriodInDaysInput: number;
```

- *Type:* number

---

##### `timeOfBackupInput`<sup>Optional</sup> <a name="timeOfBackupInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput"></a>

```typescript
public readonly timeOfBackupInput: string;
```

- *Type:* string

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```typescript
public readonly isDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `repeatCadence`<sup>Required</sup> <a name="repeatCadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```typescript
public readonly repeatCadence: string;
```

- *Type:* string

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

---

##### `timeOfBackup`<sup>Required</sup> <a name="timeOfBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```typescript
public readonly timeOfBackup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseLongTermBackupSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>

---


### OdbAutonomousDatabaseResourcePoolSummaryList <a name="OdbAutonomousDatabaseResourcePoolSummaryList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseResourcePoolSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseResourcePoolSummary[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>[]

---


### OdbAutonomousDatabaseResourcePoolSummaryOutputReference <a name="OdbAutonomousDatabaseResourcePoolSummaryOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled">resetIsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize">resetPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolStorageSizeInTbs">resetPoolStorageSizeInTbs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDisabled` <a name="resetIsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled"></a>

```typescript
public resetIsDisabled(): void
```

##### `resetPoolSize` <a name="resetPoolSize" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize"></a>

```typescript
public resetPoolSize(): void
```

##### `resetPoolStorageSizeInTbs` <a name="resetPoolStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolStorageSizeInTbs"></a>

```typescript
public resetPoolStorageSizeInTbs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity">availableComputeCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs">availableStorageCapacityInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity">totalComputeCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput">isDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput">poolSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbsInput">poolStorageSizeInTbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled">isDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize">poolSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs">poolStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableComputeCapacity`<sup>Required</sup> <a name="availableComputeCapacity" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity"></a>

```typescript
public readonly availableComputeCapacity: number;
```

- *Type:* number

---

##### `availableStorageCapacityInTbs`<sup>Required</sup> <a name="availableStorageCapacityInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs"></a>

```typescript
public readonly availableStorageCapacityInTbs: number;
```

- *Type:* number

---

##### `totalComputeCapacity`<sup>Required</sup> <a name="totalComputeCapacity" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity"></a>

```typescript
public readonly totalComputeCapacity: number;
```

- *Type:* number

---

##### `isDisabledInput`<sup>Optional</sup> <a name="isDisabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput"></a>

```typescript
public readonly isDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `poolSizeInput`<sup>Optional</sup> <a name="poolSizeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput"></a>

```typescript
public readonly poolSizeInput: number;
```

- *Type:* number

---

##### `poolStorageSizeInTbsInput`<sup>Optional</sup> <a name="poolStorageSizeInTbsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbsInput"></a>

```typescript
public readonly poolStorageSizeInTbsInput: number;
```

- *Type:* number

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled"></a>

```typescript
public readonly isDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `poolSize`<sup>Required</sup> <a name="poolSize" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize"></a>

```typescript
public readonly poolSize: number;
```

- *Type:* number

---

##### `poolStorageSizeInTbs`<sup>Required</sup> <a name="poolStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs"></a>

```typescript
public readonly poolStorageSizeInTbs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseResourcePoolSummary;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>

---


### OdbAutonomousDatabaseScheduledOperationsList <a name="OdbAutonomousDatabaseScheduledOperationsList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseScheduledOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseScheduledOperations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>[]

---


### OdbAutonomousDatabaseScheduledOperationsOutputReference <a name="OdbAutonomousDatabaseScheduledOperationsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime">resetScheduledStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime">resetScheduledStopTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScheduledStartTime` <a name="resetScheduledStartTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime"></a>

```typescript
public resetScheduledStartTime(): void
```

##### `resetScheduledStopTime` <a name="resetScheduledStopTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime"></a>

```typescript
public resetScheduledStopTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput">scheduledStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput">scheduledStopTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime">scheduledStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime">scheduledStopTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `scheduledStartTimeInput`<sup>Optional</sup> <a name="scheduledStartTimeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput"></a>

```typescript
public readonly scheduledStartTimeInput: string;
```

- *Type:* string

---

##### `scheduledStopTimeInput`<sup>Optional</sup> <a name="scheduledStopTimeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput"></a>

```typescript
public readonly scheduledStopTimeInput: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `scheduledStartTime`<sup>Required</sup> <a name="scheduledStartTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```typescript
public readonly scheduledStartTime: string;
```

- *Type:* string

---

##### `scheduledStopTime`<sup>Required</sup> <a name="scheduledStopTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```typescript
public readonly scheduledStopTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseScheduledOperations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>

---


### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>[]

---


### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshFrequencyInSeconds">resetAutoRefreshFrequencyInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshPointLagInSeconds">resetAutoRefreshPointLagInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetCloneType">resetCloneType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetOpenMode">resetOpenMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetRefreshableMode">resetRefreshableMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetTimeOfAutoRefreshStart">resetTimeOfAutoRefreshStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoRefreshFrequencyInSeconds` <a name="resetAutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshFrequencyInSeconds"></a>

```typescript
public resetAutoRefreshFrequencyInSeconds(): void
```

##### `resetAutoRefreshPointLagInSeconds` <a name="resetAutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshPointLagInSeconds"></a>

```typescript
public resetAutoRefreshPointLagInSeconds(): void
```

##### `resetCloneType` <a name="resetCloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetCloneType"></a>

```typescript
public resetCloneType(): void
```

##### `resetOpenMode` <a name="resetOpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetOpenMode"></a>

```typescript
public resetOpenMode(): void
```

##### `resetRefreshableMode` <a name="resetRefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetRefreshableMode"></a>

```typescript
public resetRefreshableMode(): void
```

##### `resetTimeOfAutoRefreshStart` <a name="resetTimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetTimeOfAutoRefreshStart"></a>

```typescript
public resetTimeOfAutoRefreshStart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSecondsInput">autoRefreshFrequencyInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSecondsInput">autoRefreshPointLagInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneTypeInput">cloneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openModeInput">openModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableModeInput">refreshableModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseIdInput">sourceAutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStartInput">timeOfAutoRefreshStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneType">cloneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableMode">refreshableMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRefreshFrequencyInSecondsInput`<sup>Optional</sup> <a name="autoRefreshFrequencyInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSecondsInput"></a>

```typescript
public readonly autoRefreshFrequencyInSecondsInput: number;
```

- *Type:* number

---

##### `autoRefreshPointLagInSecondsInput`<sup>Optional</sup> <a name="autoRefreshPointLagInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSecondsInput"></a>

```typescript
public readonly autoRefreshPointLagInSecondsInput: number;
```

- *Type:* number

---

##### `cloneTypeInput`<sup>Optional</sup> <a name="cloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneTypeInput"></a>

```typescript
public readonly cloneTypeInput: string;
```

- *Type:* string

---

##### `openModeInput`<sup>Optional</sup> <a name="openModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openModeInput"></a>

```typescript
public readonly openModeInput: string;
```

- *Type:* string

---

##### `refreshableModeInput`<sup>Optional</sup> <a name="refreshableModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableModeInput"></a>

```typescript
public readonly refreshableModeInput: string;
```

- *Type:* string

---

##### `sourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="sourceAutonomousDatabaseIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```typescript
public readonly sourceAutonomousDatabaseIdInput: string;
```

- *Type:* string

---

##### `timeOfAutoRefreshStartInput`<sup>Optional</sup> <a name="timeOfAutoRefreshStartInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStartInput"></a>

```typescript
public readonly timeOfAutoRefreshStartInput: string;
```

- *Type:* string

---

##### `autoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="autoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSeconds"></a>

```typescript
public readonly autoRefreshFrequencyInSeconds: number;
```

- *Type:* number

---

##### `autoRefreshPointLagInSeconds`<sup>Required</sup> <a name="autoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSeconds"></a>

```typescript
public readonly autoRefreshPointLagInSeconds: number;
```

- *Type:* number

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneType"></a>

```typescript
public readonly cloneType: string;
```

- *Type:* string

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `refreshableMode`<sup>Required</sup> <a name="refreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableMode"></a>

```typescript
public readonly refreshableMode: string;
```

- *Type:* string

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseId"></a>

```typescript
public readonly sourceAutonomousDatabaseId: string;
```

- *Type:* string

---

##### `timeOfAutoRefreshStart`<sup>Required</sup> <a name="timeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStart"></a>

```typescript
public readonly timeOfAutoRefreshStart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>[]

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArnInput">sourceAutonomousDatabaseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArn">sourceAutonomousDatabaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceAutonomousDatabaseArnInput`<sup>Optional</sup> <a name="sourceAutonomousDatabaseArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArnInput"></a>

```typescript
public readonly sourceAutonomousDatabaseArnInput: string;
```

- *Type:* string

---

##### `sourceAutonomousDatabaseArn`<sup>Required</sup> <a name="sourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArn"></a>

```typescript
public readonly sourceAutonomousDatabaseArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>[]

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resetIsReplicateAutomaticBackups">resetIsReplicateAutomaticBackups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsReplicateAutomaticBackups` <a name="resetIsReplicateAutomaticBackups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resetIsReplicateAutomaticBackups"></a>

```typescript
public resetIsReplicateAutomaticBackups(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackupsInput">isReplicateAutomaticBackupsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryTypeInput">remoteDisasterRecoveryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArnInput">sourceAutonomousDatabaseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackups">isReplicateAutomaticBackups</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryType">remoteDisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArn">sourceAutonomousDatabaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isReplicateAutomaticBackupsInput`<sup>Optional</sup> <a name="isReplicateAutomaticBackupsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackupsInput"></a>

```typescript
public readonly isReplicateAutomaticBackupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `remoteDisasterRecoveryTypeInput`<sup>Optional</sup> <a name="remoteDisasterRecoveryTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryTypeInput"></a>

```typescript
public readonly remoteDisasterRecoveryTypeInput: string;
```

- *Type:* string

---

##### `sourceAutonomousDatabaseArnInput`<sup>Optional</sup> <a name="sourceAutonomousDatabaseArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArnInput"></a>

```typescript
public readonly sourceAutonomousDatabaseArnInput: string;
```

- *Type:* string

---

##### `isReplicateAutomaticBackups`<sup>Required</sup> <a name="isReplicateAutomaticBackups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackups"></a>

```typescript
public readonly isReplicateAutomaticBackups: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `remoteDisasterRecoveryType`<sup>Required</sup> <a name="remoteDisasterRecoveryType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryType"></a>

```typescript
public readonly remoteDisasterRecoveryType: string;
```

- *Type:* string

---

##### `sourceAutonomousDatabaseArn`<sup>Required</sup> <a name="sourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArn"></a>

```typescript
public readonly sourceAutonomousDatabaseArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>

---


### OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseSourceConfigurationDatabaseClone[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>[]

---


### OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneTypeInput">cloneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseIdInput">sourceAutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneType">cloneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloneTypeInput`<sup>Optional</sup> <a name="cloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneTypeInput"></a>

```typescript
public readonly cloneTypeInput: string;
```

- *Type:* string

---

##### `sourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="sourceAutonomousDatabaseIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```typescript
public readonly sourceAutonomousDatabaseIdInput: string;
```

- *Type:* string

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneType"></a>

```typescript
public readonly cloneType: string;
```

- *Type:* string

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseId"></a>

```typescript
public readonly sourceAutonomousDatabaseId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseSourceConfigurationDatabaseClone;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>

---


### OdbAutonomousDatabaseSourceConfigurationList <a name="OdbAutonomousDatabaseSourceConfigurationList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseSourceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseSourceConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>[]

---


### OdbAutonomousDatabaseSourceConfigurationOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCloneToRefreshable">putCloneToRefreshable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDataGuard">putCrossRegionDataGuard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDisasterRecovery">putCrossRegionDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putDatabaseClone">putDatabaseClone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putPointInTimeRestore">putPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putRestoreFromBackup">putRestoreFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCloneToRefreshable">resetCloneToRefreshable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDataGuard">resetCrossRegionDataGuard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDisasterRecovery">resetCrossRegionDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetDatabaseClone">resetDatabaseClone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetPointInTimeRestore">resetPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetRestoreFromBackup">resetRestoreFromBackup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloneToRefreshable` <a name="putCloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCloneToRefreshable"></a>

```typescript
public putCloneToRefreshable(value: IResolvable | OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCloneToRefreshable.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>[]

---

##### `putCrossRegionDataGuard` <a name="putCrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDataGuard"></a>

```typescript
public putCrossRegionDataGuard(value: IResolvable | OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDataGuard.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>[]

---

##### `putCrossRegionDisasterRecovery` <a name="putCrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDisasterRecovery"></a>

```typescript
public putCrossRegionDisasterRecovery(value: IResolvable | OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDisasterRecovery.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>[]

---

##### `putDatabaseClone` <a name="putDatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putDatabaseClone"></a>

```typescript
public putDatabaseClone(value: IResolvable | OdbAutonomousDatabaseSourceConfigurationDatabaseClone[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putDatabaseClone.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>[]

---

##### `putPointInTimeRestore` <a name="putPointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putPointInTimeRestore"></a>

```typescript
public putPointInTimeRestore(value: IResolvable | OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putPointInTimeRestore.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>[]

---

##### `putRestoreFromBackup` <a name="putRestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putRestoreFromBackup"></a>

```typescript
public putRestoreFromBackup(value: IResolvable | OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putRestoreFromBackup.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>[]

---

##### `resetCloneToRefreshable` <a name="resetCloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCloneToRefreshable"></a>

```typescript
public resetCloneToRefreshable(): void
```

##### `resetCrossRegionDataGuard` <a name="resetCrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDataGuard"></a>

```typescript
public resetCrossRegionDataGuard(): void
```

##### `resetCrossRegionDisasterRecovery` <a name="resetCrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDisasterRecovery"></a>

```typescript
public resetCrossRegionDisasterRecovery(): void
```

##### `resetDatabaseClone` <a name="resetDatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetDatabaseClone"></a>

```typescript
public resetDatabaseClone(): void
```

##### `resetPointInTimeRestore` <a name="resetPointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetPointInTimeRestore"></a>

```typescript
public resetPointInTimeRestore(): void
```

##### `resetRestoreFromBackup` <a name="resetRestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetRestoreFromBackup"></a>

```typescript
public resetRestoreFromBackup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshable">cloneToRefreshable</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuard">crossRegionDataGuard</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecovery">crossRegionDisasterRecovery</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseClone">databaseClone</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList">OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestore">pointInTimeRestore</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackup">restoreFromBackup</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshableInput">cloneToRefreshableInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuardInput">crossRegionDataGuardInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecoveryInput">crossRegionDisasterRecoveryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseCloneInput">databaseCloneInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestoreInput">pointInTimeRestoreInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackupInput">restoreFromBackupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloneToRefreshable`<sup>Required</sup> <a name="cloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshable"></a>

```typescript
public readonly cloneToRefreshable: OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList</a>

---

##### `crossRegionDataGuard`<sup>Required</sup> <a name="crossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuard"></a>

```typescript
public readonly crossRegionDataGuard: OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList</a>

---

##### `crossRegionDisasterRecovery`<sup>Required</sup> <a name="crossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecovery"></a>

```typescript
public readonly crossRegionDisasterRecovery: OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList</a>

---

##### `databaseClone`<sup>Required</sup> <a name="databaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseClone"></a>

```typescript
public readonly databaseClone: OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList">OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList</a>

---

##### `pointInTimeRestore`<sup>Required</sup> <a name="pointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestore"></a>

```typescript
public readonly pointInTimeRestore: OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList</a>

---

##### `restoreFromBackup`<sup>Required</sup> <a name="restoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackup"></a>

```typescript
public readonly restoreFromBackup: OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList</a>

---

##### `cloneToRefreshableInput`<sup>Optional</sup> <a name="cloneToRefreshableInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshableInput"></a>

```typescript
public readonly cloneToRefreshableInput: IResolvable | OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>[]

---

##### `crossRegionDataGuardInput`<sup>Optional</sup> <a name="crossRegionDataGuardInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuardInput"></a>

```typescript
public readonly crossRegionDataGuardInput: IResolvable | OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>[]

---

##### `crossRegionDisasterRecoveryInput`<sup>Optional</sup> <a name="crossRegionDisasterRecoveryInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecoveryInput"></a>

```typescript
public readonly crossRegionDisasterRecoveryInput: IResolvable | OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>[]

---

##### `databaseCloneInput`<sup>Optional</sup> <a name="databaseCloneInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseCloneInput"></a>

```typescript
public readonly databaseCloneInput: IResolvable | OdbAutonomousDatabaseSourceConfigurationDatabaseClone[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>[]

---

##### `pointInTimeRestoreInput`<sup>Optional</sup> <a name="pointInTimeRestoreInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestoreInput"></a>

```typescript
public readonly pointInTimeRestoreInput: IResolvable | OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>[]

---

##### `restoreFromBackupInput`<sup>Optional</sup> <a name="restoreFromBackupInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackupInput"></a>

```typescript
public readonly restoreFromBackupInput: IResolvable | OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseSourceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>

---


### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>[]

---


### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetCloneTableSpaceList">resetCloneTableSpaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetTimestamp">resetTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetUseLatestAvailableBackupTimestamp">resetUseLatestAvailableBackupTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloneTableSpaceList` <a name="resetCloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetCloneTableSpaceList"></a>

```typescript
public resetCloneTableSpaceList(): void
```

##### `resetTimestamp` <a name="resetTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetTimestamp"></a>

```typescript
public resetTimestamp(): void
```

##### `resetUseLatestAvailableBackupTimestamp` <a name="resetUseLatestAvailableBackupTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetUseLatestAvailableBackupTimestamp"></a>

```typescript
public resetUseLatestAvailableBackupTimestamp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceListInput">cloneTableSpaceListInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTypeInput">cloneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseIdInput">sourceAutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestampInput">timestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestampInput">useLatestAvailableBackupTimestampInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceList">cloneTableSpaceList</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneType">cloneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestamp">useLatestAvailableBackupTimestamp</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloneTableSpaceListInput`<sup>Optional</sup> <a name="cloneTableSpaceListInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceListInput"></a>

```typescript
public readonly cloneTableSpaceListInput: number[];
```

- *Type:* number[]

---

##### `cloneTypeInput`<sup>Optional</sup> <a name="cloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTypeInput"></a>

```typescript
public readonly cloneTypeInput: string;
```

- *Type:* string

---

##### `sourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="sourceAutonomousDatabaseIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```typescript
public readonly sourceAutonomousDatabaseIdInput: string;
```

- *Type:* string

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestampInput"></a>

```typescript
public readonly timestampInput: string;
```

- *Type:* string

---

##### `useLatestAvailableBackupTimestampInput`<sup>Optional</sup> <a name="useLatestAvailableBackupTimestampInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestampInput"></a>

```typescript
public readonly useLatestAvailableBackupTimestampInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cloneTableSpaceList`<sup>Required</sup> <a name="cloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceList"></a>

```typescript
public readonly cloneTableSpaceList: number[];
```

- *Type:* number[]

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneType"></a>

```typescript
public readonly cloneType: string;
```

- *Type:* string

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseId"></a>

```typescript
public readonly sourceAutonomousDatabaseId: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `useLatestAvailableBackupTimestamp`<sup>Required</sup> <a name="useLatestAvailableBackupTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestamp"></a>

```typescript
public readonly useLatestAvailableBackupTimestamp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>

---


### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>[]

---


### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resetCloneTableSpaceList">resetCloneTableSpaceList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloneTableSpaceList` <a name="resetCloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resetCloneTableSpaceList"></a>

```typescript
public resetCloneTableSpaceList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupIdInput">autonomousDatabaseBackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceListInput">cloneTableSpaceListInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTypeInput">cloneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupId">autonomousDatabaseBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceList">cloneTableSpaceList</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneType">cloneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autonomousDatabaseBackupIdInput`<sup>Optional</sup> <a name="autonomousDatabaseBackupIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupIdInput"></a>

```typescript
public readonly autonomousDatabaseBackupIdInput: string;
```

- *Type:* string

---

##### `cloneTableSpaceListInput`<sup>Optional</sup> <a name="cloneTableSpaceListInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceListInput"></a>

```typescript
public readonly cloneTableSpaceListInput: number[];
```

- *Type:* number[]

---

##### `cloneTypeInput`<sup>Optional</sup> <a name="cloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTypeInput"></a>

```typescript
public readonly cloneTypeInput: string;
```

- *Type:* string

---

##### `autonomousDatabaseBackupId`<sup>Required</sup> <a name="autonomousDatabaseBackupId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupId"></a>

```typescript
public readonly autonomousDatabaseBackupId: string;
```

- *Type:* string

---

##### `cloneTableSpaceList`<sup>Required</sup> <a name="cloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceList"></a>

```typescript
public readonly cloneTableSpaceList: number[];
```

- *Type:* number[]

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneType"></a>

```typescript
public readonly cloneType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>

---


### OdbAutonomousDatabaseTimeoutsOutputReference <a name="OdbAutonomousDatabaseTimeoutsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

---


### OdbAutonomousDatabaseTransportableTablespaceList <a name="OdbAutonomousDatabaseTransportableTablespaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.get"></a>

```typescript
public get(index: number): OdbAutonomousDatabaseTransportableTablespaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseTransportableTablespace[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>[]

---


### OdbAutonomousDatabaseTransportableTablespaceOutputReference <a name="OdbAutonomousDatabaseTransportableTablespaceOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer"></a>

```typescript
import { odbAutonomousDatabase } from '@cdktn/provider-aws'

new odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resetTtsBundleUrl">resetTtsBundleUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTtsBundleUrl` <a name="resetTtsBundleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resetTtsBundleUrl"></a>

```typescript
public resetTtsBundleUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrlInput">ttsBundleUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrl">ttsBundleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttsBundleUrlInput`<sup>Optional</sup> <a name="ttsBundleUrlInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrlInput"></a>

```typescript
public readonly ttsBundleUrlInput: string;
```

- *Type:* string

---

##### `ttsBundleUrl`<sup>Required</sup> <a name="ttsBundleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrl"></a>

```typescript
public readonly ttsBundleUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbAutonomousDatabaseTransportableTablespace;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>

---



