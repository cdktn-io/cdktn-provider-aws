# `dataAwsBedrockInferenceProfile` Submodule <a name="`dataAwsBedrockInferenceProfile` Submodule" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockInferenceProfile <a name="DataAwsBedrockInferenceProfile" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/bedrock_inference_profile aws_bedrock_inference_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockInferenceProfile(Construct Scope, string Id, DataAwsBedrockInferenceProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig">DataAwsBedrockInferenceProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig">DataAwsBedrockInferenceProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsBedrockInferenceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBedrockInferenceProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBedrockInferenceProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBedrockInferenceProfile.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBedrockInferenceProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsBedrockInferenceProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBedrockInferenceProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBedrockInferenceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/bedrock_inference_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockInferenceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.inferenceProfileArn">InferenceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.inferenceProfileName">InferenceProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.models">Models</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList">DataAwsBedrockInferenceProfileModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.inferenceProfileIdInput">InferenceProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.inferenceProfileId">InferenceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InferenceProfileArn`<sup>Required</sup> <a name="InferenceProfileArn" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.inferenceProfileArn"></a>

```csharp
public string InferenceProfileArn { get; }
```

- *Type:* string

---

##### `InferenceProfileName`<sup>Required</sup> <a name="InferenceProfileName" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.inferenceProfileName"></a>

```csharp
public string InferenceProfileName { get; }
```

- *Type:* string

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.models"></a>

```csharp
public DataAwsBedrockInferenceProfileModelsList Models { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList">DataAwsBedrockInferenceProfileModelsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `InferenceProfileIdInput`<sup>Optional</sup> <a name="InferenceProfileIdInput" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.inferenceProfileIdInput"></a>

```csharp
public string InferenceProfileIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `InferenceProfileId`<sup>Required</sup> <a name="InferenceProfileId" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.inferenceProfileId"></a>

```csharp
public string InferenceProfileId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockInferenceProfileConfig <a name="DataAwsBedrockInferenceProfileConfig" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockInferenceProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InferenceProfileId,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.inferenceProfileId">InferenceProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/bedrock_inference_profile#inference_profile_id DataAwsBedrockInferenceProfile#inference_profile_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InferenceProfileId`<sup>Required</sup> <a name="InferenceProfileId" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.inferenceProfileId"></a>

```csharp
public string InferenceProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/bedrock_inference_profile#inference_profile_id DataAwsBedrockInferenceProfile#inference_profile_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/bedrock_inference_profile#region DataAwsBedrockInferenceProfile#region}

---

### DataAwsBedrockInferenceProfileModels <a name="DataAwsBedrockInferenceProfileModels" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockInferenceProfileModels {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockInferenceProfileModelsList <a name="DataAwsBedrockInferenceProfileModelsList" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockInferenceProfileModelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.get"></a>

```csharp
private DataAwsBedrockInferenceProfileModelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBedrockInferenceProfileModelsOutputReference <a name="DataAwsBedrockInferenceProfileModelsOutputReference" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockInferenceProfileModelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.property.modelArn">ModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModels">DataAwsBedrockInferenceProfileModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.property.modelArn"></a>

```csharp
public string ModelArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModelsOutputReference.property.internalValue"></a>

```csharp
public DataAwsBedrockInferenceProfileModels InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockInferenceProfile.DataAwsBedrockInferenceProfileModels">DataAwsBedrockInferenceProfileModels</a>

---



