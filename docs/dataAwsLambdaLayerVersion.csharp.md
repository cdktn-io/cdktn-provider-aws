# `dataAwsLambdaLayerVersion` Submodule <a name="`dataAwsLambdaLayerVersion` Submodule" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdaLayerVersion <a name="DataAwsLambdaLayerVersion" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version aws_lambda_layer_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdaLayerVersion(Construct Scope, string Id, DataAwsLambdaLayerVersionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig">DataAwsLambdaLayerVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig">DataAwsLambdaLayerVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleArchitecture">ResetCompatibleArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleRuntime">ResetCompatibleRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetLayerName">ResetLayerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetLayerVersionArn">ResetLayerVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCompatibleArchitecture` <a name="ResetCompatibleArchitecture" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleArchitecture"></a>

```csharp
private void ResetCompatibleArchitecture()
```

##### `ResetCompatibleRuntime` <a name="ResetCompatibleRuntime" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetCompatibleRuntime"></a>

```csharp
private void ResetCompatibleRuntime()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLayerName` <a name="ResetLayerName" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetLayerName"></a>

```csharp
private void ResetLayerName()
```

##### `ResetLayerVersionArn` <a name="ResetLayerVersionArn" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetLayerVersionArn"></a>

```csharp
private void ResetLayerVersionArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsLambdaLayerVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsLambdaLayerVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsLambdaLayerVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsLambdaLayerVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsLambdaLayerVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsLambdaLayerVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsLambdaLayerVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsLambdaLayerVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsLambdaLayerVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.codeSha256">CodeSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectures">CompatibleArchitectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimes">CompatibleRuntimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerArn">LayerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.licenseInfo">LicenseInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingJobArn">SigningJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingProfileVersionArn">SigningProfileVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeHash">SourceCodeHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeSize">SourceCodeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectureInput">CompatibleArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimeInput">CompatibleRuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerNameInput">LayerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerVersionArnInput">LayerVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitecture">CompatibleArchitecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntime">CompatibleRuntime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerName">LayerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerVersionArn">LayerVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.version">Version</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CodeSha256`<sup>Required</sup> <a name="CodeSha256" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.codeSha256"></a>

```csharp
public string CodeSha256 { get; }
```

- *Type:* string

---

##### `CompatibleArchitectures`<sup>Required</sup> <a name="CompatibleArchitectures" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectures"></a>

```csharp
public string[] CompatibleArchitectures { get; }
```

- *Type:* string[]

---

##### `CompatibleRuntimes`<sup>Required</sup> <a name="CompatibleRuntimes" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimes"></a>

```csharp
public string[] CompatibleRuntimes { get; }
```

- *Type:* string[]

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LayerArn`<sup>Required</sup> <a name="LayerArn" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerArn"></a>

```csharp
public string LayerArn { get; }
```

- *Type:* string

---

##### `LicenseInfo`<sup>Required</sup> <a name="LicenseInfo" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.licenseInfo"></a>

```csharp
public string LicenseInfo { get; }
```

- *Type:* string

---

##### `SigningJobArn`<sup>Required</sup> <a name="SigningJobArn" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingJobArn"></a>

```csharp
public string SigningJobArn { get; }
```

- *Type:* string

---

##### `SigningProfileVersionArn`<sup>Required</sup> <a name="SigningProfileVersionArn" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.signingProfileVersionArn"></a>

```csharp
public string SigningProfileVersionArn { get; }
```

- *Type:* string

---

##### `SourceCodeHash`<sup>Required</sup> <a name="SourceCodeHash" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeHash"></a>

```csharp
public string SourceCodeHash { get; }
```

- *Type:* string

---

##### `SourceCodeSize`<sup>Required</sup> <a name="SourceCodeSize" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.sourceCodeSize"></a>

```csharp
public double SourceCodeSize { get; }
```

- *Type:* double

---

##### `CompatibleArchitectureInput`<sup>Optional</sup> <a name="CompatibleArchitectureInput" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitectureInput"></a>

```csharp
public string CompatibleArchitectureInput { get; }
```

- *Type:* string

---

##### `CompatibleRuntimeInput`<sup>Optional</sup> <a name="CompatibleRuntimeInput" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntimeInput"></a>

```csharp
public string CompatibleRuntimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LayerNameInput`<sup>Optional</sup> <a name="LayerNameInput" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerNameInput"></a>

```csharp
public string LayerNameInput { get; }
```

- *Type:* string

---

##### `LayerVersionArnInput`<sup>Optional</sup> <a name="LayerVersionArnInput" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerVersionArnInput"></a>

```csharp
public string LayerVersionArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `CompatibleArchitecture`<sup>Required</sup> <a name="CompatibleArchitecture" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleArchitecture"></a>

```csharp
public string CompatibleArchitecture { get; }
```

- *Type:* string

---

##### `CompatibleRuntime`<sup>Required</sup> <a name="CompatibleRuntime" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.compatibleRuntime"></a>

```csharp
public string CompatibleRuntime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LayerName`<sup>Required</sup> <a name="LayerName" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerName"></a>

```csharp
public string LayerName { get; }
```

- *Type:* string

---

##### `LayerVersionArn`<sup>Required</sup> <a name="LayerVersionArn" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.layerVersionArn"></a>

```csharp
public string LayerVersionArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdaLayerVersionConfig <a name="DataAwsLambdaLayerVersionConfig" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsLambdaLayerVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CompatibleArchitecture = null,
    string CompatibleRuntime = null,
    string Id = null,
    string LayerName = null,
    string LayerVersionArn = null,
    string Region = null,
    double Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleArchitecture">CompatibleArchitecture</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleRuntime">CompatibleRuntime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version#id DataAwsLambdaLayerVersion#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.layerName">LayerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.layerVersionArn">LayerVersionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version#layer_version_arn DataAwsLambdaLayerVersion#layer_version_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.version">Version</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version#version DataAwsLambdaLayerVersion#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CompatibleArchitecture`<sup>Optional</sup> <a name="CompatibleArchitecture" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleArchitecture"></a>

```csharp
public string CompatibleArchitecture { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}.

---

##### `CompatibleRuntime`<sup>Optional</sup> <a name="CompatibleRuntime" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.compatibleRuntime"></a>

```csharp
public string CompatibleRuntime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version#id DataAwsLambdaLayerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LayerName`<sup>Optional</sup> <a name="LayerName" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.layerName"></a>

```csharp
public string LayerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version#layer_name DataAwsLambdaLayerVersion#layer_name}.

---

##### `LayerVersionArn`<sup>Optional</sup> <a name="LayerVersionArn" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.layerVersionArn"></a>

```csharp
public string LayerVersionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version#layer_version_arn DataAwsLambdaLayerVersion#layer_version_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version#region DataAwsLambdaLayerVersion#region}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-aws.dataAwsLambdaLayerVersion.DataAwsLambdaLayerVersionConfig.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/lambda_layer_version#version DataAwsLambdaLayerVersion#version}.

---



