# `dataAwsEbsSnapshotIds` Submodule <a name="`dataAwsEbsSnapshotIds` Submodule" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEbsSnapshotIds <a name="DataAwsEbsSnapshotIds" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids aws_ebs_snapshot_ids}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEbsSnapshotIds(Construct Scope, string Id, DataAwsEbsSnapshotIdsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig">DataAwsEbsSnapshotIdsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig">DataAwsEbsSnapshotIdsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetOwners">ResetOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetRestorableByUserIds">ResetRestorableByUserIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsEbsSnapshotIdsFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsEbsSnapshotIdsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts">DataAwsEbsSnapshotIdsTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOwners` <a name="ResetOwners" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetOwners"></a>

```csharp
private void ResetOwners()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRestorableByUserIds` <a name="ResetRestorableByUserIds" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetRestorableByUserIds"></a>

```csharp
private void ResetRestorableByUserIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEbsSnapshotIds resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEbsSnapshotIds.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEbsSnapshotIds.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEbsSnapshotIds.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEbsSnapshotIds.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsEbsSnapshotIds resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEbsSnapshotIds to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEbsSnapshotIds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEbsSnapshotIds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList">DataAwsEbsSnapshotIdsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference">DataAwsEbsSnapshotIdsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.ownersInput">OwnersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.restorableByUserIdsInput">RestorableByUserIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts">DataAwsEbsSnapshotIdsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.owners">Owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.restorableByUserIds">RestorableByUserIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.filter"></a>

```csharp
public DataAwsEbsSnapshotIdsFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList">DataAwsEbsSnapshotIdsFilterList</a>

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.timeouts"></a>

```csharp
public DataAwsEbsSnapshotIdsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference">DataAwsEbsSnapshotIdsTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.filterInput"></a>

```csharp
public IResolvable|DataAwsEbsSnapshotIdsFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OwnersInput`<sup>Optional</sup> <a name="OwnersInput" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.ownersInput"></a>

```csharp
public string[] OwnersInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RestorableByUserIdsInput`<sup>Optional</sup> <a name="RestorableByUserIdsInput" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.restorableByUserIdsInput"></a>

```csharp
public string[] RestorableByUserIdsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAwsEbsSnapshotIdsTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts">DataAwsEbsSnapshotIdsTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.owners"></a>

```csharp
public string[] Owners { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RestorableByUserIds`<sup>Required</sup> <a name="RestorableByUserIds" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.restorableByUserIds"></a>

```csharp
public string[] RestorableByUserIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIds.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEbsSnapshotIdsConfig <a name="DataAwsEbsSnapshotIdsConfig" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEbsSnapshotIdsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataAwsEbsSnapshotIdsFilter[] Filter = null,
    string Id = null,
    string[] Owners = null,
    string Region = null,
    string[] RestorableByUserIds = null,
    DataAwsEbsSnapshotIdsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#id DataAwsEbsSnapshotIds#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.owners">Owners</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#owners DataAwsEbsSnapshotIds#owners}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.restorableByUserIds">RestorableByUserIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#restorable_by_user_ids DataAwsEbsSnapshotIds#restorable_by_user_ids}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts">DataAwsEbsSnapshotIdsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsEbsSnapshotIdsFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#filter DataAwsEbsSnapshotIds#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#id DataAwsEbsSnapshotIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Owners`<sup>Optional</sup> <a name="Owners" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.owners"></a>

```csharp
public string[] Owners { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#owners DataAwsEbsSnapshotIds#owners}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#region DataAwsEbsSnapshotIds#region}

---

##### `RestorableByUserIds`<sup>Optional</sup> <a name="RestorableByUserIds" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.restorableByUserIds"></a>

```csharp
public string[] RestorableByUserIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#restorable_by_user_ids DataAwsEbsSnapshotIds#restorable_by_user_ids}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsConfig.property.timeouts"></a>

```csharp
public DataAwsEbsSnapshotIdsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts">DataAwsEbsSnapshotIdsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#timeouts DataAwsEbsSnapshotIds#timeouts}

---

### DataAwsEbsSnapshotIdsFilter <a name="DataAwsEbsSnapshotIdsFilter" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEbsSnapshotIdsFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#name DataAwsEbsSnapshotIds#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#values DataAwsEbsSnapshotIds#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#name DataAwsEbsSnapshotIds#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#values DataAwsEbsSnapshotIds#values}.

---

### DataAwsEbsSnapshotIdsTimeouts <a name="DataAwsEbsSnapshotIdsTimeouts" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEbsSnapshotIdsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#read DataAwsEbsSnapshotIds#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/data-sources/ebs_snapshot_ids#read DataAwsEbsSnapshotIds#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEbsSnapshotIdsFilterList <a name="DataAwsEbsSnapshotIdsFilterList" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEbsSnapshotIdsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.get"></a>

```csharp
private DataAwsEbsSnapshotIdsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEbsSnapshotIdsFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>[]

---


### DataAwsEbsSnapshotIdsFilterOutputReference <a name="DataAwsEbsSnapshotIdsFilterOutputReference" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEbsSnapshotIdsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEbsSnapshotIdsFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsFilter">DataAwsEbsSnapshotIdsFilter</a>

---


### DataAwsEbsSnapshotIdsTimeoutsOutputReference <a name="DataAwsEbsSnapshotIdsTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEbsSnapshotIdsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts">DataAwsEbsSnapshotIdsTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEbsSnapshotIdsTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEbsSnapshotIds.DataAwsEbsSnapshotIdsTimeouts">DataAwsEbsSnapshotIdsTimeouts</a>

---



