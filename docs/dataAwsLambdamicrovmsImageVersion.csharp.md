# `dataAwsLambdamicrovmsImageVersion` Submodule <a name="`dataAwsLambdamicrovmsImageVersion` Submodule" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdamicrovmsImageVersion <a name="DataAwsLambdamicrovmsImageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/lambdamicrovms_image_version aws_lambdamicrovms_image_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersion(Construct Scope, string Id, DataAwsLambdamicrovmsImageVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig">DataAwsLambdamicrovmsImageVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig">DataAwsLambdamicrovmsImageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsLambdamicrovmsImageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsLambdamicrovmsImageVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsLambdamicrovmsImageVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsLambdamicrovmsImageVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsLambdamicrovmsImageVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsLambdamicrovmsImageVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsLambdamicrovmsImageVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsLambdamicrovmsImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/lambdamicrovms_image_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsLambdamicrovmsImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.additionalOsCapabilities">AdditionalOsCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageArn">BaseImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageVersion">BaseImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.buildRoleArn">BuildRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.codeArtifact">CodeArtifact</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList">DataAwsLambdamicrovmsImageVersionCodeArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cpuConfiguration">CpuConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList">DataAwsLambdamicrovmsImageVersionCpuConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.egressNetworkConnectors">EgressNetworkConnectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.environmentVariables">EnvironmentVariables</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.hooks">Hooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList">DataAwsLambdamicrovmsImageVersionHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageArn">ImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList">DataAwsLambdamicrovmsImageVersionLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList">DataAwsLambdamicrovmsImageVersionResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.stateReason">StateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifierInput">ImageIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersionInput">ImageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifier">ImageIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersion">ImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AdditionalOsCapabilities`<sup>Required</sup> <a name="AdditionalOsCapabilities" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.additionalOsCapabilities"></a>

```csharp
public string[] AdditionalOsCapabilities { get; }
```

- *Type:* string[]

---

##### `BaseImageArn`<sup>Required</sup> <a name="BaseImageArn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageArn"></a>

```csharp
public string BaseImageArn { get; }
```

- *Type:* string

---

##### `BaseImageVersion`<sup>Required</sup> <a name="BaseImageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageVersion"></a>

```csharp
public string BaseImageVersion { get; }
```

- *Type:* string

---

##### `BuildRoleArn`<sup>Required</sup> <a name="BuildRoleArn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.buildRoleArn"></a>

```csharp
public string BuildRoleArn { get; }
```

- *Type:* string

---

##### `CodeArtifact`<sup>Required</sup> <a name="CodeArtifact" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.codeArtifact"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionCodeArtifactList CodeArtifact { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList">DataAwsLambdamicrovmsImageVersionCodeArtifactList</a>

---

##### `CpuConfiguration`<sup>Required</sup> <a name="CpuConfiguration" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cpuConfiguration"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionCpuConfigurationList CpuConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList">DataAwsLambdamicrovmsImageVersionCpuConfigurationList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EgressNetworkConnectors`<sup>Required</sup> <a name="EgressNetworkConnectors" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.egressNetworkConnectors"></a>

```csharp
public string[] EgressNetworkConnectors { get; }
```

- *Type:* string[]

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.environmentVariables"></a>

```csharp
public StringMap EnvironmentVariables { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Hooks`<sup>Required</sup> <a name="Hooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.hooks"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionHooksList Hooks { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList">DataAwsLambdamicrovmsImageVersionHooksList</a>

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageArn"></a>

```csharp
public string ImageArn { get; }
```

- *Type:* string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.logging"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionLoggingList Logging { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList">DataAwsLambdamicrovmsImageVersionLoggingList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.resources"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionResourcesList Resources { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList">DataAwsLambdamicrovmsImageVersionResourcesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.stateReason"></a>

```csharp
public string StateReason { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ImageIdentifierInput`<sup>Optional</sup> <a name="ImageIdentifierInput" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifierInput"></a>

```csharp
public string ImageIdentifierInput { get; }
```

- *Type:* string

---

##### `ImageVersionInput`<sup>Optional</sup> <a name="ImageVersionInput" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersionInput"></a>

```csharp
public string ImageVersionInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ImageIdentifier`<sup>Required</sup> <a name="ImageIdentifier" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifier"></a>

```csharp
public string ImageIdentifier { get; }
```

- *Type:* string

---

##### `ImageVersion`<sup>Required</sup> <a name="ImageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersion"></a>

```csharp
public string ImageVersion { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdamicrovmsImageVersionCodeArtifact <a name="DataAwsLambdamicrovmsImageVersionCodeArtifact" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionCodeArtifact {

};
```


### DataAwsLambdamicrovmsImageVersionConfig <a name="DataAwsLambdamicrovmsImageVersionConfig" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ImageIdentifier,
    string ImageVersion,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageIdentifier">ImageIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageVersion">ImageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ImageIdentifier`<sup>Required</sup> <a name="ImageIdentifier" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageIdentifier"></a>

```csharp
public string ImageIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}.

---

##### `ImageVersion`<sup>Required</sup> <a name="ImageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageVersion"></a>

```csharp
public string ImageVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.68.0/docs/data-sources/lambdamicrovms_image_version#region DataAwsLambdamicrovmsImageVersion#region}

---

### DataAwsLambdamicrovmsImageVersionCpuConfiguration <a name="DataAwsLambdamicrovmsImageVersionCpuConfiguration" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionCpuConfiguration {

};
```


### DataAwsLambdamicrovmsImageVersionHooks <a name="DataAwsLambdamicrovmsImageVersionHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionHooks {

};
```


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks {

};
```


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks {

};
```


### DataAwsLambdamicrovmsImageVersionLogging <a name="DataAwsLambdamicrovmsImageVersionLogging" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionLogging {

};
```


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatch <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatch" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionLoggingCloudwatch {

};
```


### DataAwsLambdamicrovmsImageVersionLoggingDisabled <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabled" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionLoggingDisabled {

};
```


### DataAwsLambdamicrovmsImageVersionResources <a name="DataAwsLambdamicrovmsImageVersionResources" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionResources {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdamicrovmsImageVersionCodeArtifactList <a name="DataAwsLambdamicrovmsImageVersionCodeArtifactList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionCodeArtifactList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get"></a>

```csharp
private DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference <a name="DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact">DataAwsLambdamicrovmsImageVersionCodeArtifact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.internalValue"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionCodeArtifact InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact">DataAwsLambdamicrovmsImageVersionCodeArtifact</a>

---


### DataAwsLambdamicrovmsImageVersionCpuConfigurationList <a name="DataAwsLambdamicrovmsImageVersionCpuConfigurationList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionCpuConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get"></a>

```csharp
private DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference <a name="DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration">DataAwsLambdamicrovmsImageVersionCpuConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionCpuConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration">DataAwsLambdamicrovmsImageVersionCpuConfiguration</a>

---


### DataAwsLambdamicrovmsImageVersionHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionHooksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get"></a>

```csharp
private DataAwsLambdamicrovmsImageVersionHooksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get"></a>

```csharp
private DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resume">Resume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds">ResumeTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.run">Run</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds">RunTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspend">Suspend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds">SuspendTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminate">Terminate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds">TerminateTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resume`<sup>Required</sup> <a name="Resume" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resume"></a>

```csharp
public string Resume { get; }
```

- *Type:* string

---

##### `ResumeTimeoutInSeconds`<sup>Required</sup> <a name="ResumeTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds"></a>

```csharp
public double ResumeTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.run"></a>

```csharp
public string Run { get; }
```

- *Type:* string

---

##### `RunTimeoutInSeconds`<sup>Required</sup> <a name="RunTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds"></a>

```csharp
public double RunTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `Suspend`<sup>Required</sup> <a name="Suspend" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspend"></a>

```csharp
public string Suspend { get; }
```

- *Type:* string

---

##### `SuspendTimeoutInSeconds`<sup>Required</sup> <a name="SuspendTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds"></a>

```csharp
public double SuspendTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `Terminate`<sup>Required</sup> <a name="Terminate" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminate"></a>

```csharp
public string Terminate { get; }
```

- *Type:* string

---

##### `TerminateTimeoutInSeconds`<sup>Required</sup> <a name="TerminateTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds"></a>

```csharp
public double TerminateTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.internalValue"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks</a>

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get"></a>

```csharp
private DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.ready">Ready</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds">ReadyTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validate">Validate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds">ValidateTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ready`<sup>Required</sup> <a name="Ready" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.ready"></a>

```csharp
public string Ready { get; }
```

- *Type:* string

---

##### `ReadyTimeoutInSeconds`<sup>Required</sup> <a name="ReadyTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds"></a>

```csharp
public double ReadyTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validate"></a>

```csharp
public string Validate { get; }
```

- *Type:* string

---

##### `ValidateTimeoutInSeconds`<sup>Required</sup> <a name="ValidateTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds"></a>

```csharp
public double ValidateTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.internalValue"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks</a>

---


### DataAwsLambdamicrovmsImageVersionHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionHooksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmHooks">MicrovmHooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmImageHooks">MicrovmImageHooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks">DataAwsLambdamicrovmsImageVersionHooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MicrovmHooks`<sup>Required</sup> <a name="MicrovmHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmHooks"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList MicrovmHooks { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList</a>

---

##### `MicrovmImageHooks`<sup>Required</sup> <a name="MicrovmImageHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmImageHooks"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList MicrovmImageHooks { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.internalValue"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionHooks InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks">DataAwsLambdamicrovmsImageVersionHooks</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get"></a>

```csharp
private DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logStream">LogStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch">DataAwsLambdamicrovmsImageVersionLoggingCloudwatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `LogStream`<sup>Required</sup> <a name="LogStream" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logStream"></a>

```csharp
public string LogStream { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.internalValue"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionLoggingCloudwatch InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch">DataAwsLambdamicrovmsImageVersionLoggingCloudwatch</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingDisabledList <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabledList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionLoggingDisabledList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get"></a>

```csharp
private DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled">DataAwsLambdamicrovmsImageVersionLoggingDisabled</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.internalValue"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionLoggingDisabled InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled">DataAwsLambdamicrovmsImageVersionLoggingDisabled</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingList <a name="DataAwsLambdamicrovmsImageVersionLoggingList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionLoggingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get"></a>

```csharp
private DataAwsLambdamicrovmsImageVersionLoggingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionLoggingOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.cloudwatch">Cloudwatch</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList">DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.disabled">Disabled</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList">DataAwsLambdamicrovmsImageVersionLoggingDisabledList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging">DataAwsLambdamicrovmsImageVersionLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cloudwatch`<sup>Required</sup> <a name="Cloudwatch" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.cloudwatch"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList Cloudwatch { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList">DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList</a>

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.disabled"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionLoggingDisabledList Disabled { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList">DataAwsLambdamicrovmsImageVersionLoggingDisabledList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.internalValue"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging">DataAwsLambdamicrovmsImageVersionLogging</a>

---


### DataAwsLambdamicrovmsImageVersionResourcesList <a name="DataAwsLambdamicrovmsImageVersionResourcesList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get"></a>

```csharp
private DataAwsLambdamicrovmsImageVersionResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionResourcesOutputReference <a name="DataAwsLambdamicrovmsImageVersionResourcesOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdamicrovmsImageVersionResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.minimumMemoryInMib">MinimumMemoryInMib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources">DataAwsLambdamicrovmsImageVersionResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumMemoryInMib`<sup>Required</sup> <a name="MinimumMemoryInMib" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.minimumMemoryInMib"></a>

```csharp
public double MinimumMemoryInMib { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.internalValue"></a>

```csharp
public DataAwsLambdamicrovmsImageVersionResources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources">DataAwsLambdamicrovmsImageVersionResources</a>

---



