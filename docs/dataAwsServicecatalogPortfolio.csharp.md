# `dataAwsServicecatalogPortfolio` Submodule <a name="`dataAwsServicecatalogPortfolio` Submodule" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicecatalogPortfolio <a name="DataAwsServicecatalogPortfolio" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/servicecatalog_portfolio aws_servicecatalog_portfolio}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsServicecatalogPortfolio(Construct Scope, string Id, DataAwsServicecatalogPortfolioConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig">DataAwsServicecatalogPortfolioConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig">DataAwsServicecatalogPortfolioConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsServicecatalogPortfolioTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeouts">DataAwsServicecatalogPortfolioTimeouts</a>

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.resetAcceptLanguage"></a>

```csharp
private void ResetAcceptLanguage()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsServicecatalogPortfolio resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsServicecatalogPortfolio.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsServicecatalogPortfolio.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsServicecatalogPortfolio.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsServicecatalogPortfolio.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsServicecatalogPortfolio resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsServicecatalogPortfolio to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsServicecatalogPortfolio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/servicecatalog_portfolio#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsServicecatalogPortfolio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference">DataAwsServicecatalogPortfolioTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeouts">DataAwsServicecatalogPortfolioTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.timeouts"></a>

```csharp
public DataAwsServicecatalogPortfolioTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference">DataAwsServicecatalogPortfolioTimeoutsOutputReference</a>

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.acceptLanguageInput"></a>

```csharp
public string AcceptLanguageInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAwsServicecatalogPortfolioTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeouts">DataAwsServicecatalogPortfolioTimeouts</a>

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolio.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicecatalogPortfolioConfig <a name="DataAwsServicecatalogPortfolioConfig" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsServicecatalogPortfolioConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id,
    string AcceptLanguage = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DataAwsServicecatalogPortfolioTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/servicecatalog_portfolio#id DataAwsServicecatalogPortfolio#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/servicecatalog_portfolio#accept_language DataAwsServicecatalogPortfolio#accept_language}. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/servicecatalog_portfolio#tags DataAwsServicecatalogPortfolio#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeouts">DataAwsServicecatalogPortfolioTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/servicecatalog_portfolio#id DataAwsServicecatalogPortfolio#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/servicecatalog_portfolio#accept_language DataAwsServicecatalogPortfolio#accept_language}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/servicecatalog_portfolio#region DataAwsServicecatalogPortfolio#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/servicecatalog_portfolio#tags DataAwsServicecatalogPortfolio#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioConfig.property.timeouts"></a>

```csharp
public DataAwsServicecatalogPortfolioTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeouts">DataAwsServicecatalogPortfolioTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/servicecatalog_portfolio#timeouts DataAwsServicecatalogPortfolio#timeouts}

---

### DataAwsServicecatalogPortfolioTimeouts <a name="DataAwsServicecatalogPortfolioTimeouts" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsServicecatalogPortfolioTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/servicecatalog_portfolio#read DataAwsServicecatalogPortfolio#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/servicecatalog_portfolio#read DataAwsServicecatalogPortfolio#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicecatalogPortfolioTimeoutsOutputReference <a name="DataAwsServicecatalogPortfolioTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsServicecatalogPortfolioTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeouts">DataAwsServicecatalogPortfolioTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsServicecatalogPortfolioTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsServicecatalogPortfolio.DataAwsServicecatalogPortfolioTimeouts">DataAwsServicecatalogPortfolioTimeouts</a>

---



