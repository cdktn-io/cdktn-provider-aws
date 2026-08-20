# `dataAwsCeTags` Submodule <a name="`dataAwsCeTags` Submodule" id="@cdktn/provider-aws.dataAwsCeTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCeTags <a name="DataAwsCeTags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags aws_ce_tags}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTags(Construct Scope, string Id, DataAwsCeTagsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig">DataAwsCeTagsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig">DataAwsCeTagsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy">PutSortBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod">PutTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSearchString">ResetSearchString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSortBy">ResetSortBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.resetTagKey">ResetTagKey</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter"></a>

```csharp
private void PutFilter(DataAwsCeTagsFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

---

##### `PutSortBy` <a name="PutSortBy" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy"></a>

```csharp
private void PutSortBy(IResolvable|DataAwsCeTagsSortBy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>[]

---

##### `PutTimePeriod` <a name="PutTimePeriod" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod"></a>

```csharp
private void PutTimePeriod(DataAwsCeTagsTimePeriod Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSearchString` <a name="ResetSearchString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSearchString"></a>

```csharp
private void ResetSearchString()
```

##### `ResetSortBy` <a name="ResetSortBy" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSortBy"></a>

```csharp
private void ResetSortBy()
```

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.resetTagKey"></a>

```csharp
private void ResetTagKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsCeTags resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCeTags.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCeTags.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCeTags.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCeTags.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsCeTags resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCeTags to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCeTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsCeTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference">DataAwsCeTagsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortBy">SortBy</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList">DataAwsCeTagsSortByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference">DataAwsCeTagsTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchStringInput">SearchStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortByInput">SortByInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriodInput">TimePeriodInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchString">SearchString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filter"></a>

```csharp
public DataAwsCeTagsFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference">DataAwsCeTagsFilterOutputReference</a>

---

##### `SortBy`<sup>Required</sup> <a name="SortBy" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortBy"></a>

```csharp
public DataAwsCeTagsSortByList SortBy { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList">DataAwsCeTagsSortByList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriod"></a>

```csharp
public DataAwsCeTagsTimePeriodOutputReference TimePeriod { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference">DataAwsCeTagsTimePeriodOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filterInput"></a>

```csharp
public DataAwsCeTagsFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SearchStringInput`<sup>Optional</sup> <a name="SearchStringInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchStringInput"></a>

```csharp
public string SearchStringInput { get; }
```

- *Type:* string

---

##### `SortByInput`<sup>Optional</sup> <a name="SortByInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortByInput"></a>

```csharp
public IResolvable|DataAwsCeTagsSortBy[] SortByInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>[]

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TimePeriodInput`<sup>Optional</sup> <a name="TimePeriodInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriodInput"></a>

```csharp
public DataAwsCeTagsTimePeriod TimePeriodInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SearchString`<sup>Required</sup> <a name="SearchString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchString"></a>

```csharp
public string SearchString { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCeTagsConfig <a name="DataAwsCeTagsConfig" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    DataAwsCeTagsTimePeriod TimePeriod,
    DataAwsCeTagsFilter Filter = null,
    string Id = null,
    string SearchString = null,
    IResolvable|DataAwsCeTagsSortBy[] SortBy = null,
    string TagKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.timePeriod">TimePeriod</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#id DataAwsCeTags#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.searchString">SearchString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#search_string DataAwsCeTags#search_string}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.sortBy">SortBy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>[]</code> | sort_by block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.tagKey">TagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#tag_key DataAwsCeTags#tag_key}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TimePeriod`<sup>Required</sup> <a name="TimePeriod" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.timePeriod"></a>

```csharp
public DataAwsCeTagsTimePeriod TimePeriod { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#time_period DataAwsCeTags#time_period}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.filter"></a>

```csharp
public DataAwsCeTagsFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#filter DataAwsCeTags#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#id DataAwsCeTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SearchString`<sup>Optional</sup> <a name="SearchString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.searchString"></a>

```csharp
public string SearchString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#search_string DataAwsCeTags#search_string}.

---

##### `SortBy`<sup>Optional</sup> <a name="SortBy" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.sortBy"></a>

```csharp
public IResolvable|DataAwsCeTagsSortBy[] SortBy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>[]

sort_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#sort_by DataAwsCeTags#sort_by}

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#tag_key DataAwsCeTags#tag_key}.

---

### DataAwsCeTagsFilter <a name="DataAwsCeTagsFilter" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilter {
    IResolvable|DataAwsCeTagsFilterAnd[] And = null,
    DataAwsCeTagsFilterCostCategory CostCategory = null,
    DataAwsCeTagsFilterDimension Dimension = null,
    DataAwsCeTagsFilterNot Not = null,
    IResolvable|DataAwsCeTagsFilterOr[] Or = null,
    DataAwsCeTagsFilterTags Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.and">And</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>[]</code> | and block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.dimension">Dimension</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | dimension block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.not">Not</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | not block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.or">Or</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>[]</code> | or block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | tags block. |

---

##### `And`<sup>Optional</sup> <a name="And" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.and"></a>

```csharp
public IResolvable|DataAwsCeTagsFilterAnd[] And { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>[]

and block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#and DataAwsCeTags#and}

---

##### `CostCategory`<sup>Optional</sup> <a name="CostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.costCategory"></a>

```csharp
public DataAwsCeTagsFilterCostCategory CostCategory { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.dimension"></a>

```csharp
public DataAwsCeTagsFilterDimension Dimension { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `Not`<sup>Optional</sup> <a name="Not" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.not"></a>

```csharp
public DataAwsCeTagsFilterNot Not { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#not DataAwsCeTags#not}

---

##### `Or`<sup>Optional</sup> <a name="Or" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.or"></a>

```csharp
public IResolvable|DataAwsCeTagsFilterOr[] Or { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>[]

or block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#or DataAwsCeTags#or}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.tags"></a>

```csharp
public DataAwsCeTagsFilterTags Tags { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterAnd <a name="DataAwsCeTagsFilterAnd" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterAnd {
    DataAwsCeTagsFilterAndCostCategory CostCategory = null,
    DataAwsCeTagsFilterAndDimension Dimension = null,
    DataAwsCeTagsFilterAndTags Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.dimension">Dimension</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | dimension block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | tags block. |

---

##### `CostCategory`<sup>Optional</sup> <a name="CostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.costCategory"></a>

```csharp
public DataAwsCeTagsFilterAndCostCategory CostCategory { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.dimension"></a>

```csharp
public DataAwsCeTagsFilterAndDimension Dimension { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.tags"></a>

```csharp
public DataAwsCeTagsFilterAndTags Tags { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterAndCostCategory <a name="DataAwsCeTagsFilterAndCostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterAndCostCategory {
    string Key = null,
    string[] MatchOptions = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterAndDimension <a name="DataAwsCeTagsFilterAndDimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterAndDimension {
    string Key = null,
    string[] MatchOptions = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterAndTags <a name="DataAwsCeTagsFilterAndTags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterAndTags {
    string Key = null,
    string[] MatchOptions = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterCostCategory <a name="DataAwsCeTagsFilterCostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterCostCategory {
    string Key = null,
    string[] MatchOptions = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterDimension <a name="DataAwsCeTagsFilterDimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterDimension {
    string Key = null,
    string[] MatchOptions = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNot <a name="DataAwsCeTagsFilterNot" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterNot {
    DataAwsCeTagsFilterNotCostCategory CostCategory = null,
    DataAwsCeTagsFilterNotDimension Dimension = null,
    DataAwsCeTagsFilterNotTags Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.dimension">Dimension</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | tags block. |

---

##### `CostCategory`<sup>Optional</sup> <a name="CostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.costCategory"></a>

```csharp
public DataAwsCeTagsFilterNotCostCategory CostCategory { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.dimension"></a>

```csharp
public DataAwsCeTagsFilterNotDimension Dimension { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.tags"></a>

```csharp
public DataAwsCeTagsFilterNotTags Tags { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterNotCostCategory <a name="DataAwsCeTagsFilterNotCostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterNotCostCategory {
    string Key = null,
    string[] MatchOptions = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNotDimension <a name="DataAwsCeTagsFilterNotDimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterNotDimension {
    string Key = null,
    string[] MatchOptions = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNotTags <a name="DataAwsCeTagsFilterNotTags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterNotTags {
    string Key = null,
    string[] MatchOptions = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOr <a name="DataAwsCeTagsFilterOr" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterOr {
    DataAwsCeTagsFilterOrCostCategory CostCategory = null,
    DataAwsCeTagsFilterOrDimension Dimension = null,
    DataAwsCeTagsFilterOrTags Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.dimension">Dimension</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | dimension block. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | tags block. |

---

##### `CostCategory`<sup>Optional</sup> <a name="CostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.costCategory"></a>

```csharp
public DataAwsCeTagsFilterOrCostCategory CostCategory { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.dimension"></a>

```csharp
public DataAwsCeTagsFilterOrDimension Dimension { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.tags"></a>

```csharp
public DataAwsCeTagsFilterOrTags Tags { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterOrCostCategory <a name="DataAwsCeTagsFilterOrCostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterOrCostCategory {
    string Key = null,
    string[] MatchOptions = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOrDimension <a name="DataAwsCeTagsFilterOrDimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterOrDimension {
    string Key = null,
    string[] MatchOptions = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOrTags <a name="DataAwsCeTagsFilterOrTags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterOrTags {
    string Key = null,
    string[] MatchOptions = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterTags <a name="DataAwsCeTagsFilterTags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterTags {
    string Key = null,
    string[] MatchOptions = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsSortBy <a name="DataAwsCeTagsSortBy" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsSortBy {
    string Key = null,
    string SortOrder = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.sortOrder">SortOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#sort_order DataAwsCeTags#sort_order}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}.

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.sortOrder"></a>

```csharp
public string SortOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#sort_order DataAwsCeTags#sort_order}.

---

### DataAwsCeTagsTimePeriod <a name="DataAwsCeTagsTimePeriod" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsTimePeriod {
    string End,
    string Start
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.end">End</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#end DataAwsCeTags#end}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.start">Start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#start DataAwsCeTags#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.end"></a>

```csharp
public string End { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#end DataAwsCeTags#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.start"></a>

```csharp
public string Start { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ce_tags#start DataAwsCeTags#start}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsCeTagsFilterAndCostCategoryOutputReference <a name="DataAwsCeTagsFilterAndCostCategoryOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterAndCostCategoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetMatchOptions"></a>

```csharp
private void ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptionsInput"></a>

```csharp
public string[] MatchOptionsInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsFilterAndCostCategory InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

---


### DataAwsCeTagsFilterAndDimensionOutputReference <a name="DataAwsCeTagsFilterAndDimensionOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterAndDimensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetMatchOptions"></a>

```csharp
private void ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptionsInput"></a>

```csharp
public string[] MatchOptionsInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsFilterAndDimension InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

---


### DataAwsCeTagsFilterAndList <a name="DataAwsCeTagsFilterAndList" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterAndList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get"></a>

```csharp
private DataAwsCeTagsFilterAndOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsCeTagsFilterAnd[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>[]

---


### DataAwsCeTagsFilterAndOutputReference <a name="DataAwsCeTagsFilterAndOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterAndOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory">PutCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetCostCategory">ResetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCostCategory` <a name="PutCostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory"></a>

```csharp
private void PutCostCategory(DataAwsCeTagsFilterAndCostCategory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

---

##### `PutDimension` <a name="PutDimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension"></a>

```csharp
private void PutDimension(DataAwsCeTagsFilterAndDimension Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags"></a>

```csharp
private void PutTags(DataAwsCeTagsFilterAndTags Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

---

##### `ResetCostCategory` <a name="ResetCostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetCostCategory"></a>

```csharp
private void ResetCostCategory()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetDimension"></a>

```csharp
private void ResetDimension()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference">DataAwsCeTagsFilterAndCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference">DataAwsCeTagsFilterAndDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference">DataAwsCeTagsFilterAndTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategoryInput">CostCategoryInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategory"></a>

```csharp
public DataAwsCeTagsFilterAndCostCategoryOutputReference CostCategory { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference">DataAwsCeTagsFilterAndCostCategoryOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimension"></a>

```csharp
public DataAwsCeTagsFilterAndDimensionOutputReference Dimension { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference">DataAwsCeTagsFilterAndDimensionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tags"></a>

```csharp
public DataAwsCeTagsFilterAndTagsOutputReference Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference">DataAwsCeTagsFilterAndTagsOutputReference</a>

---

##### `CostCategoryInput`<sup>Optional</sup> <a name="CostCategoryInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategoryInput"></a>

```csharp
public DataAwsCeTagsFilterAndCostCategory CostCategoryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimensionInput"></a>

```csharp
public DataAwsCeTagsFilterAndDimension DimensionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tagsInput"></a>

```csharp
public DataAwsCeTagsFilterAndTags TagsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsCeTagsFilterAnd InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>

---


### DataAwsCeTagsFilterAndTagsOutputReference <a name="DataAwsCeTagsFilterAndTagsOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterAndTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetMatchOptions"></a>

```csharp
private void ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptionsInput"></a>

```csharp
public string[] MatchOptionsInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsFilterAndTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

---


### DataAwsCeTagsFilterCostCategoryOutputReference <a name="DataAwsCeTagsFilterCostCategoryOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterCostCategoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetMatchOptions"></a>

```csharp
private void ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptionsInput"></a>

```csharp
public string[] MatchOptionsInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsFilterCostCategory InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

---


### DataAwsCeTagsFilterDimensionOutputReference <a name="DataAwsCeTagsFilterDimensionOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterDimensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetMatchOptions"></a>

```csharp
private void ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptionsInput"></a>

```csharp
public string[] MatchOptionsInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsFilterDimension InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

---


### DataAwsCeTagsFilterNotCostCategoryOutputReference <a name="DataAwsCeTagsFilterNotCostCategoryOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterNotCostCategoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetMatchOptions"></a>

```csharp
private void ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptionsInput"></a>

```csharp
public string[] MatchOptionsInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsFilterNotCostCategory InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

---


### DataAwsCeTagsFilterNotDimensionOutputReference <a name="DataAwsCeTagsFilterNotDimensionOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterNotDimensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetMatchOptions"></a>

```csharp
private void ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptionsInput"></a>

```csharp
public string[] MatchOptionsInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsFilterNotDimension InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

---


### DataAwsCeTagsFilterNotOutputReference <a name="DataAwsCeTagsFilterNotOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterNotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory">PutCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetCostCategory">ResetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCostCategory` <a name="PutCostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory"></a>

```csharp
private void PutCostCategory(DataAwsCeTagsFilterNotCostCategory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

---

##### `PutDimension` <a name="PutDimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension"></a>

```csharp
private void PutDimension(DataAwsCeTagsFilterNotDimension Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags"></a>

```csharp
private void PutTags(DataAwsCeTagsFilterNotTags Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

---

##### `ResetCostCategory` <a name="ResetCostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetCostCategory"></a>

```csharp
private void ResetCostCategory()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetDimension"></a>

```csharp
private void ResetDimension()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference">DataAwsCeTagsFilterNotCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference">DataAwsCeTagsFilterNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference">DataAwsCeTagsFilterNotTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategoryInput">CostCategoryInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategory"></a>

```csharp
public DataAwsCeTagsFilterNotCostCategoryOutputReference CostCategory { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference">DataAwsCeTagsFilterNotCostCategoryOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimension"></a>

```csharp
public DataAwsCeTagsFilterNotDimensionOutputReference Dimension { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference">DataAwsCeTagsFilterNotDimensionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tags"></a>

```csharp
public DataAwsCeTagsFilterNotTagsOutputReference Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference">DataAwsCeTagsFilterNotTagsOutputReference</a>

---

##### `CostCategoryInput`<sup>Optional</sup> <a name="CostCategoryInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategoryInput"></a>

```csharp
public DataAwsCeTagsFilterNotCostCategory CostCategoryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimensionInput"></a>

```csharp
public DataAwsCeTagsFilterNotDimension DimensionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tagsInput"></a>

```csharp
public DataAwsCeTagsFilterNotTags TagsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsFilterNot InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

---


### DataAwsCeTagsFilterNotTagsOutputReference <a name="DataAwsCeTagsFilterNotTagsOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterNotTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetMatchOptions"></a>

```csharp
private void ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptionsInput"></a>

```csharp
public string[] MatchOptionsInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsFilterNotTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

---


### DataAwsCeTagsFilterOrCostCategoryOutputReference <a name="DataAwsCeTagsFilterOrCostCategoryOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterOrCostCategoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetMatchOptions"></a>

```csharp
private void ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptionsInput"></a>

```csharp
public string[] MatchOptionsInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsFilterOrCostCategory InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

---


### DataAwsCeTagsFilterOrDimensionOutputReference <a name="DataAwsCeTagsFilterOrDimensionOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterOrDimensionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetMatchOptions"></a>

```csharp
private void ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptionsInput"></a>

```csharp
public string[] MatchOptionsInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsFilterOrDimension InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

---


### DataAwsCeTagsFilterOrList <a name="DataAwsCeTagsFilterOrList" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterOrList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get"></a>

```csharp
private DataAwsCeTagsFilterOrOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsCeTagsFilterOr[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>[]

---


### DataAwsCeTagsFilterOrOutputReference <a name="DataAwsCeTagsFilterOrOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterOrOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory">PutCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetCostCategory">ResetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCostCategory` <a name="PutCostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory"></a>

```csharp
private void PutCostCategory(DataAwsCeTagsFilterOrCostCategory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

---

##### `PutDimension` <a name="PutDimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension"></a>

```csharp
private void PutDimension(DataAwsCeTagsFilterOrDimension Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags"></a>

```csharp
private void PutTags(DataAwsCeTagsFilterOrTags Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

---

##### `ResetCostCategory` <a name="ResetCostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetCostCategory"></a>

```csharp
private void ResetCostCategory()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetDimension"></a>

```csharp
private void ResetDimension()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference">DataAwsCeTagsFilterOrCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference">DataAwsCeTagsFilterOrDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference">DataAwsCeTagsFilterOrTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategoryInput">CostCategoryInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategory"></a>

```csharp
public DataAwsCeTagsFilterOrCostCategoryOutputReference CostCategory { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference">DataAwsCeTagsFilterOrCostCategoryOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimension"></a>

```csharp
public DataAwsCeTagsFilterOrDimensionOutputReference Dimension { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference">DataAwsCeTagsFilterOrDimensionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tags"></a>

```csharp
public DataAwsCeTagsFilterOrTagsOutputReference Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference">DataAwsCeTagsFilterOrTagsOutputReference</a>

---

##### `CostCategoryInput`<sup>Optional</sup> <a name="CostCategoryInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategoryInput"></a>

```csharp
public DataAwsCeTagsFilterOrCostCategory CostCategoryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimensionInput"></a>

```csharp
public DataAwsCeTagsFilterOrDimension DimensionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tagsInput"></a>

```csharp
public DataAwsCeTagsFilterOrTags TagsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsCeTagsFilterOr InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>

---


### DataAwsCeTagsFilterOrTagsOutputReference <a name="DataAwsCeTagsFilterOrTagsOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterOrTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetMatchOptions"></a>

```csharp
private void ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptionsInput"></a>

```csharp
public string[] MatchOptionsInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsFilterOrTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

---


### DataAwsCeTagsFilterOutputReference <a name="DataAwsCeTagsFilterOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd">PutAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory">PutCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot">PutNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr">PutOr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetAnd">ResetAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetCostCategory">ResetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetNot">ResetNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetOr">ResetOr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnd` <a name="PutAnd" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd"></a>

```csharp
private void PutAnd(IResolvable|DataAwsCeTagsFilterAnd[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>[]

---

##### `PutCostCategory` <a name="PutCostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory"></a>

```csharp
private void PutCostCategory(DataAwsCeTagsFilterCostCategory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

---

##### `PutDimension` <a name="PutDimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension"></a>

```csharp
private void PutDimension(DataAwsCeTagsFilterDimension Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

---

##### `PutNot` <a name="PutNot" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot"></a>

```csharp
private void PutNot(DataAwsCeTagsFilterNot Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

---

##### `PutOr` <a name="PutOr" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr"></a>

```csharp
private void PutOr(IResolvable|DataAwsCeTagsFilterOr[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags"></a>

```csharp
private void PutTags(DataAwsCeTagsFilterTags Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

---

##### `ResetAnd` <a name="ResetAnd" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetAnd"></a>

```csharp
private void ResetAnd()
```

##### `ResetCostCategory` <a name="ResetCostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetCostCategory"></a>

```csharp
private void ResetCostCategory()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetDimension"></a>

```csharp
private void ResetDimension()
```

##### `ResetNot` <a name="ResetNot" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetNot"></a>

```csharp
private void ResetNot()
```

##### `ResetOr` <a name="ResetOr" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetOr"></a>

```csharp
private void ResetOr()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.and">And</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList">DataAwsCeTagsFilterAndList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference">DataAwsCeTagsFilterCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference">DataAwsCeTagsFilterDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.not">Not</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference">DataAwsCeTagsFilterNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.or">Or</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList">DataAwsCeTagsFilterOrList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference">DataAwsCeTagsFilterTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.andInput">AndInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategoryInput">CostCategoryInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.notInput">NotInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.orInput">OrInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.and"></a>

```csharp
public DataAwsCeTagsFilterAndList And { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList">DataAwsCeTagsFilterAndList</a>

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategory"></a>

```csharp
public DataAwsCeTagsFilterCostCategoryOutputReference CostCategory { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference">DataAwsCeTagsFilterCostCategoryOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimension"></a>

```csharp
public DataAwsCeTagsFilterDimensionOutputReference Dimension { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference">DataAwsCeTagsFilterDimensionOutputReference</a>

---

##### `Not`<sup>Required</sup> <a name="Not" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.not"></a>

```csharp
public DataAwsCeTagsFilterNotOutputReference Not { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference">DataAwsCeTagsFilterNotOutputReference</a>

---

##### `Or`<sup>Required</sup> <a name="Or" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.or"></a>

```csharp
public DataAwsCeTagsFilterOrList Or { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList">DataAwsCeTagsFilterOrList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tags"></a>

```csharp
public DataAwsCeTagsFilterTagsOutputReference Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference">DataAwsCeTagsFilterTagsOutputReference</a>

---

##### `AndInput`<sup>Optional</sup> <a name="AndInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.andInput"></a>

```csharp
public IResolvable|DataAwsCeTagsFilterAnd[] AndInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>[]

---

##### `CostCategoryInput`<sup>Optional</sup> <a name="CostCategoryInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategoryInput"></a>

```csharp
public DataAwsCeTagsFilterCostCategory CostCategoryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimensionInput"></a>

```csharp
public DataAwsCeTagsFilterDimension DimensionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

---

##### `NotInput`<sup>Optional</sup> <a name="NotInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.notInput"></a>

```csharp
public DataAwsCeTagsFilterNot NotInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

---

##### `OrInput`<sup>Optional</sup> <a name="OrInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.orInput"></a>

```csharp
public IResolvable|DataAwsCeTagsFilterOr[] OrInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tagsInput"></a>

```csharp
public DataAwsCeTagsFilterTags TagsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

---


### DataAwsCeTagsFilterTagsOutputReference <a name="DataAwsCeTagsFilterTagsOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsFilterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetMatchOptions"></a>

```csharp
private void ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptionsInput"></a>

```csharp
public string[] MatchOptionsInput { get; }
```

- *Type:* string[]

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptions"></a>

```csharp
public string[] MatchOptions { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsFilterTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

---


### DataAwsCeTagsSortByList <a name="DataAwsCeTagsSortByList" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsSortByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get"></a>

```csharp
private DataAwsCeTagsSortByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsCeTagsSortBy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>[]

---


### DataAwsCeTagsSortByOutputReference <a name="DataAwsCeTagsSortByOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsSortByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetSortOrder">ResetSortOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetSortOrder"></a>

```csharp
private void ResetSortOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrderInput">SortOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrder">SortOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrderInput"></a>

```csharp
public string SortOrderInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrder"></a>

```csharp
public string SortOrder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsCeTagsSortBy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>

---


### DataAwsCeTagsTimePeriodOutputReference <a name="DataAwsCeTagsTimePeriodOutputReference" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCeTagsTimePeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.endInput">EndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.startInput">StartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.endInput"></a>

```csharp
public string EndInput { get; }
```

- *Type:* string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.startInput"></a>

```csharp
public string StartInput { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.internalValue"></a>

```csharp
public DataAwsCeTagsTimePeriod InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

---



