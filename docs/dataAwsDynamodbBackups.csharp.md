# `dataAwsDynamodbBackups` Submodule <a name="`dataAwsDynamodbBackups` Submodule" id="@cdktn/provider-aws.dataAwsDynamodbBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDynamodbBackups <a name="DataAwsDynamodbBackups" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/dynamodb_backups aws_dynamodb_backups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsDynamodbBackups(Construct Scope, string Id, DataAwsDynamodbBackupsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig">DataAwsDynamodbBackupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig">DataAwsDynamodbBackupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetBackupType">ResetBackupType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeLowerBound">ResetTimeRangeLowerBound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeUpperBound">ResetTimeRangeUpperBound</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBackupType` <a name="ResetBackupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetBackupType"></a>

```csharp
private void ResetBackupType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetTimeRangeLowerBound` <a name="ResetTimeRangeLowerBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeLowerBound"></a>

```csharp
private void ResetTimeRangeLowerBound()
```

##### `ResetTimeRangeUpperBound` <a name="ResetTimeRangeUpperBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.resetTimeRangeUpperBound"></a>

```csharp
private void ResetTimeRangeUpperBound()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsDynamodbBackups resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDynamodbBackups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDynamodbBackups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDynamodbBackups.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDynamodbBackups.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsDynamodbBackups resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsDynamodbBackups to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsDynamodbBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/dynamodb_backups#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsDynamodbBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupSummaries">BackupSummaries</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList">DataAwsDynamodbBackupsBackupSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupTypeInput">BackupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBoundInput">TimeRangeLowerBoundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBoundInput">TimeRangeUpperBoundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupType">BackupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBound">TimeRangeLowerBound</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBound">TimeRangeUpperBound</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BackupSummaries`<sup>Required</sup> <a name="BackupSummaries" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupSummaries"></a>

```csharp
public DataAwsDynamodbBackupsBackupSummariesList BackupSummaries { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList">DataAwsDynamodbBackupsBackupSummariesList</a>

---

##### `BackupTypeInput`<sup>Optional</sup> <a name="BackupTypeInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupTypeInput"></a>

```csharp
public string BackupTypeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TimeRangeLowerBoundInput`<sup>Optional</sup> <a name="TimeRangeLowerBoundInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBoundInput"></a>

```csharp
public string TimeRangeLowerBoundInput { get; }
```

- *Type:* string

---

##### `TimeRangeUpperBoundInput`<sup>Optional</sup> <a name="TimeRangeUpperBoundInput" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBoundInput"></a>

```csharp
public string TimeRangeUpperBoundInput { get; }
```

- *Type:* string

---

##### `BackupType`<sup>Required</sup> <a name="BackupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.backupType"></a>

```csharp
public string BackupType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `TimeRangeLowerBound`<sup>Required</sup> <a name="TimeRangeLowerBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeLowerBound"></a>

```csharp
public string TimeRangeLowerBound { get; }
```

- *Type:* string

---

##### `TimeRangeUpperBound`<sup>Required</sup> <a name="TimeRangeUpperBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.timeRangeUpperBound"></a>

```csharp
public string TimeRangeUpperBound { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDynamodbBackupsBackupSummaries <a name="DataAwsDynamodbBackupsBackupSummaries" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsDynamodbBackupsBackupSummaries {

};
```


### DataAwsDynamodbBackupsConfig <a name="DataAwsDynamodbBackupsConfig" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsDynamodbBackupsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BackupType = null,
    string Region = null,
    string TableName = null,
    string TimeRangeLowerBound = null,
    string TimeRangeUpperBound = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.backupType">BackupType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/dynamodb_backups#backup_type DataAwsDynamodbBackups#backup_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/dynamodb_backups#table_name DataAwsDynamodbBackups#table_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeLowerBound">TimeRangeLowerBound</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/dynamodb_backups#time_range_lower_bound DataAwsDynamodbBackups#time_range_lower_bound}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeUpperBound">TimeRangeUpperBound</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/dynamodb_backups#time_range_upper_bound DataAwsDynamodbBackups#time_range_upper_bound}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupType`<sup>Optional</sup> <a name="BackupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.backupType"></a>

```csharp
public string BackupType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/dynamodb_backups#backup_type DataAwsDynamodbBackups#backup_type}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/dynamodb_backups#region DataAwsDynamodbBackups#region}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/dynamodb_backups#table_name DataAwsDynamodbBackups#table_name}.

---

##### `TimeRangeLowerBound`<sup>Optional</sup> <a name="TimeRangeLowerBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeLowerBound"></a>

```csharp
public string TimeRangeLowerBound { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/dynamodb_backups#time_range_lower_bound DataAwsDynamodbBackups#time_range_lower_bound}.

---

##### `TimeRangeUpperBound`<sup>Optional</sup> <a name="TimeRangeUpperBound" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsConfig.property.timeRangeUpperBound"></a>

```csharp
public string TimeRangeUpperBound { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/data-sources/dynamodb_backups#time_range_upper_bound DataAwsDynamodbBackups#time_range_upper_bound}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsDynamodbBackupsBackupSummariesList <a name="DataAwsDynamodbBackupsBackupSummariesList" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsDynamodbBackupsBackupSummariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.get"></a>

```csharp
private DataAwsDynamodbBackupsBackupSummariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsDynamodbBackupsBackupSummariesOutputReference <a name="DataAwsDynamodbBackupsBackupSummariesOutputReference" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsDynamodbBackupsBackupSummariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupArn">BackupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupCreationDateTime">BackupCreationDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupExpiryDateTime">BackupExpiryDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupName">BackupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupSizeBytes">BackupSizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupStatus">BackupStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupType">BackupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableArn">TableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableId">TableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries">DataAwsDynamodbBackupsBackupSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupArn`<sup>Required</sup> <a name="BackupArn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupArn"></a>

```csharp
public string BackupArn { get; }
```

- *Type:* string

---

##### `BackupCreationDateTime`<sup>Required</sup> <a name="BackupCreationDateTime" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupCreationDateTime"></a>

```csharp
public string BackupCreationDateTime { get; }
```

- *Type:* string

---

##### `BackupExpiryDateTime`<sup>Required</sup> <a name="BackupExpiryDateTime" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupExpiryDateTime"></a>

```csharp
public string BackupExpiryDateTime { get; }
```

- *Type:* string

---

##### `BackupName`<sup>Required</sup> <a name="BackupName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupName"></a>

```csharp
public string BackupName { get; }
```

- *Type:* string

---

##### `BackupSizeBytes`<sup>Required</sup> <a name="BackupSizeBytes" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupSizeBytes"></a>

```csharp
public double BackupSizeBytes { get; }
```

- *Type:* double

---

##### `BackupStatus`<sup>Required</sup> <a name="BackupStatus" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupStatus"></a>

```csharp
public string BackupStatus { get; }
```

- *Type:* string

---

##### `BackupType`<sup>Required</sup> <a name="BackupType" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.backupType"></a>

```csharp
public string BackupType { get; }
```

- *Type:* string

---

##### `TableArn`<sup>Required</sup> <a name="TableArn" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableArn"></a>

```csharp
public string TableArn { get; }
```

- *Type:* string

---

##### `TableId`<sup>Required</sup> <a name="TableId" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableId"></a>

```csharp
public string TableId { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummariesOutputReference.property.internalValue"></a>

```csharp
public DataAwsDynamodbBackupsBackupSummaries InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDynamodbBackups.DataAwsDynamodbBackupsBackupSummaries">DataAwsDynamodbBackupsBackupSummaries</a>

---



