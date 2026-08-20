# `dataAwsEmrReleaseLabels` Submodule <a name="`dataAwsEmrReleaseLabels` Submodule" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEmrReleaseLabels <a name="DataAwsEmrReleaseLabels" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/emr_release_labels aws_emr_release_labels}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEmrReleaseLabels(Construct Scope, string Id, DataAwsEmrReleaseLabelsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig">DataAwsEmrReleaseLabelsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig">DataAwsEmrReleaseLabelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.putFilters"></a>

```csharp
private void PutFilters(DataAwsEmrReleaseLabelsFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

---

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEmrReleaseLabels resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEmrReleaseLabels.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEmrReleaseLabels.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEmrReleaseLabels.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEmrReleaseLabels.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsEmrReleaseLabels resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEmrReleaseLabels to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEmrReleaseLabels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/emr_release_labels#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEmrReleaseLabels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference">DataAwsEmrReleaseLabelsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.releaseLabels">ReleaseLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filters"></a>

```csharp
public DataAwsEmrReleaseLabelsFiltersOutputReference Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference">DataAwsEmrReleaseLabelsFiltersOutputReference</a>

---

##### `ReleaseLabels`<sup>Required</sup> <a name="ReleaseLabels" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.releaseLabels"></a>

```csharp
public string[] ReleaseLabels { get; }
```

- *Type:* string[]

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.filtersInput"></a>

```csharp
public DataAwsEmrReleaseLabelsFilters FiltersInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabels.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEmrReleaseLabelsConfig <a name="DataAwsEmrReleaseLabelsConfig" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEmrReleaseLabelsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    DataAwsEmrReleaseLabelsFilters Filters = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a></code> | filters block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/emr_release_labels#id DataAwsEmrReleaseLabels#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.filters"></a>

```csharp
public DataAwsEmrReleaseLabelsFilters Filters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/emr_release_labels#filters DataAwsEmrReleaseLabels#filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/emr_release_labels#id DataAwsEmrReleaseLabels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/emr_release_labels#region DataAwsEmrReleaseLabels#region}

---

### DataAwsEmrReleaseLabelsFilters <a name="DataAwsEmrReleaseLabelsFilters" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEmrReleaseLabelsFilters {
    string Application = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.application">Application</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/emr_release_labels#application DataAwsEmrReleaseLabels#application}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/emr_release_labels#prefix DataAwsEmrReleaseLabels#prefix}. |

---

##### `Application`<sup>Optional</sup> <a name="Application" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.application"></a>

```csharp
public string Application { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/emr_release_labels#application DataAwsEmrReleaseLabels#application}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/emr_release_labels#prefix DataAwsEmrReleaseLabels#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEmrReleaseLabelsFiltersOutputReference <a name="DataAwsEmrReleaseLabelsFiltersOutputReference" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEmrReleaseLabelsFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetApplication">ResetApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplication` <a name="ResetApplication" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetApplication"></a>

```csharp
private void ResetApplication()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.applicationInput">ApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.application">Application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationInput`<sup>Optional</sup> <a name="ApplicationInput" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.applicationInput"></a>

```csharp
public string ApplicationInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.application"></a>

```csharp
public string Application { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsEmrReleaseLabelsFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEmrReleaseLabels.DataAwsEmrReleaseLabelsFilters">DataAwsEmrReleaseLabelsFilters</a>

---



