# `dataAwsApiGatewayRestApi` Submodule <a name="`dataAwsApiGatewayRestApi` Submodule" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApiGatewayRestApi <a name="DataAwsApiGatewayRestApi" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/api_gateway_rest_api aws_api_gateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsApiGatewayRestApi(Construct Scope, string Id, DataAwsApiGatewayRestApiConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig">DataAwsApiGatewayRestApiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig">DataAwsApiGatewayRestApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsApiGatewayRestApi resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsApiGatewayRestApi.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsApiGatewayRestApi.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsApiGatewayRestApi.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsApiGatewayRestApi.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsApiGatewayRestApi resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsApiGatewayRestApi to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsApiGatewayRestApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/api_gateway_rest_api#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsApiGatewayRestApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.apiKeySource">ApiKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.binaryMediaTypes">BinaryMediaTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList">DataAwsApiGatewayRestApiEndpointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.executionArn">ExecutionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.minimumCompressionSize">MinimumCompressionSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.rootResourceId">RootResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApiKeySource`<sup>Required</sup> <a name="ApiKeySource" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.apiKeySource"></a>

```csharp
public string ApiKeySource { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BinaryMediaTypes`<sup>Required</sup> <a name="BinaryMediaTypes" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.binaryMediaTypes"></a>

```csharp
public string[] BinaryMediaTypes { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EndpointAccessMode`<sup>Required</sup> <a name="EndpointAccessMode" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.endpointAccessMode"></a>

```csharp
public string EndpointAccessMode { get; }
```

- *Type:* string

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.endpointConfiguration"></a>

```csharp
public DataAwsApiGatewayRestApiEndpointConfigurationList EndpointConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList">DataAwsApiGatewayRestApiEndpointConfigurationList</a>

---

##### `ExecutionArn`<sup>Required</sup> <a name="ExecutionArn" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.executionArn"></a>

```csharp
public string ExecutionArn { get; }
```

- *Type:* string

---

##### `MinimumCompressionSize`<sup>Required</sup> <a name="MinimumCompressionSize" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.minimumCompressionSize"></a>

```csharp
public string MinimumCompressionSize { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `RootResourceId`<sup>Required</sup> <a name="RootResourceId" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.rootResourceId"></a>

```csharp
public string RootResourceId { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApi.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApiGatewayRestApiConfig <a name="DataAwsApiGatewayRestApiConfig" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsApiGatewayRestApiConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/api_gateway_rest_api#name DataAwsApiGatewayRestApi#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/api_gateway_rest_api#id DataAwsApiGatewayRestApi#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/api_gateway_rest_api#tags DataAwsApiGatewayRestApi#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/api_gateway_rest_api#name DataAwsApiGatewayRestApi#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/api_gateway_rest_api#id DataAwsApiGatewayRestApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/api_gateway_rest_api#region DataAwsApiGatewayRestApi#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/api_gateway_rest_api#tags DataAwsApiGatewayRestApi#tags}.

---

### DataAwsApiGatewayRestApiEndpointConfiguration <a name="DataAwsApiGatewayRestApiEndpointConfiguration" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsApiGatewayRestApiEndpointConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsApiGatewayRestApiEndpointConfigurationList <a name="DataAwsApiGatewayRestApiEndpointConfigurationList" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsApiGatewayRestApiEndpointConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.get"></a>

```csharp
private DataAwsApiGatewayRestApiEndpointConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsApiGatewayRestApiEndpointConfigurationOutputReference <a name="DataAwsApiGatewayRestApiEndpointConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsApiGatewayRestApiEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">VpcEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfiguration">DataAwsApiGatewayRestApiEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `VpcEndpointIds`<sup>Required</sup> <a name="VpcEndpointIds" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```csharp
public string[] VpcEndpointIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsApiGatewayRestApiEndpointConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsApiGatewayRestApi.DataAwsApiGatewayRestApiEndpointConfiguration">DataAwsApiGatewayRestApiEndpointConfiguration</a>

---



