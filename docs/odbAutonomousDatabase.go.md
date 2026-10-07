# `odbAutonomousDatabase` Submodule <a name="`odbAutonomousDatabase` Submodule" id="@cdktn/provider-aws.odbAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbAutonomousDatabase <a name="OdbAutonomousDatabase" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database aws_odb_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabase(scope Construct, id *string, config OdbAutonomousDatabaseConfig) OdbAutonomousDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig">OdbAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdminPasswordSource` <a name="PutAdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putAdminPasswordSource"></a>

```go
func PutAdminPasswordSource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putAdminPasswordSource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCustomerContactsToSendToOci` <a name="PutCustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putCustomerContactsToSendToOci"></a>

```go
func PutCustomerContactsToSendToOci(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putCustomerContactsToSendToOci.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDbToolsDetails` <a name="PutDbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putDbToolsDetails"></a>

```go
func PutDbToolsDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putDbToolsDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLongTermBackupSchedule` <a name="PutLongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putLongTermBackupSchedule"></a>

```go
func PutLongTermBackupSchedule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putLongTermBackupSchedule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourcePoolSummary` <a name="PutResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putResourcePoolSummary"></a>

```go
func PutResourcePoolSummary(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putResourcePoolSummary.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScheduledOperations` <a name="PutScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putScheduledOperations"></a>

```go
func PutScheduledOperations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putScheduledOperations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceConfiguration` <a name="PutSourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putSourceConfiguration"></a>

```go
func PutSourceConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putSourceConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts"></a>

```go
func PutTimeouts(value OdbAutonomousDatabaseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

---

##### `PutTransportableTablespace` <a name="PutTransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTransportableTablespace"></a>

```go
func PutTransportableTablespace(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.putTransportableTablespace.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPassword"></a>

```go
func ResetAdminPassword()
```

##### `ResetAdminPasswordSource` <a name="ResetAdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordSource"></a>

```go
func ResetAdminPasswordSource()
```

##### `ResetAdminPasswordWo` <a name="ResetAdminPasswordWo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWo"></a>

```go
func ResetAdminPasswordWo()
```

##### `ResetAdminPasswordWoVersion` <a name="ResetAdminPasswordWoVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAdminPasswordWoVersion"></a>

```go
func ResetAdminPasswordWoVersion()
```

##### `ResetAllowlistedIps` <a name="ResetAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAllowlistedIps"></a>

```go
func ResetAllowlistedIps()
```

##### `ResetAutonomousMaintenanceScheduleType` <a name="ResetAutonomousMaintenanceScheduleType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutonomousMaintenanceScheduleType"></a>

```go
func ResetAutonomousMaintenanceScheduleType()
```

##### `ResetAutoRefreshFrequencyInSeconds` <a name="ResetAutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshFrequencyInSeconds"></a>

```go
func ResetAutoRefreshFrequencyInSeconds()
```

##### `ResetAutoRefreshPointLagInSeconds` <a name="ResetAutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetAutoRefreshPointLagInSeconds"></a>

```go
func ResetAutoRefreshPointLagInSeconds()
```

##### `ResetBackupRetentionPeriodInDays` <a name="ResetBackupRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetBackupRetentionPeriodInDays"></a>

```go
func ResetBackupRetentionPeriodInDays()
```

##### `ResetByolComputeCountLimit` <a name="ResetByolComputeCountLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetByolComputeCountLimit"></a>

```go
func ResetByolComputeCountLimit()
```

##### `ResetCharacterSet` <a name="ResetCharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCharacterSet"></a>

```go
func ResetCharacterSet()
```

##### `ResetComputeCount` <a name="ResetComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetComputeCount"></a>

```go
func ResetComputeCount()
```

##### `ResetCpuCoreCount` <a name="ResetCpuCoreCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCpuCoreCount"></a>

```go
func ResetCpuCoreCount()
```

##### `ResetCustomerContactsToSendToOci` <a name="ResetCustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetCustomerContactsToSendToOci"></a>

```go
func ResetCustomerContactsToSendToOci()
```

##### `ResetDatabaseEdition` <a name="ResetDatabaseEdition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDatabaseEdition"></a>

```go
func ResetDatabaseEdition()
```

##### `ResetDataStorageSizeInGbs` <a name="ResetDataStorageSizeInGbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInGbs"></a>

```go
func ResetDataStorageSizeInGbs()
```

##### `ResetDataStorageSizeInTbs` <a name="ResetDataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDataStorageSizeInTbs"></a>

```go
func ResetDataStorageSizeInTbs()
```

##### `ResetDbName` <a name="ResetDbName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbName"></a>

```go
func ResetDbName()
```

##### `ResetDbToolsDetails` <a name="ResetDbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbToolsDetails"></a>

```go
func ResetDbToolsDetails()
```

##### `ResetDbVersion` <a name="ResetDbVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbVersion"></a>

```go
func ResetDbVersion()
```

##### `ResetDbWorkload` <a name="ResetDbWorkload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDbWorkload"></a>

```go
func ResetDbWorkload()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEncryptionKeyProvider` <a name="ResetEncryptionKeyProvider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetEncryptionKeyProvider"></a>

```go
func ResetEncryptionKeyProvider()
```

##### `ResetIsAutoScalingEnabled` <a name="ResetIsAutoScalingEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingEnabled"></a>

```go
func ResetIsAutoScalingEnabled()
```

##### `ResetIsAutoScalingForStorageEnabled` <a name="ResetIsAutoScalingForStorageEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsAutoScalingForStorageEnabled"></a>

```go
func ResetIsAutoScalingForStorageEnabled()
```

##### `ResetIsBackupRetentionLocked` <a name="ResetIsBackupRetentionLocked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsBackupRetentionLocked"></a>

```go
func ResetIsBackupRetentionLocked()
```

##### `ResetIsLocalDataGuardEnabled` <a name="ResetIsLocalDataGuardEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsLocalDataGuardEnabled"></a>

```go
func ResetIsLocalDataGuardEnabled()
```

##### `ResetIsMtlsConnectionRequired` <a name="ResetIsMtlsConnectionRequired" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsMtlsConnectionRequired"></a>

```go
func ResetIsMtlsConnectionRequired()
```

##### `ResetIsRefreshableClone` <a name="ResetIsRefreshableClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetIsRefreshableClone"></a>

```go
func ResetIsRefreshableClone()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLicenseModel"></a>

```go
func ResetLicenseModel()
```

##### `ResetLocalAdgAutoFailoverMaxDataLossLimit` <a name="ResetLocalAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit"></a>

```go
func ResetLocalAdgAutoFailoverMaxDataLossLimit()
```

##### `ResetLongTermBackupSchedule` <a name="ResetLongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetLongTermBackupSchedule"></a>

```go
func ResetLongTermBackupSchedule()
```

##### `ResetNcharacterSet` <a name="ResetNcharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetNcharacterSet"></a>

```go
func ResetNcharacterSet()
```

##### `ResetOdbNetworkId` <a name="ResetOdbNetworkId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOdbNetworkId"></a>

```go
func ResetOdbNetworkId()
```

##### `ResetOpenMode` <a name="ResetOpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetOpenMode"></a>

```go
func ResetOpenMode()
```

##### `ResetPermissionLevel` <a name="ResetPermissionLevel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPermissionLevel"></a>

```go
func ResetPermissionLevel()
```

##### `ResetPrivateEndpointIp` <a name="ResetPrivateEndpointIp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointIp"></a>

```go
func ResetPrivateEndpointIp()
```

##### `ResetPrivateEndpointLabel` <a name="ResetPrivateEndpointLabel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetPrivateEndpointLabel"></a>

```go
func ResetPrivateEndpointLabel()
```

##### `ResetRefreshableMode` <a name="ResetRefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRefreshableMode"></a>

```go
func ResetRefreshableMode()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResourcePoolLeaderId` <a name="ResetResourcePoolLeaderId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolLeaderId"></a>

```go
func ResetResourcePoolLeaderId()
```

##### `ResetResourcePoolSummary` <a name="ResetResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetResourcePoolSummary"></a>

```go
func ResetResourcePoolSummary()
```

##### `ResetScheduledOperations` <a name="ResetScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetScheduledOperations"></a>

```go
func ResetScheduledOperations()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSource"></a>

```go
func ResetSource()
```

##### `ResetSourceConfiguration` <a name="ResetSourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetSourceConfiguration"></a>

```go
func ResetSourceConfiguration()
```

##### `ResetStandbyAllowlistedIps` <a name="ResetStandbyAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIps"></a>

```go
func ResetStandbyAllowlistedIps()
```

##### `ResetStandbyAllowlistedIpsSource` <a name="ResetStandbyAllowlistedIpsSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetStandbyAllowlistedIpsSource"></a>

```go
func ResetStandbyAllowlistedIpsSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeOfAutoRefreshStart` <a name="ResetTimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeOfAutoRefreshStart"></a>

```go
func ResetTimeOfAutoRefreshStart()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransportableTablespace` <a name="ResetTransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.resetTransportableTablespace"></a>

```go
func ResetTransportableTablespace()
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

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.OdbAutonomousDatabase_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.OdbAutonomousDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.OdbAutonomousDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.OdbAutonomousDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OdbAutonomousDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OdbAutonomousDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OdbAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OdbAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">ActualUsedDataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSource">AdminPasswordSource</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList">OdbAutonomousDatabaseAdminPasswordSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allocatedStorageSizeInTbs">AllocatedStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeModel">ComputeModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOci">CustomerContactsToSendToOci</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList">OdbAutonomousDatabaseCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetails">DbToolsDetails</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList">OdbAutonomousDatabaseDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupSchedule">LongTermBackupSchedule</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList">OdbAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociResourceAnchorName">OciResourceAnchorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.percentProgress">PercentProgress</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpoint">PrivateEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummary">ResourcePoolSummary</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList">OdbAutonomousDatabaseResourcePoolSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperations">ScheduledOperations</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList">OdbAutonomousDatabaseScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.serviceConsoleUrl">ServiceConsoleUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList">OdbAutonomousDatabaseSourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceId">SourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sqlWebDeveloperUrl">SqlWebDeveloperUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference">OdbAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespace">TransportableTablespace</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList">OdbAutonomousDatabaseTransportableTablespaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSourceInput">AdminPasswordSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoInput">AdminPasswordWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersionInput">AdminPasswordWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIpsInput">AllowlistedIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput">AutonomousMaintenanceScheduleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput">AutoRefreshFrequencyInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSecondsInput">AutoRefreshPointLagInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDaysInput">BackupRetentionPeriodInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimitInput">ByolComputeCountLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSetInput">CharacterSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCountInput">ComputeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOciInput">CustomerContactsToSendToOciInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEditionInput">DatabaseEditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbsInput">DataStorageSizeInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbsInput">DataStorageSizeInTbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbNameInput">DbNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetailsInput">DbToolsDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersionInput">DbVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkloadInput">DbWorkloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProviderInput">EncryptionKeyProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabledInput">IsAutoScalingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabledInput">IsAutoScalingForStorageEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLockedInput">IsBackupRetentionLockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabledInput">IsLocalDataGuardEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequiredInput">IsMtlsConnectionRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableCloneInput">IsRefreshableCloneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModelInput">LicenseModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput">LocalAdgAutoFailoverMaxDataLossLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupScheduleInput">LongTermBackupScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSetInput">NcharacterSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkIdInput">OdbNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openModeInput">OpenModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevelInput">PermissionLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIpInput">PrivateEndpointIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabelInput">PrivateEndpointLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableModeInput">RefreshableModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderIdInput">ResourcePoolLeaderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummaryInput">ResourcePoolSummaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperationsInput">ScheduledOperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfigurationInput">SourceConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsInput">StandbyAllowlistedIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSourceInput">StandbyAllowlistedIpsSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStartInput">TimeOfAutoRefreshStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespaceInput">TransportableTablespaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWo">AdminPasswordWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersion">AdminPasswordWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIps">AllowlistedIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleType">AutonomousMaintenanceScheduleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds">AutoRefreshFrequencyInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSeconds">AutoRefreshPointLagInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimit">ByolComputeCountLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEdition">DatabaseEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkload">DbWorkload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProvider">EncryptionKeyProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabled">IsAutoScalingForStorageEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLocked">IsBackupRetentionLocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabled">IsLocalDataGuardEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequired">IsMtlsConnectionRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSet">NcharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkId">OdbNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openMode">OpenMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevel">PermissionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableMode">RefreshableMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderId">ResourcePoolLeaderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIps">StandbyAllowlistedIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSource">StandbyAllowlistedIpsSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStart">TimeOfAutoRefreshStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActualUsedDataStorageSizeInTbs`<sup>Required</sup> <a name="ActualUsedDataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```go
func ActualUsedDataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `AdminPasswordSource`<sup>Required</sup> <a name="AdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSource"></a>

```go
func AdminPasswordSource() OdbAutonomousDatabaseAdminPasswordSourceList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList">OdbAutonomousDatabaseAdminPasswordSourceList</a>

---

##### `AllocatedStorageSizeInTbs`<sup>Required</sup> <a name="AllocatedStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```go
func AllocatedStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.availableUpgradeVersions"></a>

```go
func AvailableUpgradeVersions() *[]*string
```

- *Type:* *[]*string

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeModel"></a>

```go
func ComputeModel() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CustomerContactsToSendToOci`<sup>Required</sup> <a name="CustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOci"></a>

```go
func CustomerContactsToSendToOci() OdbAutonomousDatabaseCustomerContactsToSendToOciList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList">OdbAutonomousDatabaseCustomerContactsToSendToOciList</a>

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `DbToolsDetails`<sup>Required</sup> <a name="DbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetails"></a>

```go
func DbToolsDetails() OdbAutonomousDatabaseDbToolsDetailsList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList">OdbAutonomousDatabaseDbToolsDetailsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LongTermBackupSchedule`<sup>Required</sup> <a name="LongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupSchedule"></a>

```go
func LongTermBackupSchedule() OdbAutonomousDatabaseLongTermBackupScheduleList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList">OdbAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciResourceAnchorName`<sup>Required</sup> <a name="OciResourceAnchorName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociResourceAnchorName"></a>

```go
func OciResourceAnchorName() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `OdbNetworkArn`<sup>Required</sup> <a name="OdbNetworkArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkArn"></a>

```go
func OdbNetworkArn() *string
```

- *Type:* *string

---

##### `PercentProgress`<sup>Required</sup> <a name="PercentProgress" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.percentProgress"></a>

```go
func PercentProgress() *f64
```

- *Type:* *f64

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpoint"></a>

```go
func PrivateEndpoint() *string
```

- *Type:* *string

---

##### `ResourcePoolSummary`<sup>Required</sup> <a name="ResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummary"></a>

```go
func ResourcePoolSummary() OdbAutonomousDatabaseResourcePoolSummaryList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList">OdbAutonomousDatabaseResourcePoolSummaryList</a>

---

##### `ScheduledOperations`<sup>Required</sup> <a name="ScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperations"></a>

```go
func ScheduledOperations() OdbAutonomousDatabaseScheduledOperationsList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList">OdbAutonomousDatabaseScheduledOperationsList</a>

---

##### `ServiceConsoleUrl`<sup>Required</sup> <a name="ServiceConsoleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.serviceConsoleUrl"></a>

```go
func ServiceConsoleUrl() *string
```

- *Type:* *string

---

##### `SourceConfiguration`<sup>Required</sup> <a name="SourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfiguration"></a>

```go
func SourceConfiguration() OdbAutonomousDatabaseSourceConfigurationList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList">OdbAutonomousDatabaseSourceConfigurationList</a>

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceId"></a>

```go
func SourceId() *string
```

- *Type:* *string

---

##### `SqlWebDeveloperUrl`<sup>Required</sup> <a name="SqlWebDeveloperUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sqlWebDeveloperUrl"></a>

```go
func SqlWebDeveloperUrl() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeouts"></a>

```go
func Timeouts() OdbAutonomousDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference">OdbAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `TransportableTablespace`<sup>Required</sup> <a name="TransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespace"></a>

```go
func TransportableTablespace() OdbAutonomousDatabaseTransportableTablespaceList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList">OdbAutonomousDatabaseTransportableTablespaceList</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordInput"></a>

```go
func AdminPasswordInput() *string
```

- *Type:* *string

---

##### `AdminPasswordSourceInput`<sup>Optional</sup> <a name="AdminPasswordSourceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordSourceInput"></a>

```go
func AdminPasswordSourceInput() interface{}
```

- *Type:* interface{}

---

##### `AdminPasswordWoInput`<sup>Optional</sup> <a name="AdminPasswordWoInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoInput"></a>

```go
func AdminPasswordWoInput() *string
```

- *Type:* *string

---

##### `AdminPasswordWoVersionInput`<sup>Optional</sup> <a name="AdminPasswordWoVersionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersionInput"></a>

```go
func AdminPasswordWoVersionInput() *f64
```

- *Type:* *f64

---

##### `AllowlistedIpsInput`<sup>Optional</sup> <a name="AllowlistedIpsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIpsInput"></a>

```go
func AllowlistedIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutonomousMaintenanceScheduleTypeInput`<sup>Optional</sup> <a name="AutonomousMaintenanceScheduleTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput"></a>

```go
func AutonomousMaintenanceScheduleTypeInput() *string
```

- *Type:* *string

---

##### `AutoRefreshFrequencyInSecondsInput`<sup>Optional</sup> <a name="AutoRefreshFrequencyInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput"></a>

```go
func AutoRefreshFrequencyInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AutoRefreshPointLagInSecondsInput`<sup>Optional</sup> <a name="AutoRefreshPointLagInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSecondsInput"></a>

```go
func AutoRefreshPointLagInSecondsInput() *f64
```

- *Type:* *f64

---

##### `BackupRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInDaysInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDaysInput"></a>

```go
func BackupRetentionPeriodInDaysInput() *f64
```

- *Type:* *f64

---

##### `ByolComputeCountLimitInput`<sup>Optional</sup> <a name="ByolComputeCountLimitInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimitInput"></a>

```go
func ByolComputeCountLimitInput() *f64
```

- *Type:* *f64

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSetInput"></a>

```go
func CharacterSetInput() *string
```

- *Type:* *string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCountInput"></a>

```go
func ComputeCountInput() *f64
```

- *Type:* *f64

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCountInput"></a>

```go
func CpuCoreCountInput() *f64
```

- *Type:* *f64

---

##### `CustomerContactsToSendToOciInput`<sup>Optional</sup> <a name="CustomerContactsToSendToOciInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.customerContactsToSendToOciInput"></a>

```go
func CustomerContactsToSendToOciInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseEditionInput`<sup>Optional</sup> <a name="DatabaseEditionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEditionInput"></a>

```go
func DatabaseEditionInput() *string
```

- *Type:* *string

---

##### `DataStorageSizeInGbsInput`<sup>Optional</sup> <a name="DataStorageSizeInGbsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbsInput"></a>

```go
func DataStorageSizeInGbsInput() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInTbsInput`<sup>Optional</sup> <a name="DataStorageSizeInTbsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbsInput"></a>

```go
func DataStorageSizeInTbsInput() *f64
```

- *Type:* *f64

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbNameInput"></a>

```go
func DbNameInput() *string
```

- *Type:* *string

---

##### `DbToolsDetailsInput`<sup>Optional</sup> <a name="DbToolsDetailsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbToolsDetailsInput"></a>

```go
func DbToolsDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersionInput"></a>

```go
func DbVersionInput() *string
```

- *Type:* *string

---

##### `DbWorkloadInput`<sup>Optional</sup> <a name="DbWorkloadInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkloadInput"></a>

```go
func DbWorkloadInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionKeyProviderInput`<sup>Optional</sup> <a name="EncryptionKeyProviderInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProviderInput"></a>

```go
func EncryptionKeyProviderInput() *string
```

- *Type:* *string

---

##### `IsAutoScalingEnabledInput`<sup>Optional</sup> <a name="IsAutoScalingEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabledInput"></a>

```go
func IsAutoScalingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsAutoScalingForStorageEnabledInput`<sup>Optional</sup> <a name="IsAutoScalingForStorageEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabledInput"></a>

```go
func IsAutoScalingForStorageEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsBackupRetentionLockedInput`<sup>Optional</sup> <a name="IsBackupRetentionLockedInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLockedInput"></a>

```go
func IsBackupRetentionLockedInput() interface{}
```

- *Type:* interface{}

---

##### `IsLocalDataGuardEnabledInput`<sup>Optional</sup> <a name="IsLocalDataGuardEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabledInput"></a>

```go
func IsLocalDataGuardEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsMtlsConnectionRequiredInput`<sup>Optional</sup> <a name="IsMtlsConnectionRequiredInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequiredInput"></a>

```go
func IsMtlsConnectionRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `IsRefreshableCloneInput`<sup>Optional</sup> <a name="IsRefreshableCloneInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableCloneInput"></a>

```go
func IsRefreshableCloneInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModelInput"></a>

```go
func LicenseModelInput() *string
```

- *Type:* *string

---

##### `LocalAdgAutoFailoverMaxDataLossLimitInput`<sup>Optional</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimitInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput"></a>

```go
func LocalAdgAutoFailoverMaxDataLossLimitInput() *f64
```

- *Type:* *f64

---

##### `LongTermBackupScheduleInput`<sup>Optional</sup> <a name="LongTermBackupScheduleInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.longTermBackupScheduleInput"></a>

```go
func LongTermBackupScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `NcharacterSetInput`<sup>Optional</sup> <a name="NcharacterSetInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSetInput"></a>

```go
func NcharacterSetInput() *string
```

- *Type:* *string

---

##### `OdbNetworkIdInput`<sup>Optional</sup> <a name="OdbNetworkIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkIdInput"></a>

```go
func OdbNetworkIdInput() *string
```

- *Type:* *string

---

##### `OpenModeInput`<sup>Optional</sup> <a name="OpenModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openModeInput"></a>

```go
func OpenModeInput() *string
```

- *Type:* *string

---

##### `PermissionLevelInput`<sup>Optional</sup> <a name="PermissionLevelInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevelInput"></a>

```go
func PermissionLevelInput() *string
```

- *Type:* *string

---

##### `PrivateEndpointIpInput`<sup>Optional</sup> <a name="PrivateEndpointIpInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIpInput"></a>

```go
func PrivateEndpointIpInput() *string
```

- *Type:* *string

---

##### `PrivateEndpointLabelInput`<sup>Optional</sup> <a name="PrivateEndpointLabelInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabelInput"></a>

```go
func PrivateEndpointLabelInput() *string
```

- *Type:* *string

---

##### `RefreshableModeInput`<sup>Optional</sup> <a name="RefreshableModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableModeInput"></a>

```go
func RefreshableModeInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourcePoolLeaderIdInput`<sup>Optional</sup> <a name="ResourcePoolLeaderIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderIdInput"></a>

```go
func ResourcePoolLeaderIdInput() *string
```

- *Type:* *string

---

##### `ResourcePoolSummaryInput`<sup>Optional</sup> <a name="ResourcePoolSummaryInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolSummaryInput"></a>

```go
func ResourcePoolSummaryInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduledOperationsInput`<sup>Optional</sup> <a name="ScheduledOperationsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.scheduledOperationsInput"></a>

```go
func ScheduledOperationsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceConfigurationInput`<sup>Optional</sup> <a name="SourceConfigurationInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceConfigurationInput"></a>

```go
func SourceConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `StandbyAllowlistedIpsInput`<sup>Optional</sup> <a name="StandbyAllowlistedIpsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsInput"></a>

```go
func StandbyAllowlistedIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StandbyAllowlistedIpsSourceInput`<sup>Optional</sup> <a name="StandbyAllowlistedIpsSourceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSourceInput"></a>

```go
func StandbyAllowlistedIpsSourceInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeOfAutoRefreshStartInput`<sup>Optional</sup> <a name="TimeOfAutoRefreshStartInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStartInput"></a>

```go
func TimeOfAutoRefreshStartInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransportableTablespaceInput`<sup>Optional</sup> <a name="TransportableTablespaceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.transportableTablespaceInput"></a>

```go
func TransportableTablespaceInput() interface{}
```

- *Type:* interface{}

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### ~~`AdminPasswordWo`~~<sup>Required</sup> <a name="AdminPasswordWo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```go
func AdminPasswordWo() *string
```

- *Type:* *string

---

##### `AdminPasswordWoVersion`<sup>Required</sup> <a name="AdminPasswordWoVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.adminPasswordWoVersion"></a>

```go
func AdminPasswordWoVersion() *f64
```

- *Type:* *f64

---

##### `AllowlistedIps`<sup>Required</sup> <a name="AllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.allowlistedIps"></a>

```go
func AllowlistedIps() *[]*string
```

- *Type:* *[]*string

---

##### `AutonomousMaintenanceScheduleType`<sup>Required</sup> <a name="AutonomousMaintenanceScheduleType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autonomousMaintenanceScheduleType"></a>

```go
func AutonomousMaintenanceScheduleType() *string
```

- *Type:* *string

---

##### `AutoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="AutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshFrequencyInSeconds"></a>

```go
func AutoRefreshFrequencyInSeconds() *f64
```

- *Type:* *f64

---

##### `AutoRefreshPointLagInSeconds`<sup>Required</sup> <a name="AutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.autoRefreshPointLagInSeconds"></a>

```go
func AutoRefreshPointLagInSeconds() *f64
```

- *Type:* *f64

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```go
func BackupRetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `ByolComputeCountLimit`<sup>Required</sup> <a name="ByolComputeCountLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.byolComputeCountLimit"></a>

```go
func ByolComputeCountLimit() *f64
```

- *Type:* *f64

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `DatabaseEdition`<sup>Required</sup> <a name="DatabaseEdition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.databaseEdition"></a>

```go
func DatabaseEdition() *string
```

- *Type:* *string

---

##### `DataStorageSizeInGbs`<sup>Required</sup> <a name="DataStorageSizeInGbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInGbs"></a>

```go
func DataStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInTbs`<sup>Required</sup> <a name="DataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```go
func DataStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.dbWorkload"></a>

```go
func DbWorkload() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EncryptionKeyProvider`<sup>Required</sup> <a name="EncryptionKeyProvider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.encryptionKeyProvider"></a>

```go
func EncryptionKeyProvider() *string
```

- *Type:* *string

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingEnabled"></a>

```go
func IsAutoScalingEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsAutoScalingForStorageEnabled`<sup>Required</sup> <a name="IsAutoScalingForStorageEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isAutoScalingForStorageEnabled"></a>

```go
func IsAutoScalingForStorageEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsBackupRetentionLocked`<sup>Required</sup> <a name="IsBackupRetentionLocked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isBackupRetentionLocked"></a>

```go
func IsBackupRetentionLocked() interface{}
```

- *Type:* interface{}

---

##### `IsLocalDataGuardEnabled`<sup>Required</sup> <a name="IsLocalDataGuardEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isLocalDataGuardEnabled"></a>

```go
func IsLocalDataGuardEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsMtlsConnectionRequired`<sup>Required</sup> <a name="IsMtlsConnectionRequired" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isMtlsConnectionRequired"></a>

```go
func IsMtlsConnectionRequired() interface{}
```

- *Type:* interface{}

---

##### `IsRefreshableClone`<sup>Required</sup> <a name="IsRefreshableClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.isRefreshableClone"></a>

```go
func IsRefreshableClone() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```go
func LocalAdgAutoFailoverMaxDataLossLimit() *f64
```

- *Type:* *f64

---

##### `NcharacterSet`<sup>Required</sup> <a name="NcharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.ncharacterSet"></a>

```go
func NcharacterSet() *string
```

- *Type:* *string

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.odbNetworkId"></a>

```go
func OdbNetworkId() *string
```

- *Type:* *string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.openMode"></a>

```go
func OpenMode() *string
```

- *Type:* *string

---

##### `PermissionLevel`<sup>Required</sup> <a name="PermissionLevel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.permissionLevel"></a>

```go
func PermissionLevel() *string
```

- *Type:* *string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointIp"></a>

```go
func PrivateEndpointIp() *string
```

- *Type:* *string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.privateEndpointLabel"></a>

```go
func PrivateEndpointLabel() *string
```

- *Type:* *string

---

##### `RefreshableMode`<sup>Required</sup> <a name="RefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.refreshableMode"></a>

```go
func RefreshableMode() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourcePoolLeaderId`<sup>Required</sup> <a name="ResourcePoolLeaderId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.resourcePoolLeaderId"></a>

```go
func ResourcePoolLeaderId() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `StandbyAllowlistedIps`<sup>Required</sup> <a name="StandbyAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIps"></a>

```go
func StandbyAllowlistedIps() *[]*string
```

- *Type:* *[]*string

---

##### `StandbyAllowlistedIpsSource`<sup>Required</sup> <a name="StandbyAllowlistedIpsSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.standbyAllowlistedIpsSource"></a>

```go
func StandbyAllowlistedIpsSource() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeOfAutoRefreshStart`<sup>Required</sup> <a name="TimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.timeOfAutoRefreshStart"></a>

```go
func TimeOfAutoRefreshStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbAutonomousDatabaseAdminPasswordSource <a name="OdbAutonomousDatabaseAdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseAdminPasswordSource {
	CustomerManagedAwsSecret: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.property.customerManagedAwsSecret">CustomerManagedAwsSecret</a></code> | <code>interface{}</code> | customer_managed_aws_secret block. |

---

##### `CustomerManagedAwsSecret`<sup>Optional</sup> <a name="CustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSource.property.customerManagedAwsSecret"></a>

```go
CustomerManagedAwsSecret interface{}
```

- *Type:* interface{}

customer_managed_aws_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#customer_managed_aws_secret OdbAutonomousDatabase#customer_managed_aws_secret}

---

### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret {
	ExternalIdType: *string,
	IamRoleArn: *string,
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.externalIdType">ExternalIdType</a></code> | <code>*string</code> | Type of OCI identifier supplied as the external ID when OCI assumes the IAM role. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | ARN of the customer-managed IAM role OCI assumes to retrieve the secret. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.secretArn">SecretArn</a></code> | <code>*string</code> | ARN of the AWS Secrets Manager secret that contains the ADMIN password. |

---

##### `ExternalIdType`<sup>Required</sup> <a name="ExternalIdType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.externalIdType"></a>

```go
ExternalIdType *string
```

- *Type:* *string

Type of OCI identifier supplied as the external ID when OCI assumes the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#external_id_type OdbAutonomousDatabase#external_id_type}

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

ARN of the customer-managed IAM role OCI assumes to retrieve the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#iam_role_arn OdbAutonomousDatabase#iam_role_arn}

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecret.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

ARN of the AWS Secrets Manager secret that contains the ADMIN password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#secret_arn OdbAutonomousDatabase#secret_arn}

---

### OdbAutonomousDatabaseConfig <a name="OdbAutonomousDatabaseConfig" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AdminPassword: *string,
	AdminPasswordSource: interface{},
	AdminPasswordWo: *string,
	AdminPasswordWoVersion: *f64,
	AllowlistedIps: *[]*string,
	AutonomousMaintenanceScheduleType: *string,
	AutoRefreshFrequencyInSeconds: *f64,
	AutoRefreshPointLagInSeconds: *f64,
	BackupRetentionPeriodInDays: *f64,
	ByolComputeCountLimit: *f64,
	CharacterSet: *string,
	ComputeCount: *f64,
	CpuCoreCount: *f64,
	CustomerContactsToSendToOci: interface{},
	DatabaseEdition: *string,
	DataStorageSizeInGbs: *f64,
	DataStorageSizeInTbs: *f64,
	DbName: *string,
	DbToolsDetails: interface{},
	DbVersion: *string,
	DbWorkload: *string,
	DisplayName: *string,
	EncryptionKeyProvider: *string,
	IsAutoScalingEnabled: interface{},
	IsAutoScalingForStorageEnabled: interface{},
	IsBackupRetentionLocked: interface{},
	IsLocalDataGuardEnabled: interface{},
	IsMtlsConnectionRequired: interface{},
	IsRefreshableClone: interface{},
	KmsKeyId: *string,
	LicenseModel: *string,
	LocalAdgAutoFailoverMaxDataLossLimit: *f64,
	LongTermBackupSchedule: interface{},
	NcharacterSet: *string,
	OdbNetworkId: *string,
	OpenMode: *string,
	PermissionLevel: *string,
	PrivateEndpointIp: *string,
	PrivateEndpointLabel: *string,
	RefreshableMode: *string,
	Region: *string,
	ResourcePoolLeaderId: *string,
	ResourcePoolSummary: interface{},
	ScheduledOperations: interface{},
	Source: *string,
	SourceConfiguration: interface{},
	StandbyAllowlistedIps: *[]*string,
	StandbyAllowlistedIpsSource: *string,
	Tags: *map[string]*string,
	TimeOfAutoRefreshStart: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v25.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts,
	TransportableTablespace: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | Password for the ADMIN user. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordSource">AdminPasswordSource</a></code> | <code>interface{}</code> | admin_password_source block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWo">AdminPasswordWo</a></code> | <code>*string</code> | Password for the ADMIN user. This write-only value is never stored in Terraform state. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWoVersion">AdminPasswordWoVersion</a></code> | <code>*f64</code> | Arbitrary version used to trigger an ADMIN password update. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.allowlistedIps">AllowlistedIps</a></code> | <code>*[]*string</code> | IP addresses allowed to access the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType">AutonomousMaintenanceScheduleType</a></code> | <code>*string</code> | Maintenance schedule type for the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds">AutoRefreshFrequencyInSeconds</a></code> | <code>*f64</code> | Frequency at which a refreshable clone is automatically refreshed, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds">AutoRefreshPointLagInSeconds</a></code> | <code>*f64</code> | Time lag between a refreshable clone and its source, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>*f64</code> | Retention period for automatic backups, in days. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.byolComputeCountLimit">ByolComputeCountLimit</a></code> | <code>*f64</code> | Maximum compute capacity under the bring-your-own-license model. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.characterSet">CharacterSet</a></code> | <code>*string</code> | Character set of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | Compute capacity in ECPUs or OCPUs. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | Number of CPU cores allocated to the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.customerContactsToSendToOci">CustomerContactsToSendToOci</a></code> | <code>interface{}</code> | customer_contacts_to_send_to_oci block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.databaseEdition">DatabaseEdition</a></code> | <code>*string</code> | Oracle Database edition. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInGbs">DataStorageSizeInGbs</a></code> | <code>*f64</code> | Data volume size in GB. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInTbs">DataStorageSizeInTbs</a></code> | <code>*f64</code> | Data volume size in TB. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbName">DbName</a></code> | <code>*string</code> | Name of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbToolsDetails">DbToolsDetails</a></code> | <code>interface{}</code> | db_tools_details block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbVersion">DbVersion</a></code> | <code>*string</code> | Oracle Database software version. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbWorkload">DbWorkload</a></code> | <code>*string</code> | Intended database workload. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-friendly name for the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.encryptionKeyProvider">EncryptionKeyProvider</a></code> | <code>*string</code> | Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>interface{}</code> | Whether automatic compute scaling is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled">IsAutoScalingForStorageEnabled</a></code> | <code>interface{}</code> | Whether automatic storage scaling is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isBackupRetentionLocked">IsBackupRetentionLocked</a></code> | <code>interface{}</code> | Whether the backup retention period is locked. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isLocalDataGuardEnabled">IsLocalDataGuardEnabled</a></code> | <code>interface{}</code> | Whether local Oracle Data Guard is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isMtlsConnectionRequired">IsMtlsConnectionRequired</a></code> | <code>interface{}</code> | Whether mutual TLS authentication is required. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isRefreshableClone">IsRefreshableClone</a></code> | <code>interface{}</code> | Whether the Autonomous Database is a refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | ARN of the AWS KMS key used to encrypt the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | Oracle license model. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>*f64</code> | Maximum data-loss limit for automatic local Data Guard failover, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.longTermBackupSchedule">LongTermBackupSchedule</a></code> | <code>interface{}</code> | long_term_backup_schedule block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.ncharacterSet">NcharacterSet</a></code> | <code>*string</code> | National character set of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.odbNetworkId">OdbNetworkId</a></code> | <code>*string</code> | ID of the associated ODB network. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.openMode">OpenMode</a></code> | <code>*string</code> | Open mode of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.permissionLevel">PermissionLevel</a></code> | <code>*string</code> | Permission level of the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>*string</code> | Private endpoint IP address. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>*string</code> | Private endpoint label. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.refreshableMode">RefreshableMode</a></code> | <code>*string</code> | Refresh mode of a refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolLeaderId">ResourcePoolLeaderId</a></code> | <code>*string</code> | ID of the resource-pool leader Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolSummary">ResourcePoolSummary</a></code> | <code>interface{}</code> | resource_pool_summary block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.scheduledOperations">ScheduledOperations</a></code> | <code>interface{}</code> | scheduled_operations block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.source">Source</a></code> | <code>*string</code> | Source from which to create the Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.sourceConfiguration">SourceConfiguration</a></code> | <code>interface{}</code> | source_configuration block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIps">StandbyAllowlistedIps</a></code> | <code>*[]*string</code> | IP addresses allowed to access the standby Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIpsSource">StandbyAllowlistedIpsSource</a></code> | <code>*string</code> | Source of the standby allowlisted IP addresses. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeOfAutoRefreshStart">TimeOfAutoRefreshStart</a></code> | <code>*string</code> | Date and time when automatic refresh begins. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.transportableTablespace">TransportableTablespace</a></code> | <code>interface{}</code> | transportable_tablespace block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPassword"></a>

```go
AdminPassword *string
```

- *Type:* *string

Password for the ADMIN user.

This value is stored in Terraform state. Use admin_password_wo with Terraform 1.11 or later to avoid storing the password in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#admin_password OdbAutonomousDatabase#admin_password}

---

##### `AdminPasswordSource`<sup>Optional</sup> <a name="AdminPasswordSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordSource"></a>

```go
AdminPasswordSource interface{}
```

- *Type:* interface{}

admin_password_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#admin_password_source OdbAutonomousDatabase#admin_password_source}

---

##### `AdminPasswordWo`<sup>Optional</sup> <a name="AdminPasswordWo" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWo"></a>

```go
AdminPasswordWo *string
```

- *Type:* *string

Password for the ADMIN user. This write-only value is never stored in Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#admin_password_wo OdbAutonomousDatabase#admin_password_wo}

---

##### `AdminPasswordWoVersion`<sup>Optional</sup> <a name="AdminPasswordWoVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.adminPasswordWoVersion"></a>

```go
AdminPasswordWoVersion *f64
```

- *Type:* *f64

Arbitrary version used to trigger an ADMIN password update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#admin_password_wo_version OdbAutonomousDatabase#admin_password_wo_version}

---

##### `AllowlistedIps`<sup>Optional</sup> <a name="AllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.allowlistedIps"></a>

```go
AllowlistedIps *[]*string
```

- *Type:* *[]*string

IP addresses allowed to access the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#allowlisted_ips OdbAutonomousDatabase#allowlisted_ips}

---

##### `AutonomousMaintenanceScheduleType`<sup>Optional</sup> <a name="AutonomousMaintenanceScheduleType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType"></a>

```go
AutonomousMaintenanceScheduleType *string
```

- *Type:* *string

Maintenance schedule type for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#autonomous_maintenance_schedule_type OdbAutonomousDatabase#autonomous_maintenance_schedule_type}

---

##### `AutoRefreshFrequencyInSeconds`<sup>Optional</sup> <a name="AutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds"></a>

```go
AutoRefreshFrequencyInSeconds *f64
```

- *Type:* *f64

Frequency at which a refreshable clone is automatically refreshed, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#auto_refresh_frequency_in_seconds OdbAutonomousDatabase#auto_refresh_frequency_in_seconds}

---

##### `AutoRefreshPointLagInSeconds`<sup>Optional</sup> <a name="AutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds"></a>

```go
AutoRefreshPointLagInSeconds *f64
```

- *Type:* *f64

Time lag between a refreshable clone and its source, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#auto_refresh_point_lag_in_seconds OdbAutonomousDatabase#auto_refresh_point_lag_in_seconds}

---

##### `BackupRetentionPeriodInDays`<sup>Optional</sup> <a name="BackupRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.backupRetentionPeriodInDays"></a>

```go
BackupRetentionPeriodInDays *f64
```

- *Type:* *f64

Retention period for automatic backups, in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#backup_retention_period_in_days OdbAutonomousDatabase#backup_retention_period_in_days}

---

##### `ByolComputeCountLimit`<sup>Optional</sup> <a name="ByolComputeCountLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.byolComputeCountLimit"></a>

```go
ByolComputeCountLimit *f64
```

- *Type:* *f64

Maximum compute capacity under the bring-your-own-license model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#byol_compute_count_limit OdbAutonomousDatabase#byol_compute_count_limit}

---

##### `CharacterSet`<sup>Optional</sup> <a name="CharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.characterSet"></a>

```go
CharacterSet *string
```

- *Type:* *string

Character set of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#character_set OdbAutonomousDatabase#character_set}

---

##### `ComputeCount`<sup>Optional</sup> <a name="ComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.computeCount"></a>

```go
ComputeCount *f64
```

- *Type:* *f64

Compute capacity in ECPUs or OCPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#compute_count OdbAutonomousDatabase#compute_count}

---

##### `CpuCoreCount`<sup>Optional</sup> <a name="CpuCoreCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.cpuCoreCount"></a>

```go
CpuCoreCount *f64
```

- *Type:* *f64

Number of CPU cores allocated to the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#cpu_core_count OdbAutonomousDatabase#cpu_core_count}

---

##### `CustomerContactsToSendToOci`<sup>Optional</sup> <a name="CustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.customerContactsToSendToOci"></a>

```go
CustomerContactsToSendToOci interface{}
```

- *Type:* interface{}

customer_contacts_to_send_to_oci block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#customer_contacts_to_send_to_oci OdbAutonomousDatabase#customer_contacts_to_send_to_oci}

---

##### `DatabaseEdition`<sup>Optional</sup> <a name="DatabaseEdition" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.databaseEdition"></a>

```go
DatabaseEdition *string
```

- *Type:* *string

Oracle Database edition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#database_edition OdbAutonomousDatabase#database_edition}

---

##### `DataStorageSizeInGbs`<sup>Optional</sup> <a name="DataStorageSizeInGbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInGbs"></a>

```go
DataStorageSizeInGbs *f64
```

- *Type:* *f64

Data volume size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#data_storage_size_in_gbs OdbAutonomousDatabase#data_storage_size_in_gbs}

---

##### `DataStorageSizeInTbs`<sup>Optional</sup> <a name="DataStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dataStorageSizeInTbs"></a>

```go
DataStorageSizeInTbs *f64
```

- *Type:* *f64

Data volume size in TB.

Configured values must be whole numbers; computed values may be fractional when storage is configured in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#data_storage_size_in_tbs OdbAutonomousDatabase#data_storage_size_in_tbs}

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbName"></a>

```go
DbName *string
```

- *Type:* *string

Name of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#db_name OdbAutonomousDatabase#db_name}

---

##### `DbToolsDetails`<sup>Optional</sup> <a name="DbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbToolsDetails"></a>

```go
DbToolsDetails interface{}
```

- *Type:* interface{}

db_tools_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#db_tools_details OdbAutonomousDatabase#db_tools_details}

---

##### `DbVersion`<sup>Optional</sup> <a name="DbVersion" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbVersion"></a>

```go
DbVersion *string
```

- *Type:* *string

Oracle Database software version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#db_version OdbAutonomousDatabase#db_version}

---

##### `DbWorkload`<sup>Optional</sup> <a name="DbWorkload" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.dbWorkload"></a>

```go
DbWorkload *string
```

- *Type:* *string

Intended database workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#db_workload OdbAutonomousDatabase#db_workload}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-friendly name for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#display_name OdbAutonomousDatabase#display_name}

---

##### `EncryptionKeyProvider`<sup>Optional</sup> <a name="EncryptionKeyProvider" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.encryptionKeyProvider"></a>

```go
EncryptionKeyProvider *string
```

- *Type:* *string

Encryption key provider. Configurable values are ORACLE_MANAGED and AWS_KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#encryption_key_provider OdbAutonomousDatabase#encryption_key_provider}

---

##### `IsAutoScalingEnabled`<sup>Optional</sup> <a name="IsAutoScalingEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingEnabled"></a>

```go
IsAutoScalingEnabled interface{}
```

- *Type:* interface{}

Whether automatic compute scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_auto_scaling_enabled OdbAutonomousDatabase#is_auto_scaling_enabled}

---

##### `IsAutoScalingForStorageEnabled`<sup>Optional</sup> <a name="IsAutoScalingForStorageEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled"></a>

```go
IsAutoScalingForStorageEnabled interface{}
```

- *Type:* interface{}

Whether automatic storage scaling is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_auto_scaling_for_storage_enabled OdbAutonomousDatabase#is_auto_scaling_for_storage_enabled}

---

##### `IsBackupRetentionLocked`<sup>Optional</sup> <a name="IsBackupRetentionLocked" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isBackupRetentionLocked"></a>

```go
IsBackupRetentionLocked interface{}
```

- *Type:* interface{}

Whether the backup retention period is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_backup_retention_locked OdbAutonomousDatabase#is_backup_retention_locked}

---

##### `IsLocalDataGuardEnabled`<sup>Optional</sup> <a name="IsLocalDataGuardEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isLocalDataGuardEnabled"></a>

```go
IsLocalDataGuardEnabled interface{}
```

- *Type:* interface{}

Whether local Oracle Data Guard is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_local_data_guard_enabled OdbAutonomousDatabase#is_local_data_guard_enabled}

---

##### `IsMtlsConnectionRequired`<sup>Optional</sup> <a name="IsMtlsConnectionRequired" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isMtlsConnectionRequired"></a>

```go
IsMtlsConnectionRequired interface{}
```

- *Type:* interface{}

Whether mutual TLS authentication is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_mtls_connection_required OdbAutonomousDatabase#is_mtls_connection_required}

---

##### `IsRefreshableClone`<sup>Optional</sup> <a name="IsRefreshableClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.isRefreshableClone"></a>

```go
IsRefreshableClone interface{}
```

- *Type:* interface{}

Whether the Autonomous Database is a refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_refreshable_clone OdbAutonomousDatabase#is_refreshable_clone}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

ARN of the AWS KMS key used to encrypt the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#kms_key_id OdbAutonomousDatabase#kms_key_id}

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.licenseModel"></a>

```go
LicenseModel *string
```

- *Type:* *string

Oracle license model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#license_model OdbAutonomousDatabase#license_model}

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Optional</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```go
LocalAdgAutoFailoverMaxDataLossLimit *f64
```

- *Type:* *f64

Maximum data-loss limit for automatic local Data Guard failover, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#local_adg_auto_failover_max_data_loss_limit OdbAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}

---

##### `LongTermBackupSchedule`<sup>Optional</sup> <a name="LongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.longTermBackupSchedule"></a>

```go
LongTermBackupSchedule interface{}
```

- *Type:* interface{}

long_term_backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#long_term_backup_schedule OdbAutonomousDatabase#long_term_backup_schedule}

---

##### `NcharacterSet`<sup>Optional</sup> <a name="NcharacterSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.ncharacterSet"></a>

```go
NcharacterSet *string
```

- *Type:* *string

National character set of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#ncharacter_set OdbAutonomousDatabase#ncharacter_set}

---

##### `OdbNetworkId`<sup>Optional</sup> <a name="OdbNetworkId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.odbNetworkId"></a>

```go
OdbNetworkId *string
```

- *Type:* *string

ID of the associated ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#odb_network_id OdbAutonomousDatabase#odb_network_id}

---

##### `OpenMode`<sup>Optional</sup> <a name="OpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.openMode"></a>

```go
OpenMode *string
```

- *Type:* *string

Open mode of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#open_mode OdbAutonomousDatabase#open_mode}

---

##### `PermissionLevel`<sup>Optional</sup> <a name="PermissionLevel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.permissionLevel"></a>

```go
PermissionLevel *string
```

- *Type:* *string

Permission level of the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#permission_level OdbAutonomousDatabase#permission_level}

---

##### `PrivateEndpointIp`<sup>Optional</sup> <a name="PrivateEndpointIp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointIp"></a>

```go
PrivateEndpointIp *string
```

- *Type:* *string

Private endpoint IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#private_endpoint_ip OdbAutonomousDatabase#private_endpoint_ip}

---

##### `PrivateEndpointLabel`<sup>Optional</sup> <a name="PrivateEndpointLabel" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.privateEndpointLabel"></a>

```go
PrivateEndpointLabel *string
```

- *Type:* *string

Private endpoint label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#private_endpoint_label OdbAutonomousDatabase#private_endpoint_label}

---

##### `RefreshableMode`<sup>Optional</sup> <a name="RefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.refreshableMode"></a>

```go
RefreshableMode *string
```

- *Type:* *string

Refresh mode of a refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#refreshable_mode OdbAutonomousDatabase#refreshable_mode}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#region OdbAutonomousDatabase#region}

---

##### `ResourcePoolLeaderId`<sup>Optional</sup> <a name="ResourcePoolLeaderId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolLeaderId"></a>

```go
ResourcePoolLeaderId *string
```

- *Type:* *string

ID of the resource-pool leader Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#resource_pool_leader_id OdbAutonomousDatabase#resource_pool_leader_id}

---

##### `ResourcePoolSummary`<sup>Optional</sup> <a name="ResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.resourcePoolSummary"></a>

```go
ResourcePoolSummary interface{}
```

- *Type:* interface{}

resource_pool_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#resource_pool_summary OdbAutonomousDatabase#resource_pool_summary}

---

##### `ScheduledOperations`<sup>Optional</sup> <a name="ScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.scheduledOperations"></a>

```go
ScheduledOperations interface{}
```

- *Type:* interface{}

scheduled_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#scheduled_operations OdbAutonomousDatabase#scheduled_operations}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Source from which to create the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source OdbAutonomousDatabase#source}

---

##### `SourceConfiguration`<sup>Optional</sup> <a name="SourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.sourceConfiguration"></a>

```go
SourceConfiguration interface{}
```

- *Type:* interface{}

source_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source_configuration OdbAutonomousDatabase#source_configuration}

---

##### `StandbyAllowlistedIps`<sup>Optional</sup> <a name="StandbyAllowlistedIps" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIps"></a>

```go
StandbyAllowlistedIps *[]*string
```

- *Type:* *[]*string

IP addresses allowed to access the standby Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips OdbAutonomousDatabase#standby_allowlisted_ips}

---

##### `StandbyAllowlistedIpsSource`<sup>Optional</sup> <a name="StandbyAllowlistedIpsSource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.standbyAllowlistedIpsSource"></a>

```go
StandbyAllowlistedIpsSource *string
```

- *Type:* *string

Source of the standby allowlisted IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#standby_allowlisted_ips_source OdbAutonomousDatabase#standby_allowlisted_ips_source}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#tags OdbAutonomousDatabase#tags}.

---

##### `TimeOfAutoRefreshStart`<sup>Optional</sup> <a name="TimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeOfAutoRefreshStart"></a>

```go
TimeOfAutoRefreshStart *string
```

- *Type:* *string

Date and time when automatic refresh begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#time_of_auto_refresh_start OdbAutonomousDatabase#time_of_auto_refresh_start}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.timeouts"></a>

```go
Timeouts OdbAutonomousDatabaseTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts">OdbAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#timeouts OdbAutonomousDatabase#timeouts}

---

##### `TransportableTablespace`<sup>Optional</sup> <a name="TransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseConfig.property.transportableTablespace"></a>

```go
TransportableTablespace interface{}
```

- *Type:* interface{}

transportable_tablespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#transportable_tablespace OdbAutonomousDatabase#transportable_tablespace}

---

### OdbAutonomousDatabaseCustomerContactsToSendToOci <a name="OdbAutonomousDatabaseCustomerContactsToSendToOci" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci {
	Email: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.property.email">Email</a></code> | <code>*string</code> | Email address of the customer contact. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOci.property.email"></a>

```go
Email *string
```

- *Type:* *string

Email address of the customer contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#email OdbAutonomousDatabase#email}

---

### OdbAutonomousDatabaseDbToolsDetails <a name="OdbAutonomousDatabaseDbToolsDetails" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseDbToolsDetails {
	ComputeCount: *f64,
	IsEnabled: interface{},
	MaxIdleTimeInMinutes: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | Compute capacity allocated to the database tool. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Whether the database tool is enabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes">MaxIdleTimeInMinutes</a></code> | <code>*f64</code> | Maximum idle time before the database tool is shut down, in minutes. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.name">Name</a></code> | <code>*string</code> | Name of the database tool. |

---

##### `ComputeCount`<sup>Optional</sup> <a name="ComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.computeCount"></a>

```go
ComputeCount *f64
```

- *Type:* *f64

Compute capacity allocated to the database tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#compute_count OdbAutonomousDatabase#compute_count}

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Whether the database tool is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_enabled OdbAutonomousDatabase#is_enabled}

---

##### `MaxIdleTimeInMinutes`<sup>Optional</sup> <a name="MaxIdleTimeInMinutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes"></a>

```go
MaxIdleTimeInMinutes *f64
```

- *Type:* *f64

Maximum idle time before the database tool is shut down, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#max_idle_time_in_minutes OdbAutonomousDatabase#max_idle_time_in_minutes}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetails.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the database tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#name OdbAutonomousDatabase#name}

---

### OdbAutonomousDatabaseLongTermBackupSchedule <a name="OdbAutonomousDatabaseLongTermBackupSchedule" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseLongTermBackupSchedule {
	IsDisabled: interface{},
	RepeatCadence: *string,
	RetentionPeriodInDays: *f64,
	TimeOfBackup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.isDisabled">IsDisabled</a></code> | <code>interface{}</code> | Whether the long-term backup schedule is disabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence">RepeatCadence</a></code> | <code>*string</code> | Cadence at which long-term backups are taken. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | Retention period for long-term backups, in days. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup">TimeOfBackup</a></code> | <code>*string</code> | Date and time at which the long-term backup is taken. |

---

##### `IsDisabled`<sup>Optional</sup> <a name="IsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.isDisabled"></a>

```go
IsDisabled interface{}
```

- *Type:* interface{}

Whether the long-term backup schedule is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_disabled OdbAutonomousDatabase#is_disabled}

---

##### `RepeatCadence`<sup>Optional</sup> <a name="RepeatCadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence"></a>

```go
RepeatCadence *string
```

- *Type:* *string

Cadence at which long-term backups are taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#repeat_cadence OdbAutonomousDatabase#repeat_cadence}

---

##### `RetentionPeriodInDays`<sup>Optional</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays"></a>

```go
RetentionPeriodInDays *f64
```

- *Type:* *f64

Retention period for long-term backups, in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#retention_period_in_days OdbAutonomousDatabase#retention_period_in_days}

---

##### `TimeOfBackup`<sup>Optional</sup> <a name="TimeOfBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup"></a>

```go
TimeOfBackup *string
```

- *Type:* *string

Date and time at which the long-term backup is taken.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#time_of_backup OdbAutonomousDatabase#time_of_backup}

---

### OdbAutonomousDatabaseResourcePoolSummary <a name="OdbAutonomousDatabaseResourcePoolSummary" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseResourcePoolSummary {
	IsDisabled: interface{},
	PoolSize: *f64,
	PoolStorageSizeInTbs: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.isDisabled">IsDisabled</a></code> | <code>interface{}</code> | Whether the resource pool is disabled. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolSize">PoolSize</a></code> | <code>*f64</code> | Number of Autonomous Databases the resource pool can contain. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolStorageSizeInTbs">PoolStorageSizeInTbs</a></code> | <code>*f64</code> | Total storage size of the resource pool, in TB. |

---

##### `IsDisabled`<sup>Optional</sup> <a name="IsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.isDisabled"></a>

```go
IsDisabled interface{}
```

- *Type:* interface{}

Whether the resource pool is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_disabled OdbAutonomousDatabase#is_disabled}

---

##### `PoolSize`<sup>Optional</sup> <a name="PoolSize" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolSize"></a>

```go
PoolSize *f64
```

- *Type:* *f64

Number of Autonomous Databases the resource pool can contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#pool_size OdbAutonomousDatabase#pool_size}

---

##### `PoolStorageSizeInTbs`<sup>Optional</sup> <a name="PoolStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummary.property.poolStorageSizeInTbs"></a>

```go
PoolStorageSizeInTbs *f64
```

- *Type:* *f64

Total storage size of the resource pool, in TB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#pool_storage_size_in_tbs OdbAutonomousDatabase#pool_storage_size_in_tbs}

---

### OdbAutonomousDatabaseScheduledOperations <a name="OdbAutonomousDatabaseScheduledOperations" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseScheduledOperations {
	DayOfWeek: *string,
	ScheduledStartTime: *string,
	ScheduledStopTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | Day of the week. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStartTime">ScheduledStartTime</a></code> | <code>*string</code> | Scheduled start time in UTC. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStopTime">ScheduledStopTime</a></code> | <code>*string</code> | Scheduled stop time in UTC. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

Day of the week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#day_of_week OdbAutonomousDatabase#day_of_week}

---

##### `ScheduledStartTime`<sup>Optional</sup> <a name="ScheduledStartTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStartTime"></a>

```go
ScheduledStartTime *string
```

- *Type:* *string

Scheduled start time in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#scheduled_start_time OdbAutonomousDatabase#scheduled_start_time}

---

##### `ScheduledStopTime`<sup>Optional</sup> <a name="ScheduledStopTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperations.property.scheduledStopTime"></a>

```go
ScheduledStopTime *string
```

- *Type:* *string

Scheduled stop time in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#scheduled_stop_time OdbAutonomousDatabase#scheduled_stop_time}

---

### OdbAutonomousDatabaseSourceConfiguration <a name="OdbAutonomousDatabaseSourceConfiguration" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseSourceConfiguration {
	CloneToRefreshable: interface{},
	CrossRegionDataGuard: interface{},
	CrossRegionDisasterRecovery: interface{},
	DatabaseClone: interface{},
	PointInTimeRestore: interface{},
	RestoreFromBackup: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.cloneToRefreshable">CloneToRefreshable</a></code> | <code>interface{}</code> | clone_to_refreshable block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDataGuard">CrossRegionDataGuard</a></code> | <code>interface{}</code> | cross_region_data_guard block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDisasterRecovery">CrossRegionDisasterRecovery</a></code> | <code>interface{}</code> | cross_region_disaster_recovery block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.databaseClone">DatabaseClone</a></code> | <code>interface{}</code> | database_clone block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.pointInTimeRestore">PointInTimeRestore</a></code> | <code>interface{}</code> | point_in_time_restore block. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.restoreFromBackup">RestoreFromBackup</a></code> | <code>interface{}</code> | restore_from_backup block. |

---

##### `CloneToRefreshable`<sup>Optional</sup> <a name="CloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.cloneToRefreshable"></a>

```go
CloneToRefreshable interface{}
```

- *Type:* interface{}

clone_to_refreshable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#clone_to_refreshable OdbAutonomousDatabase#clone_to_refreshable}

---

##### `CrossRegionDataGuard`<sup>Optional</sup> <a name="CrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDataGuard"></a>

```go
CrossRegionDataGuard interface{}
```

- *Type:* interface{}

cross_region_data_guard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#cross_region_data_guard OdbAutonomousDatabase#cross_region_data_guard}

---

##### `CrossRegionDisasterRecovery`<sup>Optional</sup> <a name="CrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.crossRegionDisasterRecovery"></a>

```go
CrossRegionDisasterRecovery interface{}
```

- *Type:* interface{}

cross_region_disaster_recovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#cross_region_disaster_recovery OdbAutonomousDatabase#cross_region_disaster_recovery}

---

##### `DatabaseClone`<sup>Optional</sup> <a name="DatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.databaseClone"></a>

```go
DatabaseClone interface{}
```

- *Type:* interface{}

database_clone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#database_clone OdbAutonomousDatabase#database_clone}

---

##### `PointInTimeRestore`<sup>Optional</sup> <a name="PointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.pointInTimeRestore"></a>

```go
PointInTimeRestore interface{}
```

- *Type:* interface{}

point_in_time_restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#point_in_time_restore OdbAutonomousDatabase#point_in_time_restore}

---

##### `RestoreFromBackup`<sup>Optional</sup> <a name="RestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfiguration.property.restoreFromBackup"></a>

```go
RestoreFromBackup interface{}
```

- *Type:* interface{}

restore_from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#restore_from_backup OdbAutonomousDatabase#restore_from_backup}

---

### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable {
	SourceAutonomousDatabaseId: *string,
	AutoRefreshFrequencyInSeconds: *f64,
	AutoRefreshPointLagInSeconds: *f64,
	CloneType: *string,
	OpenMode: *string,
	RefreshableMode: *string,
	TimeOfAutoRefreshStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>*string</code> | ID of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshFrequencyInSeconds">AutoRefreshFrequencyInSeconds</a></code> | <code>*f64</code> | Frequency at which the refreshable clone is automatically refreshed, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshPointLagInSeconds">AutoRefreshPointLagInSeconds</a></code> | <code>*f64</code> | Time lag between the refreshable clone and its source, in seconds. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.cloneType">CloneType</a></code> | <code>*string</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.openMode">OpenMode</a></code> | <code>*string</code> | Open mode of the refreshable clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.refreshableMode">RefreshableMode</a></code> | <code>*string</code> | Refresh mode of the clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.timeOfAutoRefreshStart">TimeOfAutoRefreshStart</a></code> | <code>*string</code> | Date and time when automatic refresh starts. |

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.sourceAutonomousDatabaseId"></a>

```go
SourceAutonomousDatabaseId *string
```

- *Type:* *string

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

##### `AutoRefreshFrequencyInSeconds`<sup>Optional</sup> <a name="AutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshFrequencyInSeconds"></a>

```go
AutoRefreshFrequencyInSeconds *f64
```

- *Type:* *f64

Frequency at which the refreshable clone is automatically refreshed, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#auto_refresh_frequency_in_seconds OdbAutonomousDatabase#auto_refresh_frequency_in_seconds}

---

##### `AutoRefreshPointLagInSeconds`<sup>Optional</sup> <a name="AutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.autoRefreshPointLagInSeconds"></a>

```go
AutoRefreshPointLagInSeconds *f64
```

- *Type:* *f64

Time lag between the refreshable clone and its source, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#auto_refresh_point_lag_in_seconds OdbAutonomousDatabase#auto_refresh_point_lag_in_seconds}

---

##### `CloneType`<sup>Optional</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.cloneType"></a>

```go
CloneType *string
```

- *Type:* *string

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `OpenMode`<sup>Optional</sup> <a name="OpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.openMode"></a>

```go
OpenMode *string
```

- *Type:* *string

Open mode of the refreshable clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#open_mode OdbAutonomousDatabase#open_mode}

---

##### `RefreshableMode`<sup>Optional</sup> <a name="RefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.refreshableMode"></a>

```go
RefreshableMode *string
```

- *Type:* *string

Refresh mode of the clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#refreshable_mode OdbAutonomousDatabase#refreshable_mode}

---

##### `TimeOfAutoRefreshStart`<sup>Optional</sup> <a name="TimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshable.property.timeOfAutoRefreshStart"></a>

```go
TimeOfAutoRefreshStart *string
```

- *Type:* *string

Date and time when automatic refresh starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#time_of_auto_refresh_start OdbAutonomousDatabase#time_of_auto_refresh_start}

---

### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard {
	SourceAutonomousDatabaseArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.property.sourceAutonomousDatabaseArn">SourceAutonomousDatabaseArn</a></code> | <code>*string</code> | ARN of the source Autonomous Database. |

---

##### `SourceAutonomousDatabaseArn`<sup>Required</sup> <a name="SourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuard.property.sourceAutonomousDatabaseArn"></a>

```go
SourceAutonomousDatabaseArn *string
```

- *Type:* *string

ARN of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source_autonomous_database_arn OdbAutonomousDatabase#source_autonomous_database_arn}

---

### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery {
	RemoteDisasterRecoveryType: *string,
	SourceAutonomousDatabaseArn: *string,
	IsReplicateAutomaticBackups: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType">RemoteDisasterRecoveryType</a></code> | <code>*string</code> | Type of remote disaster recovery. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseArn">SourceAutonomousDatabaseArn</a></code> | <code>*string</code> | ARN of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.isReplicateAutomaticBackups">IsReplicateAutomaticBackups</a></code> | <code>interface{}</code> | Whether automatic backups are replicated to the disaster recovery database. |

---

##### `RemoteDisasterRecoveryType`<sup>Required</sup> <a name="RemoteDisasterRecoveryType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType"></a>

```go
RemoteDisasterRecoveryType *string
```

- *Type:* *string

Type of remote disaster recovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#remote_disaster_recovery_type OdbAutonomousDatabase#remote_disaster_recovery_type}

---

##### `SourceAutonomousDatabaseArn`<sup>Required</sup> <a name="SourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseArn"></a>

```go
SourceAutonomousDatabaseArn *string
```

- *Type:* *string

ARN of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source_autonomous_database_arn OdbAutonomousDatabase#source_autonomous_database_arn}

---

##### `IsReplicateAutomaticBackups`<sup>Optional</sup> <a name="IsReplicateAutomaticBackups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecovery.property.isReplicateAutomaticBackups"></a>

```go
IsReplicateAutomaticBackups interface{}
```

- *Type:* interface{}

Whether automatic backups are replicated to the disaster recovery database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#is_replicate_automatic_backups OdbAutonomousDatabase#is_replicate_automatic_backups}

---

### OdbAutonomousDatabaseSourceConfigurationDatabaseClone <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone {
	CloneType: *string,
	SourceAutonomousDatabaseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.cloneType">CloneType</a></code> | <code>*string</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>*string</code> | ID of the source Autonomous Database. |

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.cloneType"></a>

```go
CloneType *string
```

- *Type:* *string

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseClone.property.sourceAutonomousDatabaseId"></a>

```go
SourceAutonomousDatabaseId *string
```

- *Type:* *string

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore {
	CloneType: *string,
	SourceAutonomousDatabaseId: *string,
	CloneTableSpaceList: *[]*f64,
	Timestamp: *string,
	UseLatestAvailableBackupTimestamp: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneType">CloneType</a></code> | <code>*string</code> | Type of clone to create. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>*string</code> | ID of the source Autonomous Database. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneTableSpaceList">CloneTableSpaceList</a></code> | <code>*[]*f64</code> | Tablespace IDs to clone. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.timestamp">Timestamp</a></code> | <code>*string</code> | Date and time to which the database is restored. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.useLatestAvailableBackupTimestamp">UseLatestAvailableBackupTimestamp</a></code> | <code>interface{}</code> | Whether to use the latest available backup timestamp. |

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneType"></a>

```go
CloneType *string
```

- *Type:* *string

Type of clone to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.sourceAutonomousDatabaseId"></a>

```go
SourceAutonomousDatabaseId *string
```

- *Type:* *string

ID of the source Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#source_autonomous_database_id OdbAutonomousDatabase#source_autonomous_database_id}

---

##### `CloneTableSpaceList`<sup>Optional</sup> <a name="CloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.cloneTableSpaceList"></a>

```go
CloneTableSpaceList *[]*f64
```

- *Type:* *[]*f64

Tablespace IDs to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#clone_table_space_list OdbAutonomousDatabase#clone_table_space_list}

---

##### `Timestamp`<sup>Optional</sup> <a name="Timestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.timestamp"></a>

```go
Timestamp *string
```

- *Type:* *string

Date and time to which the database is restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#timestamp OdbAutonomousDatabase#timestamp}

---

##### `UseLatestAvailableBackupTimestamp`<sup>Optional</sup> <a name="UseLatestAvailableBackupTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestore.property.useLatestAvailableBackupTimestamp"></a>

```go
UseLatestAvailableBackupTimestamp interface{}
```

- *Type:* interface{}

Whether to use the latest available backup timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#use_latest_available_backup_timestamp OdbAutonomousDatabase#use_latest_available_backup_timestamp}

---

### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup {
	AutonomousDatabaseBackupId: *string,
	CloneType: *string,
	CloneTableSpaceList: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.autonomousDatabaseBackupId">AutonomousDatabaseBackupId</a></code> | <code>*string</code> | ID of the Autonomous Database backup. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneType">CloneType</a></code> | <code>*string</code> | Type of clone to create from the backup. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneTableSpaceList">CloneTableSpaceList</a></code> | <code>*[]*f64</code> | Tablespace IDs to clone. |

---

##### `AutonomousDatabaseBackupId`<sup>Required</sup> <a name="AutonomousDatabaseBackupId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.autonomousDatabaseBackupId"></a>

```go
AutonomousDatabaseBackupId *string
```

- *Type:* *string

ID of the Autonomous Database backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#autonomous_database_backup_id OdbAutonomousDatabase#autonomous_database_backup_id}

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneType"></a>

```go
CloneType *string
```

- *Type:* *string

Type of clone to create from the backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#clone_type OdbAutonomousDatabase#clone_type}

---

##### `CloneTableSpaceList`<sup>Optional</sup> <a name="CloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackup.property.cloneTableSpaceList"></a>

```go
CloneTableSpaceList *[]*f64
```

- *Type:* *[]*f64

Tablespace IDs to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#clone_table_space_list OdbAutonomousDatabase#clone_table_space_list}

---

### OdbAutonomousDatabaseTimeouts <a name="OdbAutonomousDatabaseTimeouts" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#create OdbAutonomousDatabase#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#delete OdbAutonomousDatabase#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#update OdbAutonomousDatabase#update}

---

### OdbAutonomousDatabaseTransportableTablespace <a name="OdbAutonomousDatabaseTransportableTablespace" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

&odbautonomousdatabase.OdbAutonomousDatabaseTransportableTablespace {
	TtsBundleUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.property.ttsBundleUrl">TtsBundleUrl</a></code> | <code>*string</code> | URL of the transportable tablespace bundle. |

---

##### `TtsBundleUrl`<sup>Optional</sup> <a name="TtsBundleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespace.property.ttsBundleUrl"></a>

```go
TtsBundleUrl *string
```

- *Type:* *string

URL of the transportable tablespace bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/resources/odb_autonomous_database#tts_bundle_url OdbAutonomousDatabase#tts_bundle_url}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference <a name="OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdTypeInput">ExternalIdTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType">ExternalIdType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIdTypeInput`<sup>Optional</sup> <a name="ExternalIdTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdTypeInput"></a>

```go
func ExternalIdTypeInput() *string
```

- *Type:* *string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `ExternalIdType`<sup>Required</sup> <a name="ExternalIdType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.externalIdType"></a>

```go
func ExternalIdType() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseAdminPasswordSourceList <a name="OdbAutonomousDatabaseAdminPasswordSourceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseAdminPasswordSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseAdminPasswordSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseAdminPasswordSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseAdminPasswordSourceOutputReference <a name="OdbAutonomousDatabaseAdminPasswordSourceOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseAdminPasswordSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseAdminPasswordSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerManagedAwsSecret` <a name="PutCustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.putCustomerManagedAwsSecret"></a>

```go
func PutCustomerManagedAwsSecret(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.putCustomerManagedAwsSecret.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomerManagedAwsSecret` <a name="ResetCustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.resetCustomerManagedAwsSecret"></a>

```go
func ResetCustomerManagedAwsSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret">CustomerManagedAwsSecret</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecretInput">CustomerManagedAwsSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedAwsSecret`<sup>Required</sup> <a name="CustomerManagedAwsSecret" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecret"></a>

```go
func CustomerManagedAwsSecret() OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList">OdbAutonomousDatabaseAdminPasswordSourceCustomerManagedAwsSecretList</a>

---

##### `CustomerManagedAwsSecretInput`<sup>Optional</sup> <a name="CustomerManagedAwsSecretInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.customerManagedAwsSecretInput"></a>

```go
func CustomerManagedAwsSecretInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseAdminPasswordSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseCustomerContactsToSendToOciList <a name="OdbAutonomousDatabaseCustomerContactsToSendToOciList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseCustomerContactsToSendToOciList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseCustomerContactsToSendToOciList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference <a name="OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseDbToolsDetailsList <a name="OdbAutonomousDatabaseDbToolsDetailsList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseDbToolsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseDbToolsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseDbToolsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseDbToolsDetailsOutputReference <a name="OdbAutonomousDatabaseDbToolsDetailsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseDbToolsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseDbToolsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeCount` <a name="ResetComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount"></a>

```go
func ResetComputeCount()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetMaxIdleTimeInMinutes` <a name="ResetMaxIdleTimeInMinutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes"></a>

```go
func ResetMaxIdleTimeInMinutes()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput">ComputeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput">MaxIdleTimeInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">MaxIdleTimeInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput"></a>

```go
func ComputeCountInput() *f64
```

- *Type:* *f64

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxIdleTimeInMinutesInput`<sup>Optional</sup> <a name="MaxIdleTimeInMinutesInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput"></a>

```go
func MaxIdleTimeInMinutesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `MaxIdleTimeInMinutes`<sup>Required</sup> <a name="MaxIdleTimeInMinutes" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```go
func MaxIdleTimeInMinutes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseLongTermBackupScheduleList <a name="OdbAutonomousDatabaseLongTermBackupScheduleList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseLongTermBackupScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseLongTermBackupScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="OdbAutonomousDatabaseLongTermBackupScheduleOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseLongTermBackupScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseLongTermBackupScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDisabled` <a name="ResetIsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled"></a>

```go
func ResetIsDisabled()
```

##### `ResetRepeatCadence` <a name="ResetRepeatCadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence"></a>

```go
func ResetRepeatCadence()
```

##### `ResetRetentionPeriodInDays` <a name="ResetRetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays"></a>

```go
func ResetRetentionPeriodInDays()
```

##### `ResetTimeOfBackup` <a name="ResetTimeOfBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup"></a>

```go
func ResetTimeOfBackup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput">IsDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput">RepeatCadenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput">RetentionPeriodInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput">TimeOfBackupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled">IsDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">RepeatCadence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">TimeOfBackup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDisabledInput`<sup>Optional</sup> <a name="IsDisabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput"></a>

```go
func IsDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `RepeatCadenceInput`<sup>Optional</sup> <a name="RepeatCadenceInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput"></a>

```go
func RepeatCadenceInput() *string
```

- *Type:* *string

---

##### `RetentionPeriodInDaysInput`<sup>Optional</sup> <a name="RetentionPeriodInDaysInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput"></a>

```go
func RetentionPeriodInDaysInput() *f64
```

- *Type:* *f64

---

##### `TimeOfBackupInput`<sup>Optional</sup> <a name="TimeOfBackupInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput"></a>

```go
func TimeOfBackupInput() *string
```

- *Type:* *string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```go
func IsDisabled() interface{}
```

- *Type:* interface{}

---

##### `RepeatCadence`<sup>Required</sup> <a name="RepeatCadence" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```go
func RepeatCadence() *string
```

- *Type:* *string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```go
func RetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `TimeOfBackup`<sup>Required</sup> <a name="TimeOfBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```go
func TimeOfBackup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseResourcePoolSummaryList <a name="OdbAutonomousDatabaseResourcePoolSummaryList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseResourcePoolSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseResourcePoolSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseResourcePoolSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseResourcePoolSummaryOutputReference <a name="OdbAutonomousDatabaseResourcePoolSummaryOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseResourcePoolSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseResourcePoolSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDisabled` <a name="ResetIsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled"></a>

```go
func ResetIsDisabled()
```

##### `ResetPoolSize` <a name="ResetPoolSize" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize"></a>

```go
func ResetPoolSize()
```

##### `ResetPoolStorageSizeInTbs` <a name="ResetPoolStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolStorageSizeInTbs"></a>

```go
func ResetPoolStorageSizeInTbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity">AvailableComputeCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs">AvailableStorageCapacityInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity">TotalComputeCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput">IsDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput">PoolSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbsInput">PoolStorageSizeInTbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled">IsDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize">PoolSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs">PoolStorageSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableComputeCapacity`<sup>Required</sup> <a name="AvailableComputeCapacity" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableComputeCapacity"></a>

```go
func AvailableComputeCapacity() *f64
```

- *Type:* *f64

---

##### `AvailableStorageCapacityInTbs`<sup>Required</sup> <a name="AvailableStorageCapacityInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.availableStorageCapacityInTbs"></a>

```go
func AvailableStorageCapacityInTbs() *f64
```

- *Type:* *f64

---

##### `TotalComputeCapacity`<sup>Required</sup> <a name="TotalComputeCapacity" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.totalComputeCapacity"></a>

```go
func TotalComputeCapacity() *f64
```

- *Type:* *f64

---

##### `IsDisabledInput`<sup>Optional</sup> <a name="IsDisabledInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput"></a>

```go
func IsDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `PoolSizeInput`<sup>Optional</sup> <a name="PoolSizeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput"></a>

```go
func PoolSizeInput() *f64
```

- *Type:* *f64

---

##### `PoolStorageSizeInTbsInput`<sup>Optional</sup> <a name="PoolStorageSizeInTbsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbsInput"></a>

```go
func PoolStorageSizeInTbsInput() *f64
```

- *Type:* *f64

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled"></a>

```go
func IsDisabled() interface{}
```

- *Type:* interface{}

---

##### `PoolSize`<sup>Required</sup> <a name="PoolSize" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize"></a>

```go
func PoolSize() *f64
```

- *Type:* *f64

---

##### `PoolStorageSizeInTbs`<sup>Required</sup> <a name="PoolStorageSizeInTbs" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolStorageSizeInTbs"></a>

```go
func PoolStorageSizeInTbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseScheduledOperationsList <a name="OdbAutonomousDatabaseScheduledOperationsList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseScheduledOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseScheduledOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseScheduledOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseScheduledOperationsOutputReference <a name="OdbAutonomousDatabaseScheduledOperationsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseScheduledOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseScheduledOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScheduledStartTime` <a name="ResetScheduledStartTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime"></a>

```go
func ResetScheduledStartTime()
```

##### `ResetScheduledStopTime` <a name="ResetScheduledStopTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime"></a>

```go
func ResetScheduledStopTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput">ScheduledStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput">ScheduledStopTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime">ScheduledStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime">ScheduledStopTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `ScheduledStartTimeInput`<sup>Optional</sup> <a name="ScheduledStartTimeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput"></a>

```go
func ScheduledStartTimeInput() *string
```

- *Type:* *string

---

##### `ScheduledStopTimeInput`<sup>Optional</sup> <a name="ScheduledStopTimeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput"></a>

```go
func ScheduledStopTimeInput() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `ScheduledStartTime`<sup>Required</sup> <a name="ScheduledStartTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```go
func ScheduledStartTime() *string
```

- *Type:* *string

---

##### `ScheduledStopTime`<sup>Required</sup> <a name="ScheduledStopTime" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```go
func ScheduledStopTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRefreshFrequencyInSeconds` <a name="ResetAutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshFrequencyInSeconds"></a>

```go
func ResetAutoRefreshFrequencyInSeconds()
```

##### `ResetAutoRefreshPointLagInSeconds` <a name="ResetAutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetAutoRefreshPointLagInSeconds"></a>

```go
func ResetAutoRefreshPointLagInSeconds()
```

##### `ResetCloneType` <a name="ResetCloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetCloneType"></a>

```go
func ResetCloneType()
```

##### `ResetOpenMode` <a name="ResetOpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetOpenMode"></a>

```go
func ResetOpenMode()
```

##### `ResetRefreshableMode` <a name="ResetRefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetRefreshableMode"></a>

```go
func ResetRefreshableMode()
```

##### `ResetTimeOfAutoRefreshStart` <a name="ResetTimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.resetTimeOfAutoRefreshStart"></a>

```go
func ResetTimeOfAutoRefreshStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSecondsInput">AutoRefreshFrequencyInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSecondsInput">AutoRefreshPointLagInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneTypeInput">CloneTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openModeInput">OpenModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableModeInput">RefreshableModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseIdInput">SourceAutonomousDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStartInput">TimeOfAutoRefreshStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSeconds">AutoRefreshFrequencyInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSeconds">AutoRefreshPointLagInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneType">CloneType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openMode">OpenMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableMode">RefreshableMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStart">TimeOfAutoRefreshStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoRefreshFrequencyInSecondsInput`<sup>Optional</sup> <a name="AutoRefreshFrequencyInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSecondsInput"></a>

```go
func AutoRefreshFrequencyInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AutoRefreshPointLagInSecondsInput`<sup>Optional</sup> <a name="AutoRefreshPointLagInSecondsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSecondsInput"></a>

```go
func AutoRefreshPointLagInSecondsInput() *f64
```

- *Type:* *f64

---

##### `CloneTypeInput`<sup>Optional</sup> <a name="CloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneTypeInput"></a>

```go
func CloneTypeInput() *string
```

- *Type:* *string

---

##### `OpenModeInput`<sup>Optional</sup> <a name="OpenModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openModeInput"></a>

```go
func OpenModeInput() *string
```

- *Type:* *string

---

##### `RefreshableModeInput`<sup>Optional</sup> <a name="RefreshableModeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableModeInput"></a>

```go
func RefreshableModeInput() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="SourceAutonomousDatabaseIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```go
func SourceAutonomousDatabaseIdInput() *string
```

- *Type:* *string

---

##### `TimeOfAutoRefreshStartInput`<sup>Optional</sup> <a name="TimeOfAutoRefreshStartInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStartInput"></a>

```go
func TimeOfAutoRefreshStartInput() *string
```

- *Type:* *string

---

##### `AutoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="AutoRefreshFrequencyInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshFrequencyInSeconds"></a>

```go
func AutoRefreshFrequencyInSeconds() *f64
```

- *Type:* *f64

---

##### `AutoRefreshPointLagInSeconds`<sup>Required</sup> <a name="AutoRefreshPointLagInSeconds" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.autoRefreshPointLagInSeconds"></a>

```go
func AutoRefreshPointLagInSeconds() *f64
```

- *Type:* *f64

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.cloneType"></a>

```go
func CloneType() *string
```

- *Type:* *string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.openMode"></a>

```go
func OpenMode() *string
```

- *Type:* *string

---

##### `RefreshableMode`<sup>Required</sup> <a name="RefreshableMode" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.refreshableMode"></a>

```go
func RefreshableMode() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.sourceAutonomousDatabaseId"></a>

```go
func SourceAutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `TimeOfAutoRefreshStart`<sup>Required</sup> <a name="TimeOfAutoRefreshStart" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.timeOfAutoRefreshStart"></a>

```go
func TimeOfAutoRefreshStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArnInput">SourceAutonomousDatabaseArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArn">SourceAutonomousDatabaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseArnInput`<sup>Optional</sup> <a name="SourceAutonomousDatabaseArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArnInput"></a>

```go
func SourceAutonomousDatabaseArnInput() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseArn`<sup>Required</sup> <a name="SourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.sourceAutonomousDatabaseArn"></a>

```go
func SourceAutonomousDatabaseArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsReplicateAutomaticBackups` <a name="ResetIsReplicateAutomaticBackups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.resetIsReplicateAutomaticBackups"></a>

```go
func ResetIsReplicateAutomaticBackups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackupsInput">IsReplicateAutomaticBackupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryTypeInput">RemoteDisasterRecoveryTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArnInput">SourceAutonomousDatabaseArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackups">IsReplicateAutomaticBackups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryType">RemoteDisasterRecoveryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArn">SourceAutonomousDatabaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsReplicateAutomaticBackupsInput`<sup>Optional</sup> <a name="IsReplicateAutomaticBackupsInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackupsInput"></a>

```go
func IsReplicateAutomaticBackupsInput() interface{}
```

- *Type:* interface{}

---

##### `RemoteDisasterRecoveryTypeInput`<sup>Optional</sup> <a name="RemoteDisasterRecoveryTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryTypeInput"></a>

```go
func RemoteDisasterRecoveryTypeInput() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseArnInput`<sup>Optional</sup> <a name="SourceAutonomousDatabaseArnInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArnInput"></a>

```go
func SourceAutonomousDatabaseArnInput() *string
```

- *Type:* *string

---

##### `IsReplicateAutomaticBackups`<sup>Required</sup> <a name="IsReplicateAutomaticBackups" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.isReplicateAutomaticBackups"></a>

```go
func IsReplicateAutomaticBackups() interface{}
```

- *Type:* interface{}

---

##### `RemoteDisasterRecoveryType`<sup>Required</sup> <a name="RemoteDisasterRecoveryType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.remoteDisasterRecoveryType"></a>

```go
func RemoteDisasterRecoveryType() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseArn`<sup>Required</sup> <a name="SourceAutonomousDatabaseArn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.sourceAutonomousDatabaseArn"></a>

```go
func SourceAutonomousDatabaseArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseSourceConfigurationDatabaseCloneList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneTypeInput">CloneTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseIdInput">SourceAutonomousDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneType">CloneType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloneTypeInput`<sup>Optional</sup> <a name="CloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneTypeInput"></a>

```go
func CloneTypeInput() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="SourceAutonomousDatabaseIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```go
func SourceAutonomousDatabaseIdInput() *string
```

- *Type:* *string

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.cloneType"></a>

```go
func CloneType() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.sourceAutonomousDatabaseId"></a>

```go
func SourceAutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseSourceConfigurationList <a name="OdbAutonomousDatabaseSourceConfigurationList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseSourceConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseSourceConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseSourceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseSourceConfigurationOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloneToRefreshable` <a name="PutCloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCloneToRefreshable"></a>

```go
func PutCloneToRefreshable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCloneToRefreshable.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCrossRegionDataGuard` <a name="PutCrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDataGuard"></a>

```go
func PutCrossRegionDataGuard(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDataGuard.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCrossRegionDisasterRecovery` <a name="PutCrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDisasterRecovery"></a>

```go
func PutCrossRegionDisasterRecovery(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putCrossRegionDisasterRecovery.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDatabaseClone` <a name="PutDatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putDatabaseClone"></a>

```go
func PutDatabaseClone(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putDatabaseClone.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPointInTimeRestore` <a name="PutPointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putPointInTimeRestore"></a>

```go
func PutPointInTimeRestore(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putPointInTimeRestore.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRestoreFromBackup` <a name="PutRestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putRestoreFromBackup"></a>

```go
func PutRestoreFromBackup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.putRestoreFromBackup.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCloneToRefreshable` <a name="ResetCloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCloneToRefreshable"></a>

```go
func ResetCloneToRefreshable()
```

##### `ResetCrossRegionDataGuard` <a name="ResetCrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDataGuard"></a>

```go
func ResetCrossRegionDataGuard()
```

##### `ResetCrossRegionDisasterRecovery` <a name="ResetCrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetCrossRegionDisasterRecovery"></a>

```go
func ResetCrossRegionDisasterRecovery()
```

##### `ResetDatabaseClone` <a name="ResetDatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetDatabaseClone"></a>

```go
func ResetDatabaseClone()
```

##### `ResetPointInTimeRestore` <a name="ResetPointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetPointInTimeRestore"></a>

```go
func ResetPointInTimeRestore()
```

##### `ResetRestoreFromBackup` <a name="ResetRestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.resetRestoreFromBackup"></a>

```go
func ResetRestoreFromBackup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshable">CloneToRefreshable</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuard">CrossRegionDataGuard</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecovery">CrossRegionDisasterRecovery</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseClone">DatabaseClone</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList">OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestore">PointInTimeRestore</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackup">RestoreFromBackup</a></code> | <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshableInput">CloneToRefreshableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuardInput">CrossRegionDataGuardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecoveryInput">CrossRegionDisasterRecoveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseCloneInput">DatabaseCloneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestoreInput">PointInTimeRestoreInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackupInput">RestoreFromBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloneToRefreshable`<sup>Required</sup> <a name="CloneToRefreshable" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshable"></a>

```go
func CloneToRefreshable() OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList">OdbAutonomousDatabaseSourceConfigurationCloneToRefreshableList</a>

---

##### `CrossRegionDataGuard`<sup>Required</sup> <a name="CrossRegionDataGuard" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuard"></a>

```go
func CrossRegionDataGuard() OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDataGuardList</a>

---

##### `CrossRegionDisasterRecovery`<sup>Required</sup> <a name="CrossRegionDisasterRecovery" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecovery"></a>

```go
func CrossRegionDisasterRecovery() OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList">OdbAutonomousDatabaseSourceConfigurationCrossRegionDisasterRecoveryList</a>

---

##### `DatabaseClone`<sup>Required</sup> <a name="DatabaseClone" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseClone"></a>

```go
func DatabaseClone() OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList">OdbAutonomousDatabaseSourceConfigurationDatabaseCloneList</a>

---

##### `PointInTimeRestore`<sup>Required</sup> <a name="PointInTimeRestore" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestore"></a>

```go
func PointInTimeRestore() OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList">OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList</a>

---

##### `RestoreFromBackup`<sup>Required</sup> <a name="RestoreFromBackup" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackup"></a>

```go
func RestoreFromBackup() OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList
```

- *Type:* <a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList">OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList</a>

---

##### `CloneToRefreshableInput`<sup>Optional</sup> <a name="CloneToRefreshableInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.cloneToRefreshableInput"></a>

```go
func CloneToRefreshableInput() interface{}
```

- *Type:* interface{}

---

##### `CrossRegionDataGuardInput`<sup>Optional</sup> <a name="CrossRegionDataGuardInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDataGuardInput"></a>

```go
func CrossRegionDataGuardInput() interface{}
```

- *Type:* interface{}

---

##### `CrossRegionDisasterRecoveryInput`<sup>Optional</sup> <a name="CrossRegionDisasterRecoveryInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.crossRegionDisasterRecoveryInput"></a>

```go
func CrossRegionDisasterRecoveryInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseCloneInput`<sup>Optional</sup> <a name="DatabaseCloneInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.databaseCloneInput"></a>

```go
func DatabaseCloneInput() interface{}
```

- *Type:* interface{}

---

##### `PointInTimeRestoreInput`<sup>Optional</sup> <a name="PointInTimeRestoreInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.pointInTimeRestoreInput"></a>

```go
func PointInTimeRestoreInput() interface{}
```

- *Type:* interface{}

---

##### `RestoreFromBackupInput`<sup>Optional</sup> <a name="RestoreFromBackupInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.restoreFromBackupInput"></a>

```go
func RestoreFromBackupInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloneTableSpaceList` <a name="ResetCloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetCloneTableSpaceList"></a>

```go
func ResetCloneTableSpaceList()
```

##### `ResetTimestamp` <a name="ResetTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetTimestamp"></a>

```go
func ResetTimestamp()
```

##### `ResetUseLatestAvailableBackupTimestamp` <a name="ResetUseLatestAvailableBackupTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.resetUseLatestAvailableBackupTimestamp"></a>

```go
func ResetUseLatestAvailableBackupTimestamp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceListInput">CloneTableSpaceListInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTypeInput">CloneTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseIdInput">SourceAutonomousDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestampInput">TimestampInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestampInput">UseLatestAvailableBackupTimestampInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceList">CloneTableSpaceList</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneType">CloneType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestamp">UseLatestAvailableBackupTimestamp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloneTableSpaceListInput`<sup>Optional</sup> <a name="CloneTableSpaceListInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceListInput"></a>

```go
func CloneTableSpaceListInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `CloneTypeInput`<sup>Optional</sup> <a name="CloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTypeInput"></a>

```go
func CloneTypeInput() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="SourceAutonomousDatabaseIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseIdInput"></a>

```go
func SourceAutonomousDatabaseIdInput() *string
```

- *Type:* *string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestampInput"></a>

```go
func TimestampInput() *string
```

- *Type:* *string

---

##### `UseLatestAvailableBackupTimestampInput`<sup>Optional</sup> <a name="UseLatestAvailableBackupTimestampInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestampInput"></a>

```go
func UseLatestAvailableBackupTimestampInput() interface{}
```

- *Type:* interface{}

---

##### `CloneTableSpaceList`<sup>Required</sup> <a name="CloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneTableSpaceList"></a>

```go
func CloneTableSpaceList() *[]*f64
```

- *Type:* *[]*f64

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.cloneType"></a>

```go
func CloneType() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.sourceAutonomousDatabaseId"></a>

```go
func SourceAutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `UseLatestAvailableBackupTimestamp`<sup>Required</sup> <a name="UseLatestAvailableBackupTimestamp" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.useLatestAvailableBackupTimestamp"></a>

```go
func UseLatestAvailableBackupTimestamp() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationPointInTimeRestoreOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference <a name="OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloneTableSpaceList` <a name="ResetCloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.resetCloneTableSpaceList"></a>

```go
func ResetCloneTableSpaceList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupIdInput">AutonomousDatabaseBackupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceListInput">CloneTableSpaceListInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTypeInput">CloneTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupId">AutonomousDatabaseBackupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceList">CloneTableSpaceList</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneType">CloneType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseBackupIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseBackupIdInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupIdInput"></a>

```go
func AutonomousDatabaseBackupIdInput() *string
```

- *Type:* *string

---

##### `CloneTableSpaceListInput`<sup>Optional</sup> <a name="CloneTableSpaceListInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceListInput"></a>

```go
func CloneTableSpaceListInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `CloneTypeInput`<sup>Optional</sup> <a name="CloneTypeInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTypeInput"></a>

```go
func CloneTypeInput() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseBackupId`<sup>Required</sup> <a name="AutonomousDatabaseBackupId" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.autonomousDatabaseBackupId"></a>

```go
func AutonomousDatabaseBackupId() *string
```

- *Type:* *string

---

##### `CloneTableSpaceList`<sup>Required</sup> <a name="CloneTableSpaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneTableSpaceList"></a>

```go
func CloneTableSpaceList() *[]*f64
```

- *Type:* *[]*f64

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.cloneType"></a>

```go
func CloneType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseSourceConfigurationRestoreFromBackupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseTimeoutsOutputReference <a name="OdbAutonomousDatabaseTimeoutsOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OdbAutonomousDatabaseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseTransportableTablespaceList <a name="OdbAutonomousDatabaseTransportableTablespaceList" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseTransportableTablespaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbAutonomousDatabaseTransportableTablespaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.get"></a>

```go
func Get(index *f64) OdbAutonomousDatabaseTransportableTablespaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbAutonomousDatabaseTransportableTablespaceOutputReference <a name="OdbAutonomousDatabaseTransportableTablespaceOutputReference" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/odbautonomousdatabase"

odbautonomousdatabase.NewOdbAutonomousDatabaseTransportableTablespaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbAutonomousDatabaseTransportableTablespaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTtsBundleUrl` <a name="ResetTtsBundleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.resetTtsBundleUrl"></a>

```go
func ResetTtsBundleUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrlInput">TtsBundleUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrl">TtsBundleUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TtsBundleUrlInput`<sup>Optional</sup> <a name="TtsBundleUrlInput" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrlInput"></a>

```go
func TtsBundleUrlInput() *string
```

- *Type:* *string

---

##### `TtsBundleUrl`<sup>Required</sup> <a name="TtsBundleUrl" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.ttsBundleUrl"></a>

```go
func TtsBundleUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.odbAutonomousDatabase.OdbAutonomousDatabaseTransportableTablespaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



