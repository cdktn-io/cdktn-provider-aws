# `dataAwsDbSnapshot` Submodule <a name="`dataAwsDbSnapshot` Submodule" id="@cdktn/provider-aws.dataAwsDbSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDbSnapshot <a name="DataAwsDbSnapshot" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot aws_db_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsDbSnapshot(Construct Scope, string Id, DataAwsDbSnapshotConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig">DataAwsDbSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig">DataAwsDbSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbInstanceIdentifier">ResetDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbSnapshotIdentifier">ResetDbSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludePublic">ResetIncludePublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludeShared">ResetIncludeShared</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetMostRecent">ResetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetSnapshotType">ResetSnapshotType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDbInstanceIdentifier` <a name="ResetDbInstanceIdentifier" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbInstanceIdentifier"></a>

```csharp
private void ResetDbInstanceIdentifier()
```

##### `ResetDbSnapshotIdentifier` <a name="ResetDbSnapshotIdentifier" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetDbSnapshotIdentifier"></a>

```csharp
private void ResetDbSnapshotIdentifier()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludePublic` <a name="ResetIncludePublic" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludePublic"></a>

```csharp
private void ResetIncludePublic()
```

##### `ResetIncludeShared` <a name="ResetIncludeShared" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetIncludeShared"></a>

```csharp
private void ResetIncludeShared()
```

##### `ResetMostRecent` <a name="ResetMostRecent" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetMostRecent"></a>

```csharp
private void ResetMostRecent()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSnapshotType` <a name="ResetSnapshotType" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetSnapshotType"></a>

```csharp
private void ResetSnapshotType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsDbSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDbSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDbSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDbSnapshot.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDbSnapshot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsDbSnapshot resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsDbSnapshot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsDbSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsDbSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotArn">DbSnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.encrypted">Encrypted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.optionGroupName">OptionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.originalSnapshotCreateTime">OriginalSnapshotCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotCreateTime">SnapshotCreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceDbSnapshotIdentifier">SourceDbSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceRegion">SourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifierInput">DbInstanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifierInput">DbSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublicInput">IncludePublicInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeSharedInput">IncludeSharedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecentInput">MostRecentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotTypeInput">SnapshotTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifier">DbInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifier">DbSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublic">IncludePublic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeShared">IncludeShared</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecent">MostRecent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotType">SnapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; }
```

- *Type:* double

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `DbSnapshotArn`<sup>Required</sup> <a name="DbSnapshotArn" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotArn"></a>

```csharp
public string DbSnapshotArn { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.encrypted"></a>

```csharp
public IResolvable Encrypted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `OptionGroupName`<sup>Required</sup> <a name="OptionGroupName" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.optionGroupName"></a>

```csharp
public string OptionGroupName { get; }
```

- *Type:* string

---

##### `OriginalSnapshotCreateTime`<sup>Required</sup> <a name="OriginalSnapshotCreateTime" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.originalSnapshotCreateTime"></a>

```csharp
public string OriginalSnapshotCreateTime { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `SnapshotCreateTime`<sup>Required</sup> <a name="SnapshotCreateTime" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotCreateTime"></a>

```csharp
public string SnapshotCreateTime { get; }
```

- *Type:* string

---

##### `SourceDbSnapshotIdentifier`<sup>Required</sup> <a name="SourceDbSnapshotIdentifier" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceDbSnapshotIdentifier"></a>

```csharp
public string SourceDbSnapshotIdentifier { get; }
```

- *Type:* string

---

##### `SourceRegion`<sup>Required</sup> <a name="SourceRegion" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.sourceRegion"></a>

```csharp
public string SourceRegion { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `DbInstanceIdentifierInput`<sup>Optional</sup> <a name="DbInstanceIdentifierInput" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifierInput"></a>

```csharp
public string DbInstanceIdentifierInput { get; }
```

- *Type:* string

---

##### `DbSnapshotIdentifierInput`<sup>Optional</sup> <a name="DbSnapshotIdentifierInput" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifierInput"></a>

```csharp
public string DbSnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludePublicInput`<sup>Optional</sup> <a name="IncludePublicInput" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublicInput"></a>

```csharp
public bool|IResolvable IncludePublicInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeSharedInput`<sup>Optional</sup> <a name="IncludeSharedInput" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeSharedInput"></a>

```csharp
public bool|IResolvable IncludeSharedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MostRecentInput`<sup>Optional</sup> <a name="MostRecentInput" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecentInput"></a>

```csharp
public bool|IResolvable MostRecentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SnapshotTypeInput`<sup>Optional</sup> <a name="SnapshotTypeInput" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotTypeInput"></a>

```csharp
public string SnapshotTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DbInstanceIdentifier`<sup>Required</sup> <a name="DbInstanceIdentifier" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbInstanceIdentifier"></a>

```csharp
public string DbInstanceIdentifier { get; }
```

- *Type:* string

---

##### `DbSnapshotIdentifier`<sup>Required</sup> <a name="DbSnapshotIdentifier" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.dbSnapshotIdentifier"></a>

```csharp
public string DbSnapshotIdentifier { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludePublic`<sup>Required</sup> <a name="IncludePublic" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includePublic"></a>

```csharp
public bool|IResolvable IncludePublic { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeShared`<sup>Required</sup> <a name="IncludeShared" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.includeShared"></a>

```csharp
public bool|IResolvable IncludeShared { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MostRecent`<sup>Required</sup> <a name="MostRecent" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.mostRecent"></a>

```csharp
public bool|IResolvable MostRecent { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SnapshotType`<sup>Required</sup> <a name="SnapshotType" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.snapshotType"></a>

```csharp
public string SnapshotType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDbSnapshotConfig <a name="DataAwsDbSnapshotConfig" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsDbSnapshotConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DbInstanceIdentifier = null,
    string DbSnapshotIdentifier = null,
    string Id = null,
    bool|IResolvable IncludePublic = null,
    bool|IResolvable IncludeShared = null,
    bool|IResolvable MostRecent = null,
    string Region = null,
    string SnapshotType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbInstanceIdentifier">DbInstanceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#db_instance_identifier DataAwsDbSnapshot#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbSnapshotIdentifier">DbSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#db_snapshot_identifier DataAwsDbSnapshot#db_snapshot_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#id DataAwsDbSnapshot#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includePublic">IncludePublic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#include_public DataAwsDbSnapshot#include_public}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includeShared">IncludeShared</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#include_shared DataAwsDbSnapshot#include_shared}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.mostRecent">MostRecent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#most_recent DataAwsDbSnapshot#most_recent}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.snapshotType">SnapshotType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#snapshot_type DataAwsDbSnapshot#snapshot_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#tags DataAwsDbSnapshot#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DbInstanceIdentifier`<sup>Optional</sup> <a name="DbInstanceIdentifier" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbInstanceIdentifier"></a>

```csharp
public string DbInstanceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#db_instance_identifier DataAwsDbSnapshot#db_instance_identifier}.

---

##### `DbSnapshotIdentifier`<sup>Optional</sup> <a name="DbSnapshotIdentifier" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.dbSnapshotIdentifier"></a>

```csharp
public string DbSnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#db_snapshot_identifier DataAwsDbSnapshot#db_snapshot_identifier}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#id DataAwsDbSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludePublic`<sup>Optional</sup> <a name="IncludePublic" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includePublic"></a>

```csharp
public bool|IResolvable IncludePublic { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#include_public DataAwsDbSnapshot#include_public}.

---

##### `IncludeShared`<sup>Optional</sup> <a name="IncludeShared" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.includeShared"></a>

```csharp
public bool|IResolvable IncludeShared { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#include_shared DataAwsDbSnapshot#include_shared}.

---

##### `MostRecent`<sup>Optional</sup> <a name="MostRecent" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.mostRecent"></a>

```csharp
public bool|IResolvable MostRecent { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#most_recent DataAwsDbSnapshot#most_recent}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#region DataAwsDbSnapshot#region}

---

##### `SnapshotType`<sup>Optional</sup> <a name="SnapshotType" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.snapshotType"></a>

```csharp
public string SnapshotType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#snapshot_type DataAwsDbSnapshot#snapshot_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsDbSnapshot.DataAwsDbSnapshotConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/data-sources/db_snapshot#tags DataAwsDbSnapshot#tags}.

---



