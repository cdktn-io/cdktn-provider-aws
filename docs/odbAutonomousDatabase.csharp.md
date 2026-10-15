# `odbAutonomousDatabase` Submodule <a name="`odbAutonomousDatabase` Submodule" id="@cdktn/provider-aws.odbAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbAutonomousDatabase <a name="OdbAutonomousDatabase" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database aws_odb_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabase(Construct Scope, string Id, OdbAutonomousDatabaseConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig">OdbAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig">OdbAutonomousDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putAdminPasswordSource">PutAdminPasswordSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putCustomerContactsToSendToOci">PutCustomerContactsToSendToOci</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putDbToolsDetails">PutDbToolsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putLongTermBackupSchedule">PutLongTermBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putResourcePoolSummary">PutResourcePoolSummary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putScheduledOperations">PutScheduledOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putSourceConfiguration">PutSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTransportableTablespace">PutTransportableTablespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordSource">ResetAdminPasswordSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWo">ResetAdminPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWoVersion">ResetAdminPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAllowlistedIps">ResetAllowlistedIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutonomousMaintenanceScheduleType">ResetAutonomousMaintenanceScheduleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshFrequencyInSeconds">ResetAutoRefreshFrequencyInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshPointLagInSeconds">ResetAutoRefreshPointLagInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetBackupRetentionPeriodInDays">ResetBackupRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetByolComputeCountLimit">ResetByolComputeCountLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCharacterSet">ResetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetComputeCount">ResetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCpuCoreCount">ResetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCustomerContactsToSendToOci">ResetCustomerContactsToSendToOci</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDatabaseEdition">ResetDatabaseEdition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInGbs">ResetDataStorageSizeInGbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInTbs">ResetDataStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbName">ResetDbName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbToolsDetails">ResetDbToolsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbVersion">ResetDbVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbWorkload">ResetDbWorkload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetEncryptionKeyProvider">ResetEncryptionKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingEnabled">ResetIsAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingForStorageEnabled">ResetIsAutoScalingForStorageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsBackupRetentionLocked">ResetIsBackupRetentionLocked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsLocalDataGuardEnabled">ResetIsLocalDataGuardEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsMtlsConnectionRequired">ResetIsMtlsConnectionRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsRefreshableClone">ResetIsRefreshableClone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit">ResetLocalAdgAutoFailoverMaxDataLossLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLongTermBackupSchedule">ResetLongTermBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetNcharacterSet">ResetNcharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOdbNetworkId">ResetOdbNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOpenMode">ResetOpenMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPermissionLevel">ResetPermissionLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointIp">ResetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointLabel">ResetPrivateEndpointLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRefreshableMode">ResetRefreshableMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolLeaderId">ResetResourcePoolLeaderId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolSummary">ResetResourcePoolSummary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetScheduledOperations">ResetScheduledOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSourceConfiguration">ResetSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIps">ResetStandbyAllowlistedIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIpsSource">ResetStandbyAllowlistedIpsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeOfAutoRefreshStart">ResetTimeOfAutoRefreshStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTransportableTablespace">ResetTransportableTablespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdminPasswordSource` <a name="PutAdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putAdminPasswordSource"></a>

```csharp
private void PutAdminPasswordSource(IResolvable|OdbAutonomousDatabaseAdminPasswordSource[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putAdminPasswordSource.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>[]

---

##### `PutCustomerContactsToSendToOci` <a name="PutCustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putCustomerContactsToSendToOci"></a>

```csharp
private void PutCustomerContactsToSendToOci(IResolvable|OdbAutonomousDatabaseCustomerContactsToSendToOci[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putCustomerContactsToSendToOci.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>[]

---

##### `PutDbToolsDetails` <a name="PutDbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putDbToolsDetails"></a>

```csharp
private void PutDbToolsDetails(IResolvable|OdbAutonomousDatabaseDbToolsDetails[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putDbToolsDetails.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>[]

---

##### `PutLongTermBackupSchedule` <a name="PutLongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putLongTermBackupSchedule"></a>

```csharp
private void PutLongTermBackupSchedule(IResolvable|OdbAutonomousDatabaseLongTermBackupSchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putLongTermBackupSchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>[]

---

##### `PutResourcePoolSummary` <a name="PutResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putResourcePoolSummary"></a>

```csharp
private void PutResourcePoolSummary(IResolvable|OdbAutonomousDatabaseResourcePoolSummary[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putResourcePoolSummary.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>[]

---

##### `PutScheduledOperations` <a name="PutScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putScheduledOperations"></a>

```csharp
private void PutScheduledOperations(IResolvable|OdbAutonomousDatabaseScheduledOperations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putScheduledOperations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>[]

---

##### `PutSourceConfiguration` <a name="PutSourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putSourceConfiguration"></a>

```csharp
private void PutSourceConfiguration(IResolvable|OdbAutonomousDatabaseSourceConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putSourceConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(OdbAutonomousDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

---

##### `PutTransportableTablespace` <a name="PutTransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTransportableTablespace"></a>

```csharp
private void PutTransportableTablespace(IResolvable|OdbAutonomousDatabaseTransportableTablespace[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTransportableTablespace.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>[]

---

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPassword"></a>

```csharp
private void ResetAdminPassword()
```

##### `ResetAdminPasswordSource` <a name="ResetAdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordSource"></a>

```csharp
private void ResetAdminPasswordSource()
```

##### `ResetAdminPasswordWo` <a name="ResetAdminPasswordWo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWo"></a>

```csharp
private void ResetAdminPasswordWo()
```

##### `ResetAdminPasswordWoVersion` <a name="ResetAdminPasswordWoVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWoVersion"></a>

```csharp
private void ResetAdminPasswordWoVersion()
```

##### `ResetAllowlistedIps` <a name="ResetAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAllowlistedIps"></a>

```csharp
private void ResetAllowlistedIps()
```

##### `ResetAutonomousMaintenanceScheduleType` <a name="ResetAutonomousMaintenanceScheduleType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutonomousMaintenanceScheduleType"></a>

```csharp
private void ResetAutonomousMaintenanceScheduleType()
```

##### `ResetAutoRefreshFrequencyInSeconds` <a name="ResetAutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshFrequencyInSeconds"></a>

```csharp
private void ResetAutoRefreshFrequencyInSeconds()
```

##### `ResetAutoRefreshPointLagInSeconds` <a name="ResetAutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshPointLagInSeconds"></a>

```csharp
private void ResetAutoRefreshPointLagInSeconds()
```

##### `ResetBackupRetentionPeriodInDays` <a name="ResetBackupRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetBackupRetentionPeriodInDays"></a>

```csharp
private void ResetBackupRetentionPeriodInDays()
```

##### `ResetByolComputeCountLimit` <a name="ResetByolComputeCountLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetByolComputeCountLimit"></a>

```csharp
private void ResetByolComputeCountLimit()
```

##### `ResetCharacterSet` <a name="ResetCharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCharacterSet"></a>

```csharp
private void ResetCharacterSet()
```

##### `ResetComputeCount` <a name="ResetComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetComputeCount"></a>

```csharp
private void ResetComputeCount()
```

##### `ResetCpuCoreCount` <a name="ResetCpuCoreCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCpuCoreCount"></a>

```csharp
private void ResetCpuCoreCount()
```

##### `ResetCustomerContactsToSendToOci` <a name="ResetCustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCustomerContactsToSendToOci"></a>

```csharp
private void ResetCustomerContactsToSendToOci()
```

##### `ResetDatabaseEdition` <a name="ResetDatabaseEdition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDatabaseEdition"></a>

```csharp
private void ResetDatabaseEdition()
```

##### `ResetDataStorageSizeInGbs` <a name="ResetDataStorageSizeInGbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInGbs"></a>

```csharp
private void ResetDataStorageSizeInGbs()
```

##### `ResetDataStorageSizeInTbs` <a name="ResetDataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInTbs"></a>

```csharp
private void ResetDataStorageSizeInTbs()
```

##### `ResetDbName` <a name="ResetDbName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbName"></a>

```csharp
private void ResetDbName()
```

##### `ResetDbToolsDetails` <a name="ResetDbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbToolsDetails"></a>

```csharp
private void ResetDbToolsDetails()
```

##### `ResetDbVersion` <a name="ResetDbVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbVersion"></a>

```csharp
private void ResetDbVersion()
```

##### `ResetDbWorkload` <a name="ResetDbWorkload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbWorkload"></a>

```csharp
private void ResetDbWorkload()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEncryptionKeyProvider` <a name="ResetEncryptionKeyProvider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetEncryptionKeyProvider"></a>

```csharp
private void ResetEncryptionKeyProvider()
```

##### `ResetIsAutoScalingEnabled` <a name="ResetIsAutoScalingEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingEnabled"></a>

```csharp
private void ResetIsAutoScalingEnabled()
```

##### `ResetIsAutoScalingForStorageEnabled` <a name="ResetIsAutoScalingForStorageEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingForStorageEnabled"></a>

```csharp
private void ResetIsAutoScalingForStorageEnabled()
```

##### `ResetIsBackupRetentionLocked` <a name="ResetIsBackupRetentionLocked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsBackupRetentionLocked"></a>

```csharp
private void ResetIsBackupRetentionLocked()
```

##### `ResetIsLocalDataGuardEnabled` <a name="ResetIsLocalDataGuardEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsLocalDataGuardEnabled"></a>

```csharp
private void ResetIsLocalDataGuardEnabled()
```

##### `ResetIsMtlsConnectionRequired` <a name="ResetIsMtlsConnectionRequired" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsMtlsConnectionRequired"></a>

```csharp
private void ResetIsMtlsConnectionRequired()
```

##### `ResetIsRefreshableClone` <a name="ResetIsRefreshableClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsRefreshableClone"></a>

```csharp
private void ResetIsRefreshableClone()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetLocalAdgAutoFailoverMaxDataLossLimit` <a name="ResetLocalAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit"></a>

```csharp
private void ResetLocalAdgAutoFailoverMaxDataLossLimit()
```

##### `ResetLongTermBackupSchedule` <a name="ResetLongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLongTermBackupSchedule"></a>

```csharp
private void ResetLongTermBackupSchedule()
```

##### `ResetNcharacterSet` <a name="ResetNcharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetNcharacterSet"></a>

```csharp
private void ResetNcharacterSet()
```

##### `ResetOdbNetworkId` <a name="ResetOdbNetworkId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOdbNetworkId"></a>

```csharp
private void ResetOdbNetworkId()
```

##### `ResetOpenMode` <a name="ResetOpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOpenMode"></a>

```csharp
private void ResetOpenMode()
```

##### `ResetPermissionLevel` <a name="ResetPermissionLevel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPermissionLevel"></a>

```csharp
private void ResetPermissionLevel()
```

##### `ResetPrivateEndpointIp` <a name="ResetPrivateEndpointIp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointIp"></a>

```csharp
private void ResetPrivateEndpointIp()
```

##### `ResetPrivateEndpointLabel` <a name="ResetPrivateEndpointLabel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointLabel"></a>

```csharp
private void ResetPrivateEndpointLabel()
```

##### `ResetRefreshableMode` <a name="ResetRefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRefreshableMode"></a>

```csharp
private void ResetRefreshableMode()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourcePoolLeaderId` <a name="ResetResourcePoolLeaderId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolLeaderId"></a>

```csharp
private void ResetResourcePoolLeaderId()
```

##### `ResetResourcePoolSummary` <a name="ResetResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolSummary"></a>

```csharp
private void ResetResourcePoolSummary()
```

##### `ResetScheduledOperations` <a name="ResetScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetScheduledOperations"></a>

```csharp
private void ResetScheduledOperations()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetSourceConfiguration` <a name="ResetSourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSourceConfiguration"></a>

```csharp
private void ResetSourceConfiguration()
```

##### `ResetStandbyAllowlistedIps` <a name="ResetStandbyAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIps"></a>

```csharp
private void ResetStandbyAllowlistedIps()
```

##### `ResetStandbyAllowlistedIpsSource` <a name="ResetStandbyAllowlistedIpsSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIpsSource"></a>

```csharp
private void ResetStandbyAllowlistedIpsSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeOfAutoRefreshStart` <a name="ResetTimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeOfAutoRefreshStart"></a>

```csharp
private void ResetTimeOfAutoRefreshStart()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransportableTablespace` <a name="ResetTransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTransportableTablespace"></a>

```csharp
private void ResetTransportableTablespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OdbAutonomousDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OdbAutonomousDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OdbAutonomousDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OdbAutonomousDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

OdbAutonomousDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OdbAutonomousDatabase resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OdbAutonomousDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OdbAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OdbAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">ActualUsedDataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSource">AdminPasswordSource</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList">OdbAutonomousDatabaseAdminPasswordSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allocatedStorageSizeInTbs">AllocatedStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOci">CustomerContactsToSendToOci</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList">OdbAutonomousDatabaseCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseType">DatabaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetails">DbToolsDetails</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList">OdbAutonomousDatabaseDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupSchedule">LongTermBackupSchedule</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList">OdbAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.percentProgress">PercentProgress</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpoint">PrivateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummary">ResourcePoolSummary</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList">OdbAutonomousDatabaseResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperations">ScheduledOperations</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList">OdbAutonomousDatabaseScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.serviceConsoleUrl">ServiceConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList">OdbAutonomousDatabaseSourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceId">SourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sqlWebDeveloperUrl">SqlWebDeveloperUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference">OdbAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespace">TransportableTablespace</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList">OdbAutonomousDatabaseTransportableTablespaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSourceInput">AdminPasswordSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoInput">AdminPasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersionInput">AdminPasswordWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIpsInput">AllowlistedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput">AutonomousMaintenanceScheduleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput">AutoRefreshFrequencyInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSecondsInput">AutoRefreshPointLagInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDaysInput">BackupRetentionPeriodInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimitInput">ByolComputeCountLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSetInput">CharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCountInput">ComputeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOciInput">CustomerContactsToSendToOciInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEditionInput">DatabaseEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbsInput">DataStorageSizeInGbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbsInput">DataStorageSizeInTbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbNameInput">DbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetailsInput">DbToolsDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersionInput">DbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkloadInput">DbWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProviderInput">EncryptionKeyProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabledInput">IsAutoScalingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabledInput">IsAutoScalingForStorageEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLockedInput">IsBackupRetentionLockedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabledInput">IsLocalDataGuardEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequiredInput">IsMtlsConnectionRequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableCloneInput">IsRefreshableCloneInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput">LocalAdgAutoFailoverMaxDataLossLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupScheduleInput">LongTermBackupScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSetInput">NcharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkIdInput">OdbNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openModeInput">OpenModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevelInput">PermissionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIpInput">PrivateEndpointIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabelInput">PrivateEndpointLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableModeInput">RefreshableModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderIdInput">ResourcePoolLeaderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummaryInput">ResourcePoolSummaryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperationsInput">ScheduledOperationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfigurationInput">SourceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsInput">StandbyAllowlistedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSourceInput">StandbyAllowlistedIpsSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStartInput">TimeOfAutoRefreshStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespaceInput">TransportableTablespaceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWo">AdminPasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersion">AdminPasswordWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIps">AllowlistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleType">AutonomousMaintenanceScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds">AutoRefreshFrequencyInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSeconds">AutoRefreshPointLagInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimit">ByolComputeCountLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProvider">EncryptionKeyProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabled">IsAutoScalingForStorageEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLocked">IsBackupRetentionLocked</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabled">IsLocalDataGuardEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequired">IsMtlsConnectionRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openMode">OpenMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevel">PermissionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableMode">RefreshableMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderId">ResourcePoolLeaderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIps">StandbyAllowlistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSource">StandbyAllowlistedIpsSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStart">TimeOfAutoRefreshStart</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActualUsedDataStorageSizeInTbs`<sup>Required</sup> <a name="ActualUsedDataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```csharp
public double ActualUsedDataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `AdminPasswordSource`<sup>Required</sup> <a name="AdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSource"></a>

```csharp
public OdbAutonomousDatabaseAdminPasswordSourceList AdminPasswordSource { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList">OdbAutonomousDatabaseAdminPasswordSourceList</a>

---

##### `AllocatedStorageSizeInTbs`<sup>Required</sup> <a name="AllocatedStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```csharp
public double AllocatedStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availableUpgradeVersions"></a>

```csharp
public string[] AvailableUpgradeVersions { get; }
```

- *Type:* string[]

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CustomerContactsToSendToOci`<sup>Required</sup> <a name="CustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOci"></a>

```csharp
public OdbAutonomousDatabaseCustomerContactsToSendToOciList CustomerContactsToSendToOci { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList">OdbAutonomousDatabaseCustomerContactsToSendToOciList</a>

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseType"></a>

```csharp
public string DatabaseType { get; }
```

- *Type:* string

---

##### `DbToolsDetails`<sup>Required</sup> <a name="DbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetails"></a>

```csharp
public OdbAutonomousDatabaseDbToolsDetailsList DbToolsDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList">OdbAutonomousDatabaseDbToolsDetailsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LongTermBackupSchedule`<sup>Required</sup> <a name="LongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupSchedule"></a>

```csharp
public OdbAutonomousDatabaseLongTermBackupScheduleList LongTermBackupSchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList">OdbAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociResourceAnchorName"></a>

```csharp
public string OciResourceAnchorName { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `OdbNetworkArn`<sup>Required</sup> <a name="OdbNetworkArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkArn"></a>

```csharp
public string OdbNetworkArn { get; }
```

- *Type:* string

---

##### `PercentProgress`<sup>Required</sup> <a name="PercentProgress" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.percentProgress"></a>

```csharp
public double PercentProgress { get; }
```

- *Type:* double

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpoint"></a>

```csharp
public string PrivateEndpoint { get; }
```

- *Type:* string

---

##### `ResourcePoolSummary`<sup>Required</sup> <a name="ResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummary"></a>

```csharp
public OdbAutonomousDatabaseResourcePoolSummaryList ResourcePoolSummary { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList">OdbAutonomousDatabaseResourcePoolSummaryList</a>

---

##### `ScheduledOperations`<sup>Required</sup> <a name="ScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperations"></a>

```csharp
public OdbAutonomousDatabaseScheduledOperationsList ScheduledOperations { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList">OdbAutonomousDatabaseScheduledOperationsList</a>

---

##### `ServiceConsoleUrl`<sup>Required</sup> <a name="ServiceConsoleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.serviceConsoleUrl"></a>

```csharp
public string ServiceConsoleUrl { get; }
```

- *Type:* string

---

##### `SourceConfiguration`<sup>Required</sup> <a name="SourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfiguration"></a>

```csharp
public OdbAutonomousDatabaseSourceConfigurationList SourceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList">OdbAutonomousDatabaseSourceConfigurationList</a>

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceId"></a>

```csharp
public string SourceId { get; }
```

- *Type:* string

---

##### `SqlWebDeveloperUrl`<sup>Required</sup> <a name="SqlWebDeveloperUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sqlWebDeveloperUrl"></a>

```csharp
public string SqlWebDeveloperUrl { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeouts"></a>

```csharp
public OdbAutonomousDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference">OdbAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `TransportableTablespace`<sup>Required</sup> <a name="TransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespace"></a>

```csharp
public OdbAutonomousDatabaseTransportableTablespaceList TransportableTablespace { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList">OdbAutonomousDatabaseTransportableTablespaceList</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AdminPasswordSourceInput`<sup>Optional</sup> <a name="AdminPasswordSourceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSourceInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseAdminPasswordSource[] AdminPasswordSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>[]

---

##### `AdminPasswordWoInput`<sup>Optional</sup> <a name="AdminPasswordWoInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoInput"></a>

```csharp
public string AdminPasswordWoInput { get; }
```

- *Type:* string

---

##### `AdminPasswordWoVersionInput`<sup>Optional</sup> <a name="AdminPasswordWoVersionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersionInput"></a>

```csharp
public double AdminPasswordWoVersionInput { get; }
```

- *Type:* double

---

##### `AllowlistedIpsInput`<sup>Optional</sup> <a name="AllowlistedIpsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIpsInput"></a>

```csharp
public string[] AllowlistedIpsInput { get; }
```

- *Type:* string[]

---

##### `AutonomousMaintenanceScheduleTypeInput`<sup>Optional</sup> <a name="AutonomousMaintenanceScheduleTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput"></a>

```csharp
public string AutonomousMaintenanceScheduleTypeInput { get; }
```

- *Type:* string

---

##### `AutoRefreshFrequencyInSecondsInput`<sup>Optional</sup> <a name="AutoRefreshFrequencyInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput"></a>

```csharp
public double AutoRefreshFrequencyInSecondsInput { get; }
```

- *Type:* double

---

##### `AutoRefreshPointLagInSecondsInput`<sup>Optional</sup> <a name="AutoRefreshPointLagInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSecondsInput"></a>

```csharp
public double AutoRefreshPointLagInSecondsInput { get; }
```

- *Type:* double

---

##### `BackupRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInDaysInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDaysInput"></a>

```csharp
public double BackupRetentionPeriodInDaysInput { get; }
```

- *Type:* double

---

##### `ByolComputeCountLimitInput`<sup>Optional</sup> <a name="ByolComputeCountLimitInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimitInput"></a>

```csharp
public double ByolComputeCountLimitInput { get; }
```

- *Type:* double

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSetInput"></a>

```csharp
public string CharacterSetInput { get; }
```

- *Type:* string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCountInput"></a>

```csharp
public double ComputeCountInput { get; }
```

- *Type:* double

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCountInput"></a>

```csharp
public double CpuCoreCountInput { get; }
```

- *Type:* double

---

##### `CustomerContactsToSendToOciInput`<sup>Optional</sup> <a name="CustomerContactsToSendToOciInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOciInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseCustomerContactsToSendToOci[] CustomerContactsToSendToOciInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>[]

---

##### `DatabaseEditionInput`<sup>Optional</sup> <a name="DatabaseEditionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEditionInput"></a>

```csharp
public string DatabaseEditionInput { get; }
```

- *Type:* string

---

##### `DataStorageSizeInGbsInput`<sup>Optional</sup> <a name="DataStorageSizeInGbsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbsInput"></a>

```csharp
public double DataStorageSizeInGbsInput { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTbsInput`<sup>Optional</sup> <a name="DataStorageSizeInTbsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbsInput"></a>

```csharp
public double DataStorageSizeInTbsInput { get; }
```

- *Type:* double

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbNameInput"></a>

```csharp
public string DbNameInput { get; }
```

- *Type:* string

---

##### `DbToolsDetailsInput`<sup>Optional</sup> <a name="DbToolsDetailsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetailsInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseDbToolsDetails[] DbToolsDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>[]

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersionInput"></a>

```csharp
public string DbVersionInput { get; }
```

- *Type:* string

---

##### `DbWorkloadInput`<sup>Optional</sup> <a name="DbWorkloadInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkloadInput"></a>

```csharp
public string DbWorkloadInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyProviderInput`<sup>Optional</sup> <a name="EncryptionKeyProviderInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProviderInput"></a>

```csharp
public string EncryptionKeyProviderInput { get; }
```

- *Type:* string

---

##### `IsAutoScalingEnabledInput`<sup>Optional</sup> <a name="IsAutoScalingEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabledInput"></a>

```csharp
public bool|IResolvable IsAutoScalingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsAutoScalingForStorageEnabledInput`<sup>Optional</sup> <a name="IsAutoScalingForStorageEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabledInput"></a>

```csharp
public bool|IResolvable IsAutoScalingForStorageEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsBackupRetentionLockedInput`<sup>Optional</sup> <a name="IsBackupRetentionLockedInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLockedInput"></a>

```csharp
public bool|IResolvable IsBackupRetentionLockedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsLocalDataGuardEnabledInput`<sup>Optional</sup> <a name="IsLocalDataGuardEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabledInput"></a>

```csharp
public bool|IResolvable IsLocalDataGuardEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsMtlsConnectionRequiredInput`<sup>Optional</sup> <a name="IsMtlsConnectionRequiredInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequiredInput"></a>

```csharp
public bool|IResolvable IsMtlsConnectionRequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsRefreshableCloneInput`<sup>Optional</sup> <a name="IsRefreshableCloneInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableCloneInput"></a>

```csharp
public bool|IResolvable IsRefreshableCloneInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `LocalAdgAutoFailoverMaxDataLossLimitInput`<sup>Optional</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimitInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput"></a>

```csharp
public double LocalAdgAutoFailoverMaxDataLossLimitInput { get; }
```

- *Type:* double

---

##### `LongTermBackupScheduleInput`<sup>Optional</sup> <a name="LongTermBackupScheduleInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupScheduleInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseLongTermBackupSchedule[] LongTermBackupScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>[]

---

##### `NcharacterSetInput`<sup>Optional</sup> <a name="NcharacterSetInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSetInput"></a>

```csharp
public string NcharacterSetInput { get; }
```

- *Type:* string

---

##### `OdbNetworkIdInput`<sup>Optional</sup> <a name="OdbNetworkIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkIdInput"></a>

```csharp
public string OdbNetworkIdInput { get; }
```

- *Type:* string

---

##### `OpenModeInput`<sup>Optional</sup> <a name="OpenModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openModeInput"></a>

```csharp
public string OpenModeInput { get; }
```

- *Type:* string

---

##### `PermissionLevelInput`<sup>Optional</sup> <a name="PermissionLevelInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevelInput"></a>

```csharp
public string PermissionLevelInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointIpInput`<sup>Optional</sup> <a name="PrivateEndpointIpInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIpInput"></a>

```csharp
public string PrivateEndpointIpInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointLabelInput`<sup>Optional</sup> <a name="PrivateEndpointLabelInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabelInput"></a>

```csharp
public string PrivateEndpointLabelInput { get; }
```

- *Type:* string

---

##### `RefreshableModeInput`<sup>Optional</sup> <a name="RefreshableModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableModeInput"></a>

```csharp
public string RefreshableModeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourcePoolLeaderIdInput`<sup>Optional</sup> <a name="ResourcePoolLeaderIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderIdInput"></a>

```csharp
public string ResourcePoolLeaderIdInput { get; }
```

- *Type:* string

---

##### `ResourcePoolSummaryInput`<sup>Optional</sup> <a name="ResourcePoolSummaryInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummaryInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseResourcePoolSummary[] ResourcePoolSummaryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>[]

---

##### `ScheduledOperationsInput`<sup>Optional</sup> <a name="ScheduledOperationsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperationsInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseScheduledOperations[] ScheduledOperationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>[]

---

##### `SourceConfigurationInput`<sup>Optional</sup> <a name="SourceConfigurationInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfigurationInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfiguration[] SourceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>[]

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `StandbyAllowlistedIpsInput`<sup>Optional</sup> <a name="StandbyAllowlistedIpsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsInput"></a>

```csharp
public string[] StandbyAllowlistedIpsInput { get; }
```

- *Type:* string[]

---

##### `StandbyAllowlistedIpsSourceInput`<sup>Optional</sup> <a name="StandbyAllowlistedIpsSourceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSourceInput"></a>

```csharp
public string StandbyAllowlistedIpsSourceInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeOfAutoRefreshStartInput`<sup>Optional</sup> <a name="TimeOfAutoRefreshStartInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStartInput"></a>

```csharp
public string TimeOfAutoRefreshStartInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeoutsInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

---

##### `TransportableTablespaceInput`<sup>Optional</sup> <a name="TransportableTablespaceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespaceInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseTransportableTablespace[] TransportableTablespaceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>[]

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### ~~`AdminPasswordWo`~~<sup>Required</sup> <a name="AdminPasswordWo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string AdminPasswordWo { get; }
```

- *Type:* string

---

##### `AdminPasswordWoVersion`<sup>Required</sup> <a name="AdminPasswordWoVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersion"></a>

```csharp
public double AdminPasswordWoVersion { get; }
```

- *Type:* double

---

##### `AllowlistedIps`<sup>Required</sup> <a name="AllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIps"></a>

```csharp
public string[] AllowlistedIps { get; }
```

- *Type:* string[]

---

##### `AutonomousMaintenanceScheduleType`<sup>Required</sup> <a name="AutonomousMaintenanceScheduleType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleType"></a>

```csharp
public string AutonomousMaintenanceScheduleType { get; }
```

- *Type:* string

---

##### `AutoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="AutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds"></a>

```csharp
public double AutoRefreshFrequencyInSeconds { get; }
```

- *Type:* double

---

##### `AutoRefreshPointLagInSeconds`<sup>Required</sup> <a name="AutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSeconds"></a>

```csharp
public double AutoRefreshPointLagInSeconds { get; }
```

- *Type:* double

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```csharp
public double BackupRetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `ByolComputeCountLimit`<sup>Required</sup> <a name="ByolComputeCountLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimit"></a>

```csharp
public double ByolComputeCountLimit { get; }
```

- *Type:* double

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; }
```

- *Type:* string

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbs"></a>

```csharp
public double DataStorageSizeInGbs { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EncryptionKeyProvider`<sup>Required</sup> <a name="EncryptionKeyProvider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProvider"></a>

```csharp
public string EncryptionKeyProvider { get; }
```

- *Type:* string

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabled"></a>

```csharp
public bool|IResolvable IsAutoScalingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsAutoScalingForStorageEnabled`<sup>Required</sup> <a name="IsAutoScalingForStorageEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabled"></a>

```csharp
public bool|IResolvable IsAutoScalingForStorageEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsBackupRetentionLocked`<sup>Required</sup> <a name="IsBackupRetentionLocked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLocked"></a>

```csharp
public bool|IResolvable IsBackupRetentionLocked { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsLocalDataGuardEnabled`<sup>Required</sup> <a name="IsLocalDataGuardEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabled"></a>

```csharp
public bool|IResolvable IsLocalDataGuardEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsMtlsConnectionRequired`<sup>Required</sup> <a name="IsMtlsConnectionRequired" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequired"></a>

```csharp
public bool|IResolvable IsMtlsConnectionRequired { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableClone"></a>

```csharp
public bool|IResolvable IsRefreshableClone { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```csharp
public double LocalAdgAutoFailoverMaxDataLossLimit { get; }
```

- *Type:* double

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; }
```

- *Type:* string

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; }
```

- *Type:* string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openMode"></a>

```csharp
public string OpenMode { get; }
```

- *Type:* string

---

##### `PermissionLevel`<sup>Required</sup> <a name="PermissionLevel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevel"></a>

```csharp
public string PermissionLevel { get; }
```

- *Type:* string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; }
```

- *Type:* string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabel"></a>

```csharp
public string PrivateEndpointLabel { get; }
```

- *Type:* string

---

##### `RefreshableMode`<sup>Required</sup> <a name="RefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableMode"></a>

```csharp
public string RefreshableMode { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourcePoolLeaderId`<sup>Required</sup> <a name="ResourcePoolLeaderId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderId"></a>

```csharp
public string ResourcePoolLeaderId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `StandbyAllowlistedIps`<sup>Required</sup> <a name="StandbyAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIps"></a>

```csharp
public string[] StandbyAllowlistedIps { get; }
```

- *Type:* string[]

---

##### `StandbyAllowlistedIpsSource`<sup>Required</sup> <a name="StandbyAllowlistedIpsSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSource"></a>

```csharp
public string StandbyAllowlistedIpsSource { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeOfAutoRefreshStart`<sup>Required</sup> <a name="TimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStart"></a>

```csharp
public string TimeOfAutoRefreshStart { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbAutonomousDatabaseAdminPasswordSource <a name="OdbAutonomousDatabaseAdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseAdminPasswordSource {
    IResolvable|OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret[] CustomerManagedAwsSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.property.customerManagedAwsSecret">CustomerManagedAwsSecret</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>[]</code> | customer_managed_aws_secret block. |

---

##### `CustomerManagedAwsSecret`<sup>Optional</sup> <a name="CustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.property.customerManagedAwsSecret"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret[] CustomerManagedAwsSecret { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>[]

customer_managed_aws_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#customer_managed_aws_secret OdbAutonomousDatabase#customer_managed_aws_secret}

---

### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret {
    string ExternalIdType,
    string IamRoleArn,
    string SecretArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.externalIdType">ExternalIdType</a></code> | <code>string</code> | Type of OCI identifier supplied as the external ID when OCI assumes the IAM role. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | ARN of the customer-managed IAM role OCI assumes to retrieve the secret. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.secretArn">SecretArn</a></code> | <code>string</code> | ARN of the AWS Secrets Manager secret that contains the ADMIN password. |

---

##### `ExternalIdType`<sup>Required</sup> <a name="ExternalIdType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.externalIdType"></a>

```csharp
public string ExternalIdType { get; set; }
```

- *Type:* string

Type of OCI identifier supplied as the external ID when OCI assumes the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#external_id_type OdbAutonomousDatabase#external_id_type}

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

ARN of the customer-managed IAM role OCI assumes to retrieve the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#iam_role_arn OdbAutonomousDatabase#iam_role_arn}

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

ARN of the AWS Secrets Manager secret that contains the ADMIN password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#secret_arn OdbAutonomousDatabase#secret_arn}

---

### OdbAutonomousDatabaseConfig <a name="OdbAutonomousDatabaseConfig" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AdminPassword = null,
    IResolvable|OdbAutonomousDatabaseAdminPasswordSource[] AdminPasswordSource = null,
    string AdminPasswordWo = null,
    double AdminPasswordWoVersion = null,
    string[] AllowlistedIps = null,
    string AutonomousMaintenanceScheduleType = null,
    double AutoRefreshFrequencyInSeconds = null,
    double AutoRefreshPointLagInSeconds = null,
    double BackupRetentionPeriodInDays = null,
    double ByolComputeCountLimit = null,
    string CharacterSet = null,
    double ComputeCount = null,
    double CpuCoreCount = null,
    IResolvable|OdbAutonomousDatabaseCustomerContactsToSendToOci[] CustomerContactsToSendToOci = null,
    string DatabaseEdition = null,
    double DataStorageSizeInGbs = null,
    double DataStorageSizeInTbs = null,
    string DbName = null,
    IResolvable|OdbAutonomousDatabaseDbToolsDetails[] DbToolsDetails = null,
    string DbVersion = null,
    string DbWorkload = null,
    string DisplayName = null,
    string EncryptionKeyProvider = null,
    bool|IResolvable IsAutoScalingEnabled = null,
    bool|IResolvable IsAutoScalingForStorageEnabled = null,
    bool|IResolvable IsBackupRetentionLocked = null,
    bool|IResolvable IsLocalDataGuardEnabled = null,
    bool|IResolvable IsMtlsConnectionRequired = null,
    bool|IResolvable IsRefreshableClone = null,
    string KmsKeyId = null,
    string LicenseModel = null,
    double LocalAdgAutoFailoverMaxDataLossLimit = null,
    IResolvable|OdbAutonomousDatabaseLongTermBackupSchedule[] LongTermBackupSchedule = null,
    string NcharacterSet = null,
    string OdbNetworkId = null,
    string OpenMode = null,
    string PermissionLevel = null,
    string PrivateEndpointIp = null,
    string PrivateEndpointLabel = null,
    string RefreshableMode = null,
    string Region = null,
    string ResourcePoolLeaderId = null,
    IResolvable|OdbAutonomousDatabaseResourcePoolSummary[] ResourcePoolSummary = null,
    IResolvable|OdbAutonomousDatabaseScheduledOperations[] ScheduledOperations = null,
    string Source = null,
    IResolvable|OdbAutonomousDatabaseSourceConfiguration[] SourceConfiguration = null,
    string[] StandbyAllowlistedIps = null,
    string StandbyAllowlistedIpsSource = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string TimeOfAutoRefreshStart = null,
    OdbAutonomousDatabaseTimeouts Timeouts = null,
    IResolvable|OdbAutonomousDatabaseTransportableTablespace[] TransportableTablespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Password for the ADMIN user. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordSource">AdminPasswordSource</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>[]</code> | admin_password_source block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWo">AdminPasswordWo</a></code> | <code>string</code> | Password for the ADMIN user. This write-only value is never stored in Terraform state. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWoVersion">AdminPasswordWoVersion</a></code> | <code>double</code> | Arbitrary version used to trigger an ADMIN password update. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.allowlistedIps">AllowlistedIps</a></code> | <code>string[]</code> | IP addresses allowed to access the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType">AutonomousMaintenanceScheduleType</a></code> | <code>string</code> | Maintenance schedule type for the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds">AutoRefreshFrequencyInSeconds</a></code> | <code>double</code> | Frequency at which a refreshable clone is automatically refreshed, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds">AutoRefreshPointLagInSeconds</a></code> | <code>double</code> | Time lag between a refreshable clone and its source, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>double</code> | Retention period for automatic backups, in days. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.byolComputeCountLimit">ByolComputeCountLimit</a></code> | <code>double</code> | Maximum compute capacity under the bring-your-own-license model. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.characterSet">CharacterSet</a></code> | <code>string</code> | Character set of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.computeCount">ComputeCount</a></code> | <code>double</code> | Compute capacity in ECPUs or OCPUs. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | Number of CPU cores allocated to the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.customerContactsToSendToOci">CustomerContactsToSendToOci</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>[]</code> | customer_contacts_to_send_to_oci block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.databaseEdition">DatabaseEdition</a></code> | <code>string</code> | Oracle Database edition. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>double</code> | Data volume size in GB. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>double</code> | Data volume size in TB. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbName">DbName</a></code> | <code>string</code> | Name of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbToolsDetails">DbToolsDetails</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>[]</code> | db_tools_details block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbVersion">DbVersion</a></code> | <code>string</code> | Oracle Database software version. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | Intended database workload. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-friendly name for the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.encryptionKeyProvider">EncryptionKeyProvider</a></code> | <code>string</code> | Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether automatic compute scaling is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled">IsAutoScalingForStorageEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether automatic storage scaling is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isBackupRetentionLocked">IsBackupRetentionLocked</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the backup retention period is locked. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isLocalDataGuardEnabled">IsLocalDataGuardEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether local Oracle Data Guard is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isMtlsConnectionRequired">IsMtlsConnectionRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether mutual TLS authentication is required. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the Autonomous Database is a refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | ARN of the AWS KMS key used to encrypt the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Oracle license model. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>double</code> | Maximum data-loss limit for automatic local Data Guard failover, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.longTermBackupSchedule">LongTermBackupSchedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>[]</code> | long_term_backup_schedule block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.ncharacterSet">NcharacterSet</a></code> | <code>string</code> | National character set of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.odbNetworkId">OdbNetworkId</a></code> | <code>string</code> | ID of the associated ODB network. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.openMode">OpenMode</a></code> | <code>string</code> | Open mode of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.permissionLevel">PermissionLevel</a></code> | <code>string</code> | Permission level of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | Private endpoint IP address. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>string</code> | Private endpoint label. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.refreshableMode">RefreshableMode</a></code> | <code>string</code> | Refresh mode of a refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolLeaderId">ResourcePoolLeaderId</a></code> | <code>string</code> | ID of the resource-pool leader Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolSummary">ResourcePoolSummary</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>[]</code> | resource_pool_summary block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.scheduledOperations">ScheduledOperations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>[]</code> | scheduled_operations block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.source">Source</a></code> | <code>string</code> | Source from which to create the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.sourceConfiguration">SourceConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>[]</code> | source_configuration block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIps">StandbyAllowlistedIps</a></code> | <code>string[]</code> | IP addresses allowed to access the standby Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIpsSource">StandbyAllowlistedIpsSource</a></code> | <code>string</code> | Source of the standby allowlisted IP addresses. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeOfAutoRefreshStart">TimeOfAutoRefreshStart</a></code> | <code>string</code> | Date and time when automatic refresh begins. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.transportableTablespace">TransportableTablespace</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>[]</code> | transportable_tablespace block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Password for the ADMIN user.

This value is stored in Terraform state. Use admin_password_wo with Terraform 1.11 or later to avoid storing the password in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#admin_password OdbAutonomousDatabase#admin_password}

---

##### `AdminPasswordSource`<sup>Optional</sup> <a name="AdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordSource"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseAdminPasswordSource[] AdminPasswordSource { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>[]

admin_password_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#admin_password_source OdbAutonomousDatabase#admin_password_source}

---

##### `AdminPasswordWo`<sup>Optional</sup> <a name="AdminPasswordWo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWo"></a>

```csharp
public string AdminPasswordWo { get; set; }
```

- *Type:* string

Password for the ADMIN user. This write-only value is never stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#admin_password_wo OdbAutonomousDatabase#admin_password_wo}

---

##### `AdminPasswordWoVersion`<sup>Optional</sup> <a name="AdminPasswordWoVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWoVersion"></a>

```csharp
public double AdminPasswordWoVersion { get; set; }
```

- *Type:* double

Arbitrary version used to trigger an ADMIN password update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#admin_password_wo_version OdbAutonomousDatabase#admin_password_wo_version}

---

##### `AllowlistedIps`<sup>Optional</sup> <a name="AllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.allowlistedIps"></a>

```csharp
public string[] AllowlistedIps { get; set; }
```

- *Type:* string[]

IP addresses allowed to access the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#allowlisted_ips OdbAutonomousDatabase#allowlisted_ips}

---

##### `AutonomousMaintenanceScheduleType`<sup>Optional</sup> <a name="AutonomousMaintenanceScheduleType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType"></a>

```csharp
public string AutonomousMaintenanceScheduleType { get; set; }
```

- *Type:* string

Maintenance schedule type for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#autonomous_maintenance_schedule_type OdbAutonomousDatabase#autonomous_maintenance_schedule_type}

---

##### `AutoRefreshFrequencyInSeconds`<sup>Optional</sup> <a name="AutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds"></a>

```csharp
public double AutoRefreshFrequencyInSeconds { get; set; }
```

- *Type:* double

Frequency at which a refreshable clone is automatically refreshed, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#auto_refresh_frequency_in_seconds OdbAutonomousDatabase#auto_refresh_frequency_in_seconds}

---

##### `AutoRefreshPointLagInSeconds`<sup>Optional</sup> <a name="AutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds"></a>

```csharp
public double AutoRefreshPointLagInSeconds { get; set; }
```

- *Type:* double

Time lag between a refreshable clone and its source, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#auto_refresh_point_lag_in_seconds OdbAutonomousDatabase#auto_refresh_point_lag_in_seconds}

---

##### `BackupRetentionPeriodInDays`<sup>Optional</sup> <a name="BackupRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.backupRetentionPeriodInDays"></a>

```csharp
public double BackupRetentionPeriodInDays { get; set; }
```

- *Type:* double

Retention period for automatic backups, in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#backup_retention_period_in_days OdbAutonomousDatabase#backup_retention_period_in_days}

---

##### `ByolComputeCountLimit`<sup>Optional</sup> <a name="ByolComputeCountLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.byolComputeCountLimit"></a>

```csharp
public double ByolComputeCountLimit { get; set; }
```

- *Type:* double

Maximum compute capacity under the bring-your-own-license model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#byol_compute_count_limit OdbAutonomousDatabase#byol_compute_count_limit}

---

##### `CharacterSet`<sup>Optional</sup> <a name="CharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.characterSet"></a>

```csharp
public string CharacterSet { get; set; }
```

- *Type:* string

Character set of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#character_set OdbAutonomousDatabase#character_set}

---

##### `ComputeCount`<sup>Optional</sup> <a name="ComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.computeCount"></a>

```csharp
public double ComputeCount { get; set; }
```

- *Type:* double

Compute capacity in ECPUs or OCPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#compute_count OdbAutonomousDatabase#compute_count}

---

##### `CpuCoreCount`<sup>Optional</sup> <a name="CpuCoreCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; set; }
```

- *Type:* double

Number of CPU cores allocated to the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#cpu_core_count OdbAutonomousDatabase#cpu_core_count}

---

##### `CustomerContactsToSendToOci`<sup>Optional</sup> <a name="CustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.customerContactsToSendToOci"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseCustomerContactsToSendToOci[] CustomerContactsToSendToOci { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>[]

customer_contacts_to_send_to_oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#customer_contacts_to_send_to_oci OdbAutonomousDatabase#customer_contacts_to_send_to_oci}

---

##### `DatabaseEdition`<sup>Optional</sup> <a name="DatabaseEdition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.databaseEdition"></a>

```csharp
public string DatabaseEdition { get; set; }
```

- *Type:* string

Oracle Database edition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#database_edition OdbAutonomousDatabase#database_edition}

---

##### `DataStorageSizeInGbs`<sup>Optional</sup> <a name="DataStorageSizeInGbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInGbs"></a>

```csharp
public double DataStorageSizeInGbs { get; set; }
```

- *Type:* double

Data volume size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#data_storage_size_in_gbs OdbAutonomousDatabase#data_storage_size_in_gbs}

---

##### `DataStorageSizeInTbs`<sup>Optional</sup> <a name="DataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInTbs"></a>

```csharp
public double DataStorageSizeInTbs { get; set; }
```

- *Type:* double

Data volume size in TB.

Configured values must be whole numbers; computed values may be fractional when storage is configured in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#data_storage_size_in_tbs OdbAutonomousDatabase#data_storage_size_in_tbs}

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbName"></a>

```csharp
public string DbName { get; set; }
```

- *Type:* string

Name of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#db_name OdbAutonomousDatabase#db_name}

---

##### `DbToolsDetails`<sup>Optional</sup> <a name="DbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbToolsDetails"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseDbToolsDetails[] DbToolsDetails { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>[]

db_tools_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#db_tools_details OdbAutonomousDatabase#db_tools_details}

---

##### `DbVersion`<sup>Optional</sup> <a name="DbVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbVersion"></a>

```csharp
public string DbVersion { get; set; }
```

- *Type:* string

Oracle Database software version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#db_version OdbAutonomousDatabase#db_version}

---

##### `DbWorkload`<sup>Optional</sup> <a name="DbWorkload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; set; }
```

- *Type:* string

Intended database workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#db_workload OdbAutonomousDatabase#db_workload}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-friendly name for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#display_name OdbAutonomousDatabase#display_name}

---

##### `EncryptionKeyProvider`<sup>Optional</sup> <a name="EncryptionKeyProvider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.encryptionKeyProvider"></a>

```csharp
public string EncryptionKeyProvider { get; set; }
```

- *Type:* string

Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#encryption_key_provider OdbAutonomousDatabase#encryption_key_provider}

---

##### `IsAutoScalingEnabled`<sup>Optional</sup> <a name="IsAutoScalingEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingEnabled"></a>

```csharp
public bool|IResolvable IsAutoScalingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether automatic compute scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_auto_scaling_enabled OdbAutonomousDatabase#is_auto_scaling_enabled}

---

##### `IsAutoScalingForStorageEnabled`<sup>Optional</sup> <a name="IsAutoScalingForStorageEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled"></a>

```csharp
public bool|IResolvable IsAutoScalingForStorageEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether automatic storage scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_auto_scaling_for_storage_enabled OdbAutonomousDatabase#is_auto_scaling_for_storage_enabled}

---

##### `IsBackupRetentionLocked`<sup>Optional</sup> <a name="IsBackupRetentionLocked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isBackupRetentionLocked"></a>

```csharp
public bool|IResolvable IsBackupRetentionLocked { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the backup retention period is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_backup_retention_locked OdbAutonomousDatabase#is_backup_retention_locked}

---

##### `IsLocalDataGuardEnabled`<sup>Optional</sup> <a name="IsLocalDataGuardEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isLocalDataGuardEnabled"></a>

```csharp
public bool|IResolvable IsLocalDataGuardEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether local Oracle Data Guard is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_local_data_guard_enabled OdbAutonomousDatabase#is_local_data_guard_enabled}

---

##### `IsMtlsConnectionRequired`<sup>Optional</sup> <a name="IsMtlsConnectionRequired" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isMtlsConnectionRequired"></a>

```csharp
public bool|IResolvable IsMtlsConnectionRequired { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether mutual TLS authentication is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_mtls_connection_required OdbAutonomousDatabase#is_mtls_connection_required}

---

##### `IsRefreshableClone`<sup>Optional</sup> <a name="IsRefreshableClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isRefreshableClone"></a>

```csharp
public bool|IResolvable IsRefreshableClone { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the Autonomous Database is a refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_refreshable_clone OdbAutonomousDatabase#is_refreshable_clone}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

ARN of the AWS KMS key used to encrypt the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#kms_key_id OdbAutonomousDatabase#kms_key_id}

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Oracle license model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#license_model OdbAutonomousDatabase#license_model}

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Optional</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```csharp
public double LocalAdgAutoFailoverMaxDataLossLimit { get; set; }
```

- *Type:* double

Maximum data-loss limit for automatic local Data Guard failover, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#local_adg_auto_failover_max_data_loss_limit OdbAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}

---

##### `LongTermBackupSchedule`<sup>Optional</sup> <a name="LongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.longTermBackupSchedule"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseLongTermBackupSchedule[] LongTermBackupSchedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>[]

long_term_backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#long_term_backup_schedule OdbAutonomousDatabase#long_term_backup_schedule}

---

##### `NcharacterSet`<sup>Optional</sup> <a name="NcharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.ncharacterSet"></a>

```csharp
public string NcharacterSet { get; set; }
```

- *Type:* string

National character set of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#ncharacter_set OdbAutonomousDatabase#ncharacter_set}

---

##### `OdbNetworkId`<sup>Optional</sup> <a name="OdbNetworkId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.odbNetworkId"></a>

```csharp
public string OdbNetworkId { get; set; }
```

- *Type:* string

ID of the associated ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#odb_network_id OdbAutonomousDatabase#odb_network_id}

---

##### `OpenMode`<sup>Optional</sup> <a name="OpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.openMode"></a>

```csharp
public string OpenMode { get; set; }
```

- *Type:* string

Open mode of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#open_mode OdbAutonomousDatabase#open_mode}

---

##### `PermissionLevel`<sup>Optional</sup> <a name="PermissionLevel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.permissionLevel"></a>

```csharp
public string PermissionLevel { get; set; }
```

- *Type:* string

Permission level of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#permission_level OdbAutonomousDatabase#permission_level}

---

##### `PrivateEndpointIp`<sup>Optional</sup> <a name="PrivateEndpointIp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; set; }
```

- *Type:* string

Private endpoint IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#private_endpoint_ip OdbAutonomousDatabase#private_endpoint_ip}

---

##### `PrivateEndpointLabel`<sup>Optional</sup> <a name="PrivateEndpointLabel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointLabel"></a>

```csharp
public string PrivateEndpointLabel { get; set; }
```

- *Type:* string

Private endpoint label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#private_endpoint_label OdbAutonomousDatabase#private_endpoint_label}

---

##### `RefreshableMode`<sup>Optional</sup> <a name="RefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.refreshableMode"></a>

```csharp
public string RefreshableMode { get; set; }
```

- *Type:* string

Refresh mode of a refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#refreshable_mode OdbAutonomousDatabase#refreshable_mode}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#region OdbAutonomousDatabase#region}

---

##### `ResourcePoolLeaderId`<sup>Optional</sup> <a name="ResourcePoolLeaderId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolLeaderId"></a>

```csharp
public string ResourcePoolLeaderId { get; set; }
```

- *Type:* string

ID of the resource-pool leader Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#resource_pool_leader_id OdbAutonomousDatabase#resource_pool_leader_id}

---

##### `ResourcePoolSummary`<sup>Optional</sup> <a name="ResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolSummary"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseResourcePoolSummary[] ResourcePoolSummary { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>[]

resource_pool_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#resource_pool_summary OdbAutonomousDatabase#resource_pool_summary}

---

##### `ScheduledOperations`<sup>Optional</sup> <a name="ScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.scheduledOperations"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseScheduledOperations[] ScheduledOperations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>[]

scheduled_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#scheduled_operations OdbAutonomousDatabase#scheduled_operations}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Source from which to create the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source OdbAutonomousDatabase#source}

---

##### `SourceConfiguration`<sup>Optional</sup> <a name="SourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.sourceConfiguration"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfiguration[] SourceConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>[]

source_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_configuration OdbAutonomousDatabase#source_configuration}

---

##### `StandbyAllowlistedIps`<sup>Optional</sup> <a name="StandbyAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIps"></a>

```csharp
public string[] StandbyAllowlistedIps { get; set; }
```

- *Type:* string[]

IP addresses allowed to access the standby Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips OdbAutonomousDatabase#standby_allowlisted_ips}

---

##### `StandbyAllowlistedIpsSource`<sup>Optional</sup> <a name="StandbyAllowlistedIpsSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIpsSource"></a>

```csharp
public string StandbyAllowlistedIpsSource { get; set; }
```

- *Type:* string

Source of the standby allowlisted IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips_source OdbAutonomousDatabase#standby_allowlisted_ips_source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}.

---

##### `TimeOfAutoRefreshStart`<sup>Optional</sup> <a name="TimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeOfAutoRefreshStart"></a>

```csharp
public string TimeOfAutoRefreshStart { get; set; }
```

- *Type:* string

Date and time when automatic refresh begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#time_of_auto_refresh_start OdbAutonomousDatabase#time_of_auto_refresh_start}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeouts"></a>

```csharp
public OdbAutonomousDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#timeouts OdbAutonomousDatabase#timeouts}

---

##### `TransportableTablespace`<sup>Optional</sup> <a name="TransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.transportableTablespace"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseTransportableTablespace[] TransportableTablespace { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>[]

transportable_tablespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#transportable_tablespace OdbAutonomousDatabase#transportable_tablespace}

---

### OdbAutonomousDatabaseCustomerContactsToSendToOci <a name="OdbAutonomousDatabaseCustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseCustomerContactsToSendToOci {
    string Email
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.property.email">Email</a></code> | <code>string</code> | Email address of the customer contact. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Email address of the customer contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#email OdbAutonomousDatabase#email}

---

### OdbAutonomousDatabaseDbToolsDetails <a name="OdbAutonomousDatabaseDbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseDbToolsDetails {
    double ComputeCount = null,
    bool|IResolvable IsEnabled = null,
    double MaxIdleTimeInMinutes = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.computeCount">ComputeCount</a></code> | <code>double</code> | Compute capacity allocated to the database tool. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the database tool is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes">MaxIdleTimeInMinutes</a></code> | <code>double</code> | Maximum idle time before the database tool is shut down, in minutes. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.name">Name</a></code> | <code>string</code> | Name of the database tool. |

---

##### `ComputeCount`<sup>Optional</sup> <a name="ComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.computeCount"></a>

```csharp
public double ComputeCount { get; set; }
```

- *Type:* double

Compute capacity allocated to the database tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#compute_count OdbAutonomousDatabase#compute_count}

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the database tool is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_enabled OdbAutonomousDatabase#is_enabled}

---

##### `MaxIdleTimeInMinutes`<sup>Optional</sup> <a name="MaxIdleTimeInMinutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes"></a>

```csharp
public double MaxIdleTimeInMinutes { get; set; }
```

- *Type:* double

Maximum idle time before the database tool is shut down, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#max_idle_time_in_minutes OdbAutonomousDatabase#max_idle_time_in_minutes}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the database tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#name OdbAutonomousDatabase#name}

---

### OdbAutonomousDatabaseLongTermBackupSchedule <a name="OdbAutonomousDatabaseLongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseLongTermBackupSchedule {
    bool|IResolvable IsDisabled = null,
    string RepeatCadence = null,
    double RetentionPeriodInDays = null,
    string TimeOfBackup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.isDisabled">IsDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the long-term backup schedule is disabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence">RepeatCadence</a></code> | <code>string</code> | Cadence at which long-term backups are taken. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | Retention period for long-term backups, in days. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup">TimeOfBackup</a></code> | <code>string</code> | Date and time at which the long-term backup is taken. |

---

##### `IsDisabled`<sup>Optional</sup> <a name="IsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.isDisabled"></a>

```csharp
public bool|IResolvable IsDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the long-term backup schedule is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_disabled OdbAutonomousDatabase#is_disabled}

---

##### `RepeatCadence`<sup>Optional</sup> <a name="RepeatCadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence"></a>

```csharp
public string RepeatCadence { get; set; }
```

- *Type:* string

Cadence at which long-term backups are taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#repeat_cadence OdbAutonomousDatabase#repeat_cadence}

---

##### `RetentionPeriodInDays`<sup>Optional</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; set; }
```

- *Type:* double

Retention period for long-term backups, in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#retention_period_in_days OdbAutonomousDatabase#retention_period_in_days}

---

##### `TimeOfBackup`<sup>Optional</sup> <a name="TimeOfBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup"></a>

```csharp
public string TimeOfBackup { get; set; }
```

- *Type:* string

Date and time at which the long-term backup is taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#time_of_backup OdbAutonomousDatabase#time_of_backup}

---

### OdbAutonomousDatabaseResourcePoolSummary <a name="OdbAutonomousDatabaseResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseResourcePoolSummary {
    bool|IResolvable IsDisabled = null,
    double PoolSize = null,
    double PoolStorageSizeInTbs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.isDisabled">IsDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the resource pool is disabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolSize">PoolSize</a></code> | <code>double</code> | Number of Autonomous Databases the resource pool can contain. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolStorageSizeInTbs">PoolStorageSizeInTbs</a></code> | <code>double</code> | Total storage size of the resource pool, in TB. |

---

##### `IsDisabled`<sup>Optional</sup> <a name="IsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.isDisabled"></a>

```csharp
public bool|IResolvable IsDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the resource pool is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_disabled OdbAutonomousDatabase#is_disabled}

---

##### `PoolSize`<sup>Optional</sup> <a name="PoolSize" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolSize"></a>

```csharp
public double PoolSize { get; set; }
```

- *Type:* double

Number of Autonomous Databases the resource pool can contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#pool_size OdbAutonomousDatabase#pool_size}

---

##### `PoolStorageSizeInTbs`<sup>Optional</sup> <a name="PoolStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolStorageSizeInTbs"></a>

```csharp
public double PoolStorageSizeInTbs { get; set; }
```

- *Type:* double

Total storage size of the resource pool, in TB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#pool_storage_size_in_tbs OdbAutonomousDatabase#pool_storage_size_in_tbs}

---

### OdbAutonomousDatabaseScheduledOperations <a name="OdbAutonomousDatabaseScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseScheduledOperations {
    string DayOfWeek,
    string ScheduledStartTime = null,
    string ScheduledStopTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Day of the week. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStartTime">ScheduledStartTime</a></code> | <code>string</code> | Scheduled start time in UTC. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStopTime">ScheduledStopTime</a></code> | <code>string</code> | Scheduled stop time in UTC. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Day of the week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#day_of_week OdbAutonomousDatabase#day_of_week}

---

##### `ScheduledStartTime`<sup>Optional</sup> <a name="ScheduledStartTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStartTime"></a>

```csharp
public string ScheduledStartTime { get; set; }
```

- *Type:* string

Scheduled start time in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#scheduled_start_time OdbAutonomousDatabase#scheduled_start_time}

---

##### `ScheduledStopTime`<sup>Optional</sup> <a name="ScheduledStopTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStopTime"></a>

```csharp
public string ScheduledStopTime { get; set; }
```

- *Type:* string

Scheduled stop time in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#scheduled_stop_time OdbAutonomousDatabase#scheduled_stop_time}

---

### OdbAutonomousDatabaseSourceConfiguration <a name="OdbAutonomousDatabaseSourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfiguration {
    IResolvable|OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable[] CloneToRefreshable = null,
    IResolvable|OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard[] CrossRegionDataGuard = null,
    IResolvable|OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery[] CrossRegionDisasterRecovery = null,
    IResolvable|OdbAutonomousDatabaseSourceConfigurationDatabaseClone[] DatabaseClone = null,
    IResolvable|OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore[] PointInTimeRestore = null,
    IResolvable|OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup[] RestoreFromBackup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.cloneToRefreshable">CloneToRefreshable</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>[]</code> | clone_to_refreshable block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDataGuard">CrossRegionDataGuard</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>[]</code> | cross_region_data_guard block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDisasterRecovery">CrossRegionDisasterRecovery</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>[]</code> | cross_region_disaster_recovery block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.databaseClone">DatabaseClone</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>[]</code> | database_clone block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.pointInTimeRestore">PointInTimeRestore</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>[]</code> | point_in_time_restore block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.restoreFromBackup">RestoreFromBackup</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>[]</code> | restore_from_backup block. |

---

##### `CloneToRefreshable`<sup>Optional</sup> <a name="CloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.cloneToRefreshable"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable[] CloneToRefreshable { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>[]

clone_to_refreshable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_to_refreshable OdbAutonomousDatabase#clone_to_refreshable}

---

##### `CrossRegionDataGuard`<sup>Optional</sup> <a name="CrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDataGuard"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard[] CrossRegionDataGuard { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>[]

cross_region_data_guard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#cross_region_data_guard OdbAutonomousDatabase#cross_region_data_guard}

---

##### `CrossRegionDisasterRecovery`<sup>Optional</sup> <a name="CrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDisasterRecovery"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery[] CrossRegionDisasterRecovery { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>[]

cross_region_disaster_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#cross_region_disaster_recovery OdbAutonomousDatabase#cross_region_disaster_recovery}

---

##### `DatabaseClone`<sup>Optional</sup> <a name="DatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.databaseClone"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationDatabaseClone[] DatabaseClone { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>[]

database_clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#database_clone OdbAutonomousDatabase#database_clone}

---

##### `PointInTimeRestore`<sup>Optional</sup> <a name="PointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.pointInTimeRestore"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore[] PointInTimeRestore { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>[]

point_in_time_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#point_in_time_restore OdbAutonomousDatabase#point_in_time_restore}

---

##### `RestoreFromBackup`<sup>Optional</sup> <a name="RestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.restoreFromBackup"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup[] RestoreFromBackup { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>[]

restore_from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#restore_from_backup OdbAutonomousDatabase#restore_from_backup}

---

### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable {
    string SourceAutonomousDatabaseId,
    double AutoRefreshFrequencyInSeconds = null,
    double AutoRefreshPointLagInSeconds = null,
    string CloneType = null,
    string OpenMode = null,
    string RefreshableMode = null,
    string TimeOfAutoRefreshStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>string</code> | ID of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshFrequencyInSeconds">AutoRefreshFrequencyInSeconds</a></code> | <code>double</code> | Frequency at which the refreshable clone is automatically refreshed, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshPointLagInSeconds">AutoRefreshPointLagInSeconds</a></code> | <code>double</code> | Time lag between the refreshable clone and its source, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.cloneType">CloneType</a></code> | <code>string</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.openMode">OpenMode</a></code> | <code>string</code> | Open mode of the refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.refreshableMode">RefreshableMode</a></code> | <code>string</code> | Refresh mode of the clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.timeOfAutoRefreshStart">TimeOfAutoRefreshStart</a></code> | <code>string</code> | Date and time when automatic refresh starts. |

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.sourceAutonomousDatabaseId"></a>

```csharp
public string SourceAutonomousDatabaseId { get; set; }
```

- *Type:* string

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

##### `AutoRefreshFrequencyInSeconds`<sup>Optional</sup> <a name="AutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshFrequencyInSeconds"></a>

```csharp
public double AutoRefreshFrequencyInSeconds { get; set; }
```

- *Type:* double

Frequency at which the refreshable clone is automatically refreshed, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#auto_refresh_frequency_in_seconds OdbAutonomousDatabase#auto_refresh_frequency_in_seconds}

---

##### `AutoRefreshPointLagInSeconds`<sup>Optional</sup> <a name="AutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshPointLagInSeconds"></a>

```csharp
public double AutoRefreshPointLagInSeconds { get; set; }
```

- *Type:* double

Time lag between the refreshable clone and its source, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#auto_refresh_point_lag_in_seconds OdbAutonomousDatabase#auto_refresh_point_lag_in_seconds}

---

##### `CloneType`<sup>Optional</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.cloneType"></a>

```csharp
public string CloneType { get; set; }
```

- *Type:* string

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `OpenMode`<sup>Optional</sup> <a name="OpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.openMode"></a>

```csharp
public string OpenMode { get; set; }
```

- *Type:* string

Open mode of the refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#open_mode OdbAutonomousDatabase#open_mode}

---

##### `RefreshableMode`<sup>Optional</sup> <a name="RefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.refreshableMode"></a>

```csharp
public string RefreshableMode { get; set; }
```

- *Type:* string

Refresh mode of the clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#refreshable_mode OdbAutonomousDatabase#refreshable_mode}

---

##### `TimeOfAutoRefreshStart`<sup>Optional</sup> <a name="TimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.timeOfAutoRefreshStart"></a>

```csharp
public string TimeOfAutoRefreshStart { get; set; }
```

- *Type:* string

Date and time when automatic refresh starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#time_of_auto_refresh_start OdbAutonomousDatabase#time_of_auto_refresh_start}

---

### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard {
    string SourceAutonomousDatabaseArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.property.sourceAutonomousDatabaseArn">SourceAutonomousDatabaseArn</a></code> | <code>string</code> | ARN of the source Autonomous Database. |

---

##### `SourceAutonomousDatabaseArn`<sup>Required</sup> <a name="SourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.property.sourceAutonomousDatabaseArn"></a>

```csharp
public string SourceAutonomousDatabaseArn { get; set; }
```

- *Type:* string

ARN of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_arn OdbAutonomousDatabase#source_autonomous_database_arn}

---

### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery {
    string RemoteDisasterRecoveryType,
    string SourceAutonomousDatabaseArn,
    bool|IResolvable IsReplicateAutomaticBackups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType">RemoteDisasterRecoveryType</a></code> | <code>string</code> | Type of remote disaster recovery. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseArn">SourceAutonomousDatabaseArn</a></code> | <code>string</code> | ARN of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.isReplicateAutomaticBackups">IsReplicateAutomaticBackups</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether automatic backups are replicated to the disaster recovery database. |

---

##### `RemoteDisasterRecoveryType`<sup>Required</sup> <a name="RemoteDisasterRecoveryType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType"></a>

```csharp
public string RemoteDisasterRecoveryType { get; set; }
```

- *Type:* string

Type of remote disaster recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#remote_disaster_recovery_type OdbAutonomousDatabase#remote_disaster_recovery_type}

---

##### `SourceAutonomousDatabaseArn`<sup>Required</sup> <a name="SourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseArn"></a>

```csharp
public string SourceAutonomousDatabaseArn { get; set; }
```

- *Type:* string

ARN of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_arn OdbAutonomousDatabase#source_autonomous_database_arn}

---

##### `IsReplicateAutomaticBackups`<sup>Optional</sup> <a name="IsReplicateAutomaticBackups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.isReplicateAutomaticBackups"></a>

```csharp
public bool|IResolvable IsReplicateAutomaticBackups { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether automatic backups are replicated to the disaster recovery database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#is_replicate_automatic_backups OdbAutonomousDatabase#is_replicate_automatic_backups}

---

### OdbAutonomousDatabaseSourceConfigurationDatabaseClone <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationDatabaseClone {
    string CloneType,
    string SourceAutonomousDatabaseId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.cloneType">CloneType</a></code> | <code>string</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>string</code> | ID of the source Autonomous Database. |

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.cloneType"></a>

```csharp
public string CloneType { get; set; }
```

- *Type:* string

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.sourceAutonomousDatabaseId"></a>

```csharp
public string SourceAutonomousDatabaseId { get; set; }
```

- *Type:* string

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore {
    string CloneType,
    string SourceAutonomousDatabaseId,
    double[] CloneTableSpaceList = null,
    string Timestamp = null,
    bool|IResolvable UseLatestAvailableBackupTimestamp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneType">CloneType</a></code> | <code>string</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>string</code> | ID of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneTableSpaceList">CloneTableSpaceList</a></code> | <code>double[]</code> | Tablespace IDs to clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.timestamp">Timestamp</a></code> | <code>string</code> | Date and time to which the database is restored. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.useLatestAvailableBackupTimestamp">UseLatestAvailableBackupTimestamp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to use the latest available backup timestamp. |

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneType"></a>

```csharp
public string CloneType { get; set; }
```

- *Type:* string

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.sourceAutonomousDatabaseId"></a>

```csharp
public string SourceAutonomousDatabaseId { get; set; }
```

- *Type:* string

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

##### `CloneTableSpaceList`<sup>Optional</sup> <a name="CloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneTableSpaceList"></a>

```csharp
public double[] CloneTableSpaceList { get; set; }
```

- *Type:* double[]

Tablespace IDs to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_table_space_list OdbAutonomousDatabase#clone_table_space_list}

---

##### `Timestamp`<sup>Optional</sup> <a name="Timestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.timestamp"></a>

```csharp
public string Timestamp { get; set; }
```

- *Type:* string

Date and time to which the database is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#timestamp OdbAutonomousDatabase#timestamp}

---

##### `UseLatestAvailableBackupTimestamp`<sup>Optional</sup> <a name="UseLatestAvailableBackupTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.useLatestAvailableBackupTimestamp"></a>

```csharp
public bool|IResolvable UseLatestAvailableBackupTimestamp { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to use the latest available backup timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#use_latest_available_backup_timestamp OdbAutonomousDatabase#use_latest_available_backup_timestamp}

---

### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup {
    string AutonomousDatabaseBackupId,
    string CloneType,
    double[] CloneTableSpaceList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.autonomousDatabaseBackupId">AutonomousDatabaseBackupId</a></code> | <code>string</code> | ID of the Autonomous Database backup. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneType">CloneType</a></code> | <code>string</code> | Type of clone to create from the backup. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneTableSpaceList">CloneTableSpaceList</a></code> | <code>double[]</code> | Tablespace IDs to clone. |

---

##### `AutonomousDatabaseBackupId`<sup>Required</sup> <a name="AutonomousDatabaseBackupId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.autonomousDatabaseBackupId"></a>

```csharp
public string AutonomousDatabaseBackupId { get; set; }
```

- *Type:* string

ID of the Autonomous Database backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#autonomous_database_backup_id OdbAutonomousDatabase#autonomous_database_backup_id}

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneType"></a>

```csharp
public string CloneType { get; set; }
```

- *Type:* string

Type of clone to create from the backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `CloneTableSpaceList`<sup>Optional</sup> <a name="CloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneTableSpaceList"></a>

```csharp
public double[] CloneTableSpaceList { get; set; }
```

- *Type:* double[]

Tablespace IDs to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#clone_table_space_list OdbAutonomousDatabase#clone_table_space_list}

---

### OdbAutonomousDatabaseTimeouts <a name="OdbAutonomousDatabaseTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#create OdbAutonomousDatabase#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#delete OdbAutonomousDatabase#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#update OdbAutonomousDatabase#update}

---

### OdbAutonomousDatabaseTransportableTablespace <a name="OdbAutonomousDatabaseTransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseTransportableTablespace {
    string TtsBundleUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.property.ttsBundleUrl">TtsBundleUrl</a></code> | <code>string</code> | URL of the transportable tablespace bundle. |

---

##### `TtsBundleUrl`<sup>Optional</sup> <a name="TtsBundleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.property.ttsBundleUrl"></a>

```csharp
public string TtsBundleUrl { get; set; }
```

- *Type:* string

URL of the transportable tablespace bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/resources/odb_autonomous_database#tts_bundle_url OdbAutonomousDatabase#tts_bundle_url}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get"></a>

```csharp
private OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>[]

---


### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdTypeInput">ExternalIdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType">ExternalIdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIdTypeInput`<sup>Optional</sup> <a name="ExternalIdTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdTypeInput"></a>

```csharp
public string ExternalIdTypeInput { get; }
```

- *Type:* string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `ExternalIdType`<sup>Required</sup> <a name="ExternalIdType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType"></a>

```csharp
public string ExternalIdType { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>

---


### OdbAutonomousDatabaseAdminPasswordSourceList <a name="OdbAutonomousDatabaseAdminPasswordSourceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseAdminPasswordSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.get"></a>

```csharp
private OdbAutonomousDatabaseAdminPasswordSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseAdminPasswordSource[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>[]

---


### OdbAutonomousDatabaseAdminPasswordSourceOutputReference <a name="OdbAutonomousDatabaseAdminPasswordSourceOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseAdminPasswordSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.putCustomerManagedAwsSecret">PutCustomerManagedAwsSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resetCustomerManagedAwsSecret">ResetCustomerManagedAwsSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerManagedAwsSecret` <a name="PutCustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.putCustomerManagedAwsSecret"></a>

```csharp
private void PutCustomerManagedAwsSecret(IResolvable|OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.putCustomerManagedAwsSecret.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>[]

---

##### `ResetCustomerManagedAwsSecret` <a name="ResetCustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resetCustomerManagedAwsSecret"></a>

```csharp
private void ResetCustomerManagedAwsSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret">CustomerManagedAwsSecret</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecretInput">CustomerManagedAwsSecretInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerManagedAwsSecret`<sup>Required</sup> <a name="CustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret"></a>

```csharp
public OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList CustomerManagedAwsSecret { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a>

---

##### `CustomerManagedAwsSecretInput`<sup>Optional</sup> <a name="CustomerManagedAwsSecretInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecretInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret[] CustomerManagedAwsSecretInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseAdminPasswordSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource">OdbAutonomousDatabaseAdminPasswordSource</a>

---


### OdbAutonomousDatabaseCustomerContactsToSendToOciList <a name="OdbAutonomousDatabaseCustomerContactsToSendToOciList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseCustomerContactsToSendToOciList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.get"></a>

```csharp
private OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseCustomerContactsToSendToOci[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>[]

---


### OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference <a name="OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseCustomerContactsToSendToOci InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci">OdbAutonomousDatabaseCustomerContactsToSendToOci</a>

---


### OdbAutonomousDatabaseDbToolsDetailsList <a name="OdbAutonomousDatabaseDbToolsDetailsList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseDbToolsDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.get"></a>

```csharp
private OdbAutonomousDatabaseDbToolsDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseDbToolsDetails[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>[]

---


### OdbAutonomousDatabaseDbToolsDetailsOutputReference <a name="OdbAutonomousDatabaseDbToolsDetailsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseDbToolsDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount">ResetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes">ResetMaxIdleTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeCount` <a name="ResetComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount"></a>

```csharp
private void ResetComputeCount()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetMaxIdleTimeInMinutes` <a name="ResetMaxIdleTimeInMinutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes"></a>

```csharp
private void ResetMaxIdleTimeInMinutes()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput">ComputeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput">MaxIdleTimeInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">MaxIdleTimeInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput"></a>

```csharp
public double ComputeCountInput { get; }
```

- *Type:* double

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxIdleTimeInMinutesInput`<sup>Optional</sup> <a name="MaxIdleTimeInMinutesInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput"></a>

```csharp
public double MaxIdleTimeInMinutesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxIdleTimeInMinutes`<sup>Required</sup> <a name="MaxIdleTimeInMinutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```csharp
public double MaxIdleTimeInMinutes { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseDbToolsDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails">OdbAutonomousDatabaseDbToolsDetails</a>

---


### OdbAutonomousDatabaseLongTermBackupScheduleList <a name="OdbAutonomousDatabaseLongTermBackupScheduleList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseLongTermBackupScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```csharp
private OdbAutonomousDatabaseLongTermBackupScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseLongTermBackupSchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>[]

---


### OdbAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="OdbAutonomousDatabaseLongTermBackupScheduleOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseLongTermBackupScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled">ResetIsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence">ResetRepeatCadence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays">ResetRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup">ResetTimeOfBackup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDisabled` <a name="ResetIsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled"></a>

```csharp
private void ResetIsDisabled()
```

##### `ResetRepeatCadence` <a name="ResetRepeatCadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence"></a>

```csharp
private void ResetRepeatCadence()
```

##### `ResetRetentionPeriodInDays` <a name="ResetRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays"></a>

```csharp
private void ResetRetentionPeriodInDays()
```

##### `ResetTimeOfBackup` <a name="ResetTimeOfBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup"></a>

```csharp
private void ResetTimeOfBackup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput">IsDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput">RepeatCadenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput">RetentionPeriodInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput">TimeOfBackupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled">IsDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">RepeatCadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">TimeOfBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDisabledInput`<sup>Optional</sup> <a name="IsDisabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput"></a>

```csharp
public bool|IResolvable IsDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RepeatCadenceInput`<sup>Optional</sup> <a name="RepeatCadenceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput"></a>

```csharp
public string RepeatCadenceInput { get; }
```

- *Type:* string

---

##### `RetentionPeriodInDaysInput`<sup>Optional</sup> <a name="RetentionPeriodInDaysInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput"></a>

```csharp
public double RetentionPeriodInDaysInput { get; }
```

- *Type:* double

---

##### `TimeOfBackupInput`<sup>Optional</sup> <a name="TimeOfBackupInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput"></a>

```csharp
public string TimeOfBackupInput { get; }
```

- *Type:* string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```csharp
public bool|IResolvable IsDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RepeatCadence`<sup>Required</sup> <a name="RepeatCadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```csharp
public string RepeatCadence { get; }
```

- *Type:* string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `TimeOfBackup`<sup>Required</sup> <a name="TimeOfBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```csharp
public string TimeOfBackup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseLongTermBackupSchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule">OdbAutonomousDatabaseLongTermBackupSchedule</a>

---


### OdbAutonomousDatabaseResourcePoolSummaryList <a name="OdbAutonomousDatabaseResourcePoolSummaryList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseResourcePoolSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.get"></a>

```csharp
private OdbAutonomousDatabaseResourcePoolSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseResourcePoolSummary[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>[]

---


### OdbAutonomousDatabaseResourcePoolSummaryOutputReference <a name="OdbAutonomousDatabaseResourcePoolSummaryOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseResourcePoolSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled">ResetIsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize">ResetPoolSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolStorageSizeInTbs">ResetPoolStorageSizeInTbs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDisabled` <a name="ResetIsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled"></a>

```csharp
private void ResetIsDisabled()
```

##### `ResetPoolSize` <a name="ResetPoolSize" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize"></a>

```csharp
private void ResetPoolSize()
```

##### `ResetPoolStorageSizeInTbs` <a name="ResetPoolStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolStorageSizeInTbs"></a>

```csharp
private void ResetPoolStorageSizeInTbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity">AvailableComputeCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs">AvailableStorageCapacityInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity">TotalComputeCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput">IsDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput">PoolSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbsInput">PoolStorageSizeInTbsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled">IsDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize">PoolSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs">PoolStorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableComputeCapacity`<sup>Required</sup> <a name="AvailableComputeCapacity" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity"></a>

```csharp
public double AvailableComputeCapacity { get; }
```

- *Type:* double

---

##### `AvailableStorageCapacityInTbs`<sup>Required</sup> <a name="AvailableStorageCapacityInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs"></a>

```csharp
public double AvailableStorageCapacityInTbs { get; }
```

- *Type:* double

---

##### `TotalComputeCapacity`<sup>Required</sup> <a name="TotalComputeCapacity" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity"></a>

```csharp
public double TotalComputeCapacity { get; }
```

- *Type:* double

---

##### `IsDisabledInput`<sup>Optional</sup> <a name="IsDisabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput"></a>

```csharp
public bool|IResolvable IsDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PoolSizeInput`<sup>Optional</sup> <a name="PoolSizeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput"></a>

```csharp
public double PoolSizeInput { get; }
```

- *Type:* double

---

##### `PoolStorageSizeInTbsInput`<sup>Optional</sup> <a name="PoolStorageSizeInTbsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbsInput"></a>

```csharp
public double PoolStorageSizeInTbsInput { get; }
```

- *Type:* double

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled"></a>

```csharp
public bool|IResolvable IsDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PoolSize`<sup>Required</sup> <a name="PoolSize" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize"></a>

```csharp
public double PoolSize { get; }
```

- *Type:* double

---

##### `PoolStorageSizeInTbs`<sup>Required</sup> <a name="PoolStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs"></a>

```csharp
public double PoolStorageSizeInTbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseResourcePoolSummary InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary">OdbAutonomousDatabaseResourcePoolSummary</a>

---


### OdbAutonomousDatabaseScheduledOperationsList <a name="OdbAutonomousDatabaseScheduledOperationsList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseScheduledOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.get"></a>

```csharp
private OdbAutonomousDatabaseScheduledOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseScheduledOperations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>[]

---


### OdbAutonomousDatabaseScheduledOperationsOutputReference <a name="OdbAutonomousDatabaseScheduledOperationsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseScheduledOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime">ResetScheduledStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime">ResetScheduledStopTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScheduledStartTime` <a name="ResetScheduledStartTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime"></a>

```csharp
private void ResetScheduledStartTime()
```

##### `ResetScheduledStopTime` <a name="ResetScheduledStopTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime"></a>

```csharp
private void ResetScheduledStopTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput">ScheduledStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput">ScheduledStopTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime">ScheduledStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime">ScheduledStopTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `ScheduledStartTimeInput`<sup>Optional</sup> <a name="ScheduledStartTimeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput"></a>

```csharp
public string ScheduledStartTimeInput { get; }
```

- *Type:* string

---

##### `ScheduledStopTimeInput`<sup>Optional</sup> <a name="ScheduledStopTimeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput"></a>

```csharp
public string ScheduledStopTimeInput { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `ScheduledStartTime`<sup>Required</sup> <a name="ScheduledStartTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```csharp
public string ScheduledStartTime { get; }
```

- *Type:* string

---

##### `ScheduledStopTime`<sup>Required</sup> <a name="ScheduledStopTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```csharp
public string ScheduledStopTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseScheduledOperations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations">OdbAutonomousDatabaseScheduledOperations</a>

---


### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.get"></a>

```csharp
private OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>[]

---


### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshFrequencyInSeconds">ResetAutoRefreshFrequencyInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshPointLagInSeconds">ResetAutoRefreshPointLagInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetCloneType">ResetCloneType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetOpenMode">ResetOpenMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetRefreshableMode">ResetRefreshableMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetTimeOfAutoRefreshStart">ResetTimeOfAutoRefreshStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRefreshFrequencyInSeconds` <a name="ResetAutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshFrequencyInSeconds"></a>

```csharp
private void ResetAutoRefreshFrequencyInSeconds()
```

##### `ResetAutoRefreshPointLagInSeconds` <a name="ResetAutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshPointLagInSeconds"></a>

```csharp
private void ResetAutoRefreshPointLagInSeconds()
```

##### `ResetCloneType` <a name="ResetCloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetCloneType"></a>

```csharp
private void ResetCloneType()
```

##### `ResetOpenMode` <a name="ResetOpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetOpenMode"></a>

```csharp
private void ResetOpenMode()
```

##### `ResetRefreshableMode` <a name="ResetRefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetRefreshableMode"></a>

```csharp
private void ResetRefreshableMode()
```

##### `ResetTimeOfAutoRefreshStart` <a name="ResetTimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetTimeOfAutoRefreshStart"></a>

```csharp
private void ResetTimeOfAutoRefreshStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSecondsInput">AutoRefreshFrequencyInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSecondsInput">AutoRefreshPointLagInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneTypeInput">CloneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openModeInput">OpenModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableModeInput">RefreshableModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseIdInput">SourceAutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStartInput">TimeOfAutoRefreshStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSeconds">AutoRefreshFrequencyInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSeconds">AutoRefreshPointLagInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneType">CloneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openMode">OpenMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableMode">RefreshableMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStart">TimeOfAutoRefreshStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoRefreshFrequencyInSecondsInput`<sup>Optional</sup> <a name="AutoRefreshFrequencyInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSecondsInput"></a>

```csharp
public double AutoRefreshFrequencyInSecondsInput { get; }
```

- *Type:* double

---

##### `AutoRefreshPointLagInSecondsInput`<sup>Optional</sup> <a name="AutoRefreshPointLagInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSecondsInput"></a>

```csharp
public double AutoRefreshPointLagInSecondsInput { get; }
```

- *Type:* double

---

##### `CloneTypeInput`<sup>Optional</sup> <a name="CloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneTypeInput"></a>

```csharp
public string CloneTypeInput { get; }
```

- *Type:* string

---

##### `OpenModeInput`<sup>Optional</sup> <a name="OpenModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openModeInput"></a>

```csharp
public string OpenModeInput { get; }
```

- *Type:* string

---

##### `RefreshableModeInput`<sup>Optional</sup> <a name="RefreshableModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableModeInput"></a>

```csharp
public string RefreshableModeInput { get; }
```

- *Type:* string

---

##### `SourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="SourceAutonomousDatabaseIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```csharp
public string SourceAutonomousDatabaseIdInput { get; }
```

- *Type:* string

---

##### `TimeOfAutoRefreshStartInput`<sup>Optional</sup> <a name="TimeOfAutoRefreshStartInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStartInput"></a>

```csharp
public string TimeOfAutoRefreshStartInput { get; }
```

- *Type:* string

---

##### `AutoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="AutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSeconds"></a>

```csharp
public double AutoRefreshFrequencyInSeconds { get; }
```

- *Type:* double

---

##### `AutoRefreshPointLagInSeconds`<sup>Required</sup> <a name="AutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSeconds"></a>

```csharp
public double AutoRefreshPointLagInSeconds { get; }
```

- *Type:* double

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneType"></a>

```csharp
public string CloneType { get; }
```

- *Type:* string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openMode"></a>

```csharp
public string OpenMode { get; }
```

- *Type:* string

---

##### `RefreshableMode`<sup>Required</sup> <a name="RefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableMode"></a>

```csharp
public string RefreshableMode { get; }
```

- *Type:* string

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseId"></a>

```csharp
public string SourceAutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `TimeOfAutoRefreshStart`<sup>Required</sup> <a name="TimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStart"></a>

```csharp
public string TimeOfAutoRefreshStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.get"></a>

```csharp
private OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>[]

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArnInput">SourceAutonomousDatabaseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArn">SourceAutonomousDatabaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceAutonomousDatabaseArnInput`<sup>Optional</sup> <a name="SourceAutonomousDatabaseArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArnInput"></a>

```csharp
public string SourceAutonomousDatabaseArnInput { get; }
```

- *Type:* string

---

##### `SourceAutonomousDatabaseArn`<sup>Required</sup> <a name="SourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArn"></a>

```csharp
public string SourceAutonomousDatabaseArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.get"></a>

```csharp
private OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>[]

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resetIsReplicateAutomaticBackups">ResetIsReplicateAutomaticBackups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsReplicateAutomaticBackups` <a name="ResetIsReplicateAutomaticBackups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resetIsReplicateAutomaticBackups"></a>

```csharp
private void ResetIsReplicateAutomaticBackups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackupsInput">IsReplicateAutomaticBackupsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryTypeInput">RemoteDisasterRecoveryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArnInput">SourceAutonomousDatabaseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackups">IsReplicateAutomaticBackups</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryType">RemoteDisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArn">SourceAutonomousDatabaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsReplicateAutomaticBackupsInput`<sup>Optional</sup> <a name="IsReplicateAutomaticBackupsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackupsInput"></a>

```csharp
public bool|IResolvable IsReplicateAutomaticBackupsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RemoteDisasterRecoveryTypeInput`<sup>Optional</sup> <a name="RemoteDisasterRecoveryTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryTypeInput"></a>

```csharp
public string RemoteDisasterRecoveryTypeInput { get; }
```

- *Type:* string

---

##### `SourceAutonomousDatabaseArnInput`<sup>Optional</sup> <a name="SourceAutonomousDatabaseArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArnInput"></a>

```csharp
public string SourceAutonomousDatabaseArnInput { get; }
```

- *Type:* string

---

##### `IsReplicateAutomaticBackups`<sup>Required</sup> <a name="IsReplicateAutomaticBackups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackups"></a>

```csharp
public bool|IResolvable IsReplicateAutomaticBackups { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RemoteDisasterRecoveryType`<sup>Required</sup> <a name="RemoteDisasterRecoveryType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryType"></a>

```csharp
public string RemoteDisasterRecoveryType { get; }
```

- *Type:* string

---

##### `SourceAutonomousDatabaseArn`<sup>Required</sup> <a name="SourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArn"></a>

```csharp
public string SourceAutonomousDatabaseArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>

---


### OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.get"></a>

```csharp
private OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationDatabaseClone[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>[]

---


### OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneTypeInput">CloneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseIdInput">SourceAutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneType">CloneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloneTypeInput`<sup>Optional</sup> <a name="CloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneTypeInput"></a>

```csharp
public string CloneTypeInput { get; }
```

- *Type:* string

---

##### `SourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="SourceAutonomousDatabaseIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```csharp
public string SourceAutonomousDatabaseIdInput { get; }
```

- *Type:* string

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneType"></a>

```csharp
public string CloneType { get; }
```

- *Type:* string

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseId"></a>

```csharp
public string SourceAutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationDatabaseClone InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>

---


### OdbAutonomousDatabaseSourceConfigurationList <a name="OdbAutonomousDatabaseSourceConfigurationList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.get"></a>

```csharp
private OdbAutonomousDatabaseSourceConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>[]

---


### OdbAutonomousDatabaseSourceConfigurationOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCloneToRefreshable">PutCloneToRefreshable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDataGuard">PutCrossRegionDataGuard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDisasterRecovery">PutCrossRegionDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putDatabaseClone">PutDatabaseClone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putPointInTimeRestore">PutPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putRestoreFromBackup">PutRestoreFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCloneToRefreshable">ResetCloneToRefreshable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDataGuard">ResetCrossRegionDataGuard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDisasterRecovery">ResetCrossRegionDisasterRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetDatabaseClone">ResetDatabaseClone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetPointInTimeRestore">ResetPointInTimeRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetRestoreFromBackup">ResetRestoreFromBackup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloneToRefreshable` <a name="PutCloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCloneToRefreshable"></a>

```csharp
private void PutCloneToRefreshable(IResolvable|OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCloneToRefreshable.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>[]

---

##### `PutCrossRegionDataGuard` <a name="PutCrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDataGuard"></a>

```csharp
private void PutCrossRegionDataGuard(IResolvable|OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDataGuard.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>[]

---

##### `PutCrossRegionDisasterRecovery` <a name="PutCrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDisasterRecovery"></a>

```csharp
private void PutCrossRegionDisasterRecovery(IResolvable|OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDisasterRecovery.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>[]

---

##### `PutDatabaseClone` <a name="PutDatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putDatabaseClone"></a>

```csharp
private void PutDatabaseClone(IResolvable|OdbAutonomousDatabaseSourceConfigurationDatabaseClone[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putDatabaseClone.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>[]

---

##### `PutPointInTimeRestore` <a name="PutPointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putPointInTimeRestore"></a>

```csharp
private void PutPointInTimeRestore(IResolvable|OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putPointInTimeRestore.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>[]

---

##### `PutRestoreFromBackup` <a name="PutRestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putRestoreFromBackup"></a>

```csharp
private void PutRestoreFromBackup(IResolvable|OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putRestoreFromBackup.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>[]

---

##### `ResetCloneToRefreshable` <a name="ResetCloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCloneToRefreshable"></a>

```csharp
private void ResetCloneToRefreshable()
```

##### `ResetCrossRegionDataGuard` <a name="ResetCrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDataGuard"></a>

```csharp
private void ResetCrossRegionDataGuard()
```

##### `ResetCrossRegionDisasterRecovery` <a name="ResetCrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDisasterRecovery"></a>

```csharp
private void ResetCrossRegionDisasterRecovery()
```

##### `ResetDatabaseClone` <a name="ResetDatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetDatabaseClone"></a>

```csharp
private void ResetDatabaseClone()
```

##### `ResetPointInTimeRestore` <a name="ResetPointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetPointInTimeRestore"></a>

```csharp
private void ResetPointInTimeRestore()
```

##### `ResetRestoreFromBackup` <a name="ResetRestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetRestoreFromBackup"></a>

```csharp
private void ResetRestoreFromBackup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshable">CloneToRefreshable</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuard">CrossRegionDataGuard</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecovery">CrossRegionDisasterRecovery</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseClone">DatabaseClone</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList">OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestore">PointInTimeRestore</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackup">RestoreFromBackup</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshableInput">CloneToRefreshableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuardInput">CrossRegionDataGuardInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecoveryInput">CrossRegionDisasterRecoveryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseCloneInput">DatabaseCloneInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestoreInput">PointInTimeRestoreInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackupInput">RestoreFromBackupInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloneToRefreshable`<sup>Required</sup> <a name="CloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshable"></a>

```csharp
public OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList CloneToRefreshable { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList</a>

---

##### `CrossRegionDataGuard`<sup>Required</sup> <a name="CrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuard"></a>

```csharp
public OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList CrossRegionDataGuard { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList</a>

---

##### `CrossRegionDisasterRecovery`<sup>Required</sup> <a name="CrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecovery"></a>

```csharp
public OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList CrossRegionDisasterRecovery { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList</a>

---

##### `DatabaseClone`<sup>Required</sup> <a name="DatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseClone"></a>

```csharp
public OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList DatabaseClone { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList">OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList</a>

---

##### `PointInTimeRestore`<sup>Required</sup> <a name="PointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestore"></a>

```csharp
public OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList PointInTimeRestore { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList</a>

---

##### `RestoreFromBackup`<sup>Required</sup> <a name="RestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackup"></a>

```csharp
public OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList RestoreFromBackup { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList</a>

---

##### `CloneToRefreshableInput`<sup>Optional</sup> <a name="CloneToRefreshableInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshableInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable[] CloneToRefreshableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable</a>[]

---

##### `CrossRegionDataGuardInput`<sup>Optional</sup> <a name="CrossRegionDataGuardInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuardInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard[] CrossRegionDataGuardInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard</a>[]

---

##### `CrossRegionDisasterRecoveryInput`<sup>Optional</sup> <a name="CrossRegionDisasterRecoveryInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecoveryInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery[] CrossRegionDisasterRecoveryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery</a>[]

---

##### `DatabaseCloneInput`<sup>Optional</sup> <a name="DatabaseCloneInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseCloneInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationDatabaseClone[] DatabaseCloneInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone">OdbAutonomousDatabaseSourceConfigurationDatabaseClone</a>[]

---

##### `PointInTimeRestoreInput`<sup>Optional</sup> <a name="PointInTimeRestoreInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestoreInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore[] PointInTimeRestoreInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>[]

---

##### `RestoreFromBackupInput`<sup>Optional</sup> <a name="RestoreFromBackupInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackupInput"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup[] RestoreFromBackupInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration">OdbAutonomousDatabaseSourceConfiguration</a>

---


### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.get"></a>

```csharp
private OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>[]

---


### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetCloneTableSpaceList">ResetCloneTableSpaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetTimestamp">ResetTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetUseLatestAvailableBackupTimestamp">ResetUseLatestAvailableBackupTimestamp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloneTableSpaceList` <a name="ResetCloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetCloneTableSpaceList"></a>

```csharp
private void ResetCloneTableSpaceList()
```

##### `ResetTimestamp` <a name="ResetTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetTimestamp"></a>

```csharp
private void ResetTimestamp()
```

##### `ResetUseLatestAvailableBackupTimestamp` <a name="ResetUseLatestAvailableBackupTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetUseLatestAvailableBackupTimestamp"></a>

```csharp
private void ResetUseLatestAvailableBackupTimestamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceListInput">CloneTableSpaceListInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTypeInput">CloneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseIdInput">SourceAutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestampInput">TimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestampInput">UseLatestAvailableBackupTimestampInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceList">CloneTableSpaceList</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneType">CloneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestamp">UseLatestAvailableBackupTimestamp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloneTableSpaceListInput`<sup>Optional</sup> <a name="CloneTableSpaceListInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceListInput"></a>

```csharp
public double[] CloneTableSpaceListInput { get; }
```

- *Type:* double[]

---

##### `CloneTypeInput`<sup>Optional</sup> <a name="CloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTypeInput"></a>

```csharp
public string CloneTypeInput { get; }
```

- *Type:* string

---

##### `SourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="SourceAutonomousDatabaseIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```csharp
public string SourceAutonomousDatabaseIdInput { get; }
```

- *Type:* string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestampInput"></a>

```csharp
public string TimestampInput { get; }
```

- *Type:* string

---

##### `UseLatestAvailableBackupTimestampInput`<sup>Optional</sup> <a name="UseLatestAvailableBackupTimestampInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestampInput"></a>

```csharp
public bool|IResolvable UseLatestAvailableBackupTimestampInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CloneTableSpaceList`<sup>Required</sup> <a name="CloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceList"></a>

```csharp
public double[] CloneTableSpaceList { get; }
```

- *Type:* double[]

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneType"></a>

```csharp
public string CloneType { get; }
```

- *Type:* string

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseId"></a>

```csharp
public string SourceAutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `UseLatestAvailableBackupTimestamp`<sup>Required</sup> <a name="UseLatestAvailableBackupTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestamp"></a>

```csharp
public bool|IResolvable UseLatestAvailableBackupTimestamp { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore</a>

---


### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.get"></a>

```csharp
private OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>[]

---


### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resetCloneTableSpaceList">ResetCloneTableSpaceList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloneTableSpaceList` <a name="ResetCloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resetCloneTableSpaceList"></a>

```csharp
private void ResetCloneTableSpaceList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupIdInput">AutonomousDatabaseBackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceListInput">CloneTableSpaceListInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTypeInput">CloneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupId">AutonomousDatabaseBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceList">CloneTableSpaceList</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneType">CloneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseBackupIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseBackupIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupIdInput"></a>

```csharp
public string AutonomousDatabaseBackupIdInput { get; }
```

- *Type:* string

---

##### `CloneTableSpaceListInput`<sup>Optional</sup> <a name="CloneTableSpaceListInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceListInput"></a>

```csharp
public double[] CloneTableSpaceListInput { get; }
```

- *Type:* double[]

---

##### `CloneTypeInput`<sup>Optional</sup> <a name="CloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTypeInput"></a>

```csharp
public string CloneTypeInput { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseBackupId`<sup>Required</sup> <a name="AutonomousDatabaseBackupId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupId"></a>

```csharp
public string AutonomousDatabaseBackupId { get; }
```

- *Type:* string

---

##### `CloneTableSpaceList`<sup>Required</sup> <a name="CloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceList"></a>

```csharp
public double[] CloneTableSpaceList { get; }
```

- *Type:* double[]

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneType"></a>

```csharp
public string CloneType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup</a>

---


### OdbAutonomousDatabaseTimeoutsOutputReference <a name="OdbAutonomousDatabaseTimeoutsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

---


### OdbAutonomousDatabaseTransportableTablespaceList <a name="OdbAutonomousDatabaseTransportableTablespaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseTransportableTablespaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.get"></a>

```csharp
private OdbAutonomousDatabaseTransportableTablespaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseTransportableTablespace[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>[]

---


### OdbAutonomousDatabaseTransportableTablespaceOutputReference <a name="OdbAutonomousDatabaseTransportableTablespaceOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new OdbAutonomousDatabaseTransportableTablespaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resetTtsBundleUrl">ResetTtsBundleUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTtsBundleUrl` <a name="ResetTtsBundleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resetTtsBundleUrl"></a>

```csharp
private void ResetTtsBundleUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrlInput">TtsBundleUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrl">TtsBundleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TtsBundleUrlInput`<sup>Optional</sup> <a name="TtsBundleUrlInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrlInput"></a>

```csharp
public string TtsBundleUrlInput { get; }
```

- *Type:* string

---

##### `TtsBundleUrl`<sup>Required</sup> <a name="TtsBundleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrl"></a>

```csharp
public string TtsBundleUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OdbAutonomousDatabaseTransportableTablespace InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace">OdbAutonomousDatabaseTransportableTablespace</a>

---



