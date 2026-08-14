# `dataAwsSsmPatchBaselines` Submodule <a name="`dataAwsSsmPatchBaselines` Submodule" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmPatchBaselines <a name="DataAwsSsmPatchBaselines" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssm_patch_baselines aws_ssm_patch_baselines}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSsmPatchBaselines(Construct Scope, string Id, DataAwsSsmPatchBaselinesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig">DataAwsSsmPatchBaselinesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig">DataAwsSsmPatchBaselinesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetDefaultBaselines">ResetDefaultBaselines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsSsmPatchBaselinesFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>[]

---

##### `ResetDefaultBaselines` <a name="ResetDefaultBaselines" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetDefaultBaselines"></a>

```csharp
private void ResetDefaultBaselines()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSsmPatchBaselines resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSsmPatchBaselines.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSsmPatchBaselines.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSsmPatchBaselines.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSsmPatchBaselines.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsSsmPatchBaselines resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSsmPatchBaselines to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSsmPatchBaselines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssm_patch_baselines#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSsmPatchBaselines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.baselineIdentities">BaselineIdentities</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList">DataAwsSsmPatchBaselinesBaselineIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList">DataAwsSsmPatchBaselinesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.defaultBaselinesInput">DefaultBaselinesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.defaultBaselines">DefaultBaselines</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BaselineIdentities`<sup>Required</sup> <a name="BaselineIdentities" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.baselineIdentities"></a>

```csharp
public DataAwsSsmPatchBaselinesBaselineIdentitiesList BaselineIdentities { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList">DataAwsSsmPatchBaselinesBaselineIdentitiesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.filter"></a>

```csharp
public DataAwsSsmPatchBaselinesFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList">DataAwsSsmPatchBaselinesFilterList</a>

---

##### `DefaultBaselinesInput`<sup>Optional</sup> <a name="DefaultBaselinesInput" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.defaultBaselinesInput"></a>

```csharp
public bool|IResolvable DefaultBaselinesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.filterInput"></a>

```csharp
public IResolvable|DataAwsSsmPatchBaselinesFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `DefaultBaselines`<sup>Required</sup> <a name="DefaultBaselines" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.defaultBaselines"></a>

```csharp
public bool|IResolvable DefaultBaselines { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmPatchBaselinesBaselineIdentities <a name="DataAwsSsmPatchBaselinesBaselineIdentities" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSsmPatchBaselinesBaselineIdentities {

};
```


### DataAwsSsmPatchBaselinesConfig <a name="DataAwsSsmPatchBaselinesConfig" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSsmPatchBaselinesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable DefaultBaselines = null,
    IResolvable|DataAwsSsmPatchBaselinesFilter[] Filter = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.defaultBaselines">DefaultBaselines</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssm_patch_baselines#default_baselines DataAwsSsmPatchBaselines#default_baselines}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultBaselines`<sup>Optional</sup> <a name="DefaultBaselines" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.defaultBaselines"></a>

```csharp
public bool|IResolvable DefaultBaselines { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssm_patch_baselines#default_baselines DataAwsSsmPatchBaselines#default_baselines}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsSsmPatchBaselinesFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssm_patch_baselines#filter DataAwsSsmPatchBaselines#filter}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssm_patch_baselines#region DataAwsSsmPatchBaselines#region}

---

### DataAwsSsmPatchBaselinesFilter <a name="DataAwsSsmPatchBaselinesFilter" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSsmPatchBaselinesFilter {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssm_patch_baselines#key DataAwsSsmPatchBaselines#key}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssm_patch_baselines#values DataAwsSsmPatchBaselines#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssm_patch_baselines#key DataAwsSsmPatchBaselines#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssm_patch_baselines#values DataAwsSsmPatchBaselines#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmPatchBaselinesBaselineIdentitiesList <a name="DataAwsSsmPatchBaselinesBaselineIdentitiesList" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSsmPatchBaselinesBaselineIdentitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.get"></a>

```csharp
private DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference <a name="DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineDescription">BaselineDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineId">BaselineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineName">BaselineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.defaultBaseline">DefaultBaseline</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentities">DataAwsSsmPatchBaselinesBaselineIdentities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaselineDescription`<sup>Required</sup> <a name="BaselineDescription" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineDescription"></a>

```csharp
public string BaselineDescription { get; }
```

- *Type:* string

---

##### `BaselineId`<sup>Required</sup> <a name="BaselineId" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineId"></a>

```csharp
public string BaselineId { get; }
```

- *Type:* string

---

##### `BaselineName`<sup>Required</sup> <a name="BaselineName" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineName"></a>

```csharp
public string BaselineName { get; }
```

- *Type:* string

---

##### `DefaultBaseline`<sup>Required</sup> <a name="DefaultBaseline" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.defaultBaseline"></a>

```csharp
public IResolvable DefaultBaseline { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmPatchBaselinesBaselineIdentities InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentities">DataAwsSsmPatchBaselinesBaselineIdentities</a>

---


### DataAwsSsmPatchBaselinesFilterList <a name="DataAwsSsmPatchBaselinesFilterList" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSsmPatchBaselinesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.get"></a>

```csharp
private DataAwsSsmPatchBaselinesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsSsmPatchBaselinesFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>[]

---


### DataAwsSsmPatchBaselinesFilterOutputReference <a name="DataAwsSsmPatchBaselinesFilterOutputReference" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSsmPatchBaselinesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsSsmPatchBaselinesFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>

---



