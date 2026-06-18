# `dataAwsApigatewayv2Export` Submodule <a name="`dataAwsApigatewayv2Export` Submodule" id="@cdktn/provider-aws.dataAwsApigatewayv2Export"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApigatewayv2Export <a name="DataAwsApigatewayv2Export" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export aws_apigatewayv2_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsApigatewayv2Export(Construct Scope, string Id, DataAwsApigatewayv2ExportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig">DataAwsApigatewayv2ExportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig">DataAwsApigatewayv2ExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetExportVersion">ResetExportVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetIncludeExtensions">ResetIncludeExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetStageName">ResetStageName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetExportVersion` <a name="ResetExportVersion" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetExportVersion"></a>

```csharp
private void ResetExportVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeExtensions` <a name="ResetIncludeExtensions" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetIncludeExtensions"></a>

```csharp
private void ResetIncludeExtensions()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStageName` <a name="ResetStageName" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetStageName"></a>

```csharp
private void ResetStageName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsApigatewayv2Export resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsApigatewayv2Export.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsApigatewayv2Export.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsApigatewayv2Export.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsApigatewayv2Export.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsApigatewayv2Export resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsApigatewayv2Export to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsApigatewayv2Export that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsApigatewayv2Export to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersionInput">ExportVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensionsInput">IncludeExtensionsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputTypeInput">OutputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specificationInput">SpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageNameInput">StageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersion">ExportVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensions">IncludeExtensions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputType">OutputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specification">Specification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageName">StageName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `ExportVersionInput`<sup>Optional</sup> <a name="ExportVersionInput" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersionInput"></a>

```csharp
public string ExportVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeExtensionsInput`<sup>Optional</sup> <a name="IncludeExtensionsInput" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensionsInput"></a>

```csharp
public bool|IResolvable IncludeExtensionsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OutputTypeInput`<sup>Optional</sup> <a name="OutputTypeInput" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputTypeInput"></a>

```csharp
public string OutputTypeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SpecificationInput`<sup>Optional</sup> <a name="SpecificationInput" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specificationInput"></a>

```csharp
public string SpecificationInput { get; }
```

- *Type:* string

---

##### `StageNameInput`<sup>Optional</sup> <a name="StageNameInput" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageNameInput"></a>

```csharp
public string StageNameInput { get; }
```

- *Type:* string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `ExportVersion`<sup>Required</sup> <a name="ExportVersion" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersion"></a>

```csharp
public string ExportVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeExtensions`<sup>Required</sup> <a name="IncludeExtensions" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensions"></a>

```csharp
public bool|IResolvable IncludeExtensions { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputType"></a>

```csharp
public string OutputType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Specification`<sup>Required</sup> <a name="Specification" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specification"></a>

```csharp
public string Specification { get; }
```

- *Type:* string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageName"></a>

```csharp
public string StageName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApigatewayv2ExportConfig <a name="DataAwsApigatewayv2ExportConfig" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsApigatewayv2ExportConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiId,
    string OutputType,
    string Specification,
    string ExportVersion = null,
    string Id = null,
    bool|IResolvable IncludeExtensions = null,
    string Region = null,
    string StageName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.apiId">ApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#api_id DataAwsApigatewayv2Export#api_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.outputType">OutputType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#output_type DataAwsApigatewayv2Export#output_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.specification">Specification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#specification DataAwsApigatewayv2Export#specification}. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.exportVersion">ExportVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#export_version DataAwsApigatewayv2Export#export_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#id DataAwsApigatewayv2Export#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.includeExtensions">IncludeExtensions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#include_extensions DataAwsApigatewayv2Export#include_extensions}. |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.stageName">StageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#stage_name DataAwsApigatewayv2Export#stage_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#api_id DataAwsApigatewayv2Export#api_id}.

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.outputType"></a>

```csharp
public string OutputType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#output_type DataAwsApigatewayv2Export#output_type}.

---

##### `Specification`<sup>Required</sup> <a name="Specification" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.specification"></a>

```csharp
public string Specification { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#specification DataAwsApigatewayv2Export#specification}.

---

##### `ExportVersion`<sup>Optional</sup> <a name="ExportVersion" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.exportVersion"></a>

```csharp
public string ExportVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#export_version DataAwsApigatewayv2Export#export_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#id DataAwsApigatewayv2Export#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeExtensions`<sup>Optional</sup> <a name="IncludeExtensions" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.includeExtensions"></a>

```csharp
public bool|IResolvable IncludeExtensions { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#include_extensions DataAwsApigatewayv2Export#include_extensions}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#region DataAwsApigatewayv2Export#region}

---

##### `StageName`<sup>Optional</sup> <a name="StageName" id="@cdktn/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.stageName"></a>

```csharp
public string StageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/apigatewayv2_export#stage_name DataAwsApigatewayv2Export#stage_name}.

---



