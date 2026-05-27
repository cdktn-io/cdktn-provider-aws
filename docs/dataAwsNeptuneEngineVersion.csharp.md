# `dataAwsNeptuneEngineVersion` Submodule <a name="`dataAwsNeptuneEngineVersion` Submodule" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNeptuneEngineVersion <a name="DataAwsNeptuneEngineVersion" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version aws_neptune_engine_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsNeptuneEngineVersion(Construct Scope, string Id, DataAwsNeptuneEngineVersionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig">DataAwsNeptuneEngineVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig">DataAwsNeptuneEngineVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetDefaultOnly">ResetDefaultOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetHasMajorTarget">ResetHasMajorTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetHasMinorTarget">ResetHasMinorTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetLatest">ResetLatest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetParameterGroupFamily">ResetParameterGroupFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredMajorTargets">ResetPreferredMajorTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredUpgradeTargets">ResetPreferredUpgradeTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredVersions">ResetPreferredVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDefaultOnly` <a name="ResetDefaultOnly" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetDefaultOnly"></a>

```csharp
private void ResetDefaultOnly()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetHasMajorTarget` <a name="ResetHasMajorTarget" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetHasMajorTarget"></a>

```csharp
private void ResetHasMajorTarget()
```

##### `ResetHasMinorTarget` <a name="ResetHasMinorTarget" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetHasMinorTarget"></a>

```csharp
private void ResetHasMinorTarget()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLatest` <a name="ResetLatest" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetLatest"></a>

```csharp
private void ResetLatest()
```

##### `ResetParameterGroupFamily` <a name="ResetParameterGroupFamily" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetParameterGroupFamily"></a>

```csharp
private void ResetParameterGroupFamily()
```

##### `ResetPreferredMajorTargets` <a name="ResetPreferredMajorTargets" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredMajorTargets"></a>

```csharp
private void ResetPreferredMajorTargets()
```

##### `ResetPreferredUpgradeTargets` <a name="ResetPreferredUpgradeTargets" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredUpgradeTargets"></a>

```csharp
private void ResetPreferredUpgradeTargets()
```

##### `ResetPreferredVersions` <a name="ResetPreferredVersions" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetPreferredVersions"></a>

```csharp
private void ResetPreferredVersions()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsNeptuneEngineVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsNeptuneEngineVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsNeptuneEngineVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsNeptuneEngineVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsNeptuneEngineVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsNeptuneEngineVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsNeptuneEngineVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsNeptuneEngineVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsNeptuneEngineVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultCharacterSet">DefaultCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineDescription">EngineDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.exportableLogTypes">ExportableLogTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportedCharacterSets">SupportedCharacterSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportedTimezones">SupportedTimezones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsGlobalDatabases">SupportsGlobalDatabases</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsLogExportsToCloudwatch">SupportsLogExportsToCloudwatch</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsReadReplica">SupportsReadReplica</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validMajorTargets">ValidMajorTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validMinorTargets">ValidMinorTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validUpgradeTargets">ValidUpgradeTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionActual">VersionActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionDescription">VersionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultOnlyInput">DefaultOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMajorTargetInput">HasMajorTargetInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMinorTargetInput">HasMinorTargetInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.latestInput">LatestInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamilyInput">ParameterGroupFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredMajorTargetsInput">PreferredMajorTargetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredUpgradeTargetsInput">PreferredUpgradeTargetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersionsInput">PreferredVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultOnly">DefaultOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMajorTarget">HasMajorTarget</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMinorTarget">HasMinorTarget</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.latest">Latest</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamily">ParameterGroupFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredMajorTargets">PreferredMajorTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredUpgradeTargets">PreferredUpgradeTargets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersions">PreferredVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DefaultCharacterSet`<sup>Required</sup> <a name="DefaultCharacterSet" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultCharacterSet"></a>

```csharp
public string DefaultCharacterSet { get; }
```

- *Type:* string

---

##### `EngineDescription`<sup>Required</sup> <a name="EngineDescription" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineDescription"></a>

```csharp
public string EngineDescription { get; }
```

- *Type:* string

---

##### `ExportableLogTypes`<sup>Required</sup> <a name="ExportableLogTypes" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.exportableLogTypes"></a>

```csharp
public string[] ExportableLogTypes { get; }
```

- *Type:* string[]

---

##### `SupportedCharacterSets`<sup>Required</sup> <a name="SupportedCharacterSets" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportedCharacterSets"></a>

```csharp
public string[] SupportedCharacterSets { get; }
```

- *Type:* string[]

---

##### `SupportedTimezones`<sup>Required</sup> <a name="SupportedTimezones" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportedTimezones"></a>

```csharp
public string[] SupportedTimezones { get; }
```

- *Type:* string[]

---

##### `SupportsGlobalDatabases`<sup>Required</sup> <a name="SupportsGlobalDatabases" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsGlobalDatabases"></a>

```csharp
public IResolvable SupportsGlobalDatabases { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SupportsLogExportsToCloudwatch`<sup>Required</sup> <a name="SupportsLogExportsToCloudwatch" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsLogExportsToCloudwatch"></a>

```csharp
public IResolvable SupportsLogExportsToCloudwatch { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SupportsReadReplica`<sup>Required</sup> <a name="SupportsReadReplica" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.supportsReadReplica"></a>

```csharp
public IResolvable SupportsReadReplica { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ValidMajorTargets`<sup>Required</sup> <a name="ValidMajorTargets" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validMajorTargets"></a>

```csharp
public string[] ValidMajorTargets { get; }
```

- *Type:* string[]

---

##### `ValidMinorTargets`<sup>Required</sup> <a name="ValidMinorTargets" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validMinorTargets"></a>

```csharp
public string[] ValidMinorTargets { get; }
```

- *Type:* string[]

---

##### `ValidUpgradeTargets`<sup>Required</sup> <a name="ValidUpgradeTargets" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.validUpgradeTargets"></a>

```csharp
public string[] ValidUpgradeTargets { get; }
```

- *Type:* string[]

---

##### `VersionActual`<sup>Required</sup> <a name="VersionActual" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionActual"></a>

```csharp
public string VersionActual { get; }
```

- *Type:* string

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionDescription"></a>

```csharp
public string VersionDescription { get; }
```

- *Type:* string

---

##### `DefaultOnlyInput`<sup>Optional</sup> <a name="DefaultOnlyInput" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultOnlyInput"></a>

```csharp
public bool|IResolvable DefaultOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `HasMajorTargetInput`<sup>Optional</sup> <a name="HasMajorTargetInput" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMajorTargetInput"></a>

```csharp
public bool|IResolvable HasMajorTargetInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HasMinorTargetInput`<sup>Optional</sup> <a name="HasMinorTargetInput" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMinorTargetInput"></a>

```csharp
public bool|IResolvable HasMinorTargetInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LatestInput`<sup>Optional</sup> <a name="LatestInput" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.latestInput"></a>

```csharp
public bool|IResolvable LatestInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ParameterGroupFamilyInput`<sup>Optional</sup> <a name="ParameterGroupFamilyInput" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamilyInput"></a>

```csharp
public string ParameterGroupFamilyInput { get; }
```

- *Type:* string

---

##### `PreferredMajorTargetsInput`<sup>Optional</sup> <a name="PreferredMajorTargetsInput" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredMajorTargetsInput"></a>

```csharp
public string[] PreferredMajorTargetsInput { get; }
```

- *Type:* string[]

---

##### `PreferredUpgradeTargetsInput`<sup>Optional</sup> <a name="PreferredUpgradeTargetsInput" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredUpgradeTargetsInput"></a>

```csharp
public string[] PreferredUpgradeTargetsInput { get; }
```

- *Type:* string[]

---

##### `PreferredVersionsInput`<sup>Optional</sup> <a name="PreferredVersionsInput" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersionsInput"></a>

```csharp
public string[] PreferredVersionsInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `DefaultOnly`<sup>Required</sup> <a name="DefaultOnly" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.defaultOnly"></a>

```csharp
public bool|IResolvable DefaultOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `HasMajorTarget`<sup>Required</sup> <a name="HasMajorTarget" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMajorTarget"></a>

```csharp
public bool|IResolvable HasMajorTarget { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HasMinorTarget`<sup>Required</sup> <a name="HasMinorTarget" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.hasMinorTarget"></a>

```csharp
public bool|IResolvable HasMinorTarget { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Latest`<sup>Required</sup> <a name="Latest" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.latest"></a>

```csharp
public bool|IResolvable Latest { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ParameterGroupFamily`<sup>Required</sup> <a name="ParameterGroupFamily" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.parameterGroupFamily"></a>

```csharp
public string ParameterGroupFamily { get; }
```

- *Type:* string

---

##### `PreferredMajorTargets`<sup>Required</sup> <a name="PreferredMajorTargets" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredMajorTargets"></a>

```csharp
public string[] PreferredMajorTargets { get; }
```

- *Type:* string[]

---

##### `PreferredUpgradeTargets`<sup>Required</sup> <a name="PreferredUpgradeTargets" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredUpgradeTargets"></a>

```csharp
public string[] PreferredUpgradeTargets { get; }
```

- *Type:* string[]

---

##### `PreferredVersions`<sup>Required</sup> <a name="PreferredVersions" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.preferredVersions"></a>

```csharp
public string[] PreferredVersions { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNeptuneEngineVersionConfig <a name="DataAwsNeptuneEngineVersionConfig" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsNeptuneEngineVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable DefaultOnly = null,
    string Engine = null,
    bool|IResolvable HasMajorTarget = null,
    bool|IResolvable HasMinorTarget = null,
    string Id = null,
    bool|IResolvable Latest = null,
    string ParameterGroupFamily = null,
    string[] PreferredMajorTargets = null,
    string[] PreferredUpgradeTargets = null,
    string[] PreferredVersions = null,
    string Region = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.defaultOnly">DefaultOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#default_only DataAwsNeptuneEngineVersion#default_only}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#engine DataAwsNeptuneEngineVersion#engine}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.hasMajorTarget">HasMajorTarget</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#has_major_target DataAwsNeptuneEngineVersion#has_major_target}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.hasMinorTarget">HasMinorTarget</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#has_minor_target DataAwsNeptuneEngineVersion#has_minor_target}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#id DataAwsNeptuneEngineVersion#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.latest">Latest</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#latest DataAwsNeptuneEngineVersion#latest}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.parameterGroupFamily">ParameterGroupFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#parameter_group_family DataAwsNeptuneEngineVersion#parameter_group_family}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredMajorTargets">PreferredMajorTargets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#preferred_major_targets DataAwsNeptuneEngineVersion#preferred_major_targets}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredUpgradeTargets">PreferredUpgradeTargets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#preferred_upgrade_targets DataAwsNeptuneEngineVersion#preferred_upgrade_targets}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredVersions">PreferredVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#preferred_versions DataAwsNeptuneEngineVersion#preferred_versions}. |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#version DataAwsNeptuneEngineVersion#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultOnly`<sup>Optional</sup> <a name="DefaultOnly" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.defaultOnly"></a>

```csharp
public bool|IResolvable DefaultOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#default_only DataAwsNeptuneEngineVersion#default_only}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#engine DataAwsNeptuneEngineVersion#engine}.

---

##### `HasMajorTarget`<sup>Optional</sup> <a name="HasMajorTarget" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.hasMajorTarget"></a>

```csharp
public bool|IResolvable HasMajorTarget { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#has_major_target DataAwsNeptuneEngineVersion#has_major_target}.

---

##### `HasMinorTarget`<sup>Optional</sup> <a name="HasMinorTarget" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.hasMinorTarget"></a>

```csharp
public bool|IResolvable HasMinorTarget { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#has_minor_target DataAwsNeptuneEngineVersion#has_minor_target}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#id DataAwsNeptuneEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Latest`<sup>Optional</sup> <a name="Latest" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.latest"></a>

```csharp
public bool|IResolvable Latest { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#latest DataAwsNeptuneEngineVersion#latest}.

---

##### `ParameterGroupFamily`<sup>Optional</sup> <a name="ParameterGroupFamily" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.parameterGroupFamily"></a>

```csharp
public string ParameterGroupFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#parameter_group_family DataAwsNeptuneEngineVersion#parameter_group_family}.

---

##### `PreferredMajorTargets`<sup>Optional</sup> <a name="PreferredMajorTargets" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredMajorTargets"></a>

```csharp
public string[] PreferredMajorTargets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#preferred_major_targets DataAwsNeptuneEngineVersion#preferred_major_targets}.

---

##### `PreferredUpgradeTargets`<sup>Optional</sup> <a name="PreferredUpgradeTargets" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredUpgradeTargets"></a>

```csharp
public string[] PreferredUpgradeTargets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#preferred_upgrade_targets DataAwsNeptuneEngineVersion#preferred_upgrade_targets}.

---

##### `PreferredVersions`<sup>Optional</sup> <a name="PreferredVersions" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.preferredVersions"></a>

```csharp
public string[] PreferredVersions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#preferred_versions DataAwsNeptuneEngineVersion#preferred_versions}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#region DataAwsNeptuneEngineVersion#region}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-aws.dataAwsNeptuneEngineVersion.DataAwsNeptuneEngineVersionConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/neptune_engine_version#version DataAwsNeptuneEngineVersion#version}.

---



