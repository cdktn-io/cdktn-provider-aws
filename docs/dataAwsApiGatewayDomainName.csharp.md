# `dataAwsApiGatewayDomainName` Submodule <a name="`dataAwsApiGatewayDomainName` Submodule" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApiGatewayDomainName <a name="DataAwsApiGatewayDomainName" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/api_gateway_domain_name aws_api_gateway_domain_name}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsApiGatewayDomainName(Construct Scope, string Id, DataAwsApiGatewayDomainNameConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig">DataAwsApiGatewayDomainNameConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig">DataAwsApiGatewayDomainNameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.resetDomainNameId">ResetDomainNameId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDomainNameId` <a name="ResetDomainNameId" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.resetDomainNameId"></a>

```csharp
private void ResetDomainNameId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsApiGatewayDomainName resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsApiGatewayDomainName.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsApiGatewayDomainName.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsApiGatewayDomainName.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsApiGatewayDomainName.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsApiGatewayDomainName resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsApiGatewayDomainName to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsApiGatewayDomainName that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/api_gateway_domain_name#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsApiGatewayDomainName to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.certificateName">CertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.certificateUploadDate">CertificateUploadDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.cloudfrontDomainName">CloudfrontDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.cloudfrontZoneId">CloudfrontZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.endpointAccessMode">EndpointAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.endpointConfiguration">EndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList">DataAwsApiGatewayDomainNameEndpointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.regionalCertificateArn">RegionalCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.regionalCertificateName">RegionalCertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.regionalDomainName">RegionalDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.regionalZoneId">RegionalZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.domainNameIdInput">DomainNameIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.domainNameId">DomainNameId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.certificateName"></a>

```csharp
public string CertificateName { get; }
```

- *Type:* string

---

##### `CertificateUploadDate`<sup>Required</sup> <a name="CertificateUploadDate" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.certificateUploadDate"></a>

```csharp
public string CertificateUploadDate { get; }
```

- *Type:* string

---

##### `CloudfrontDomainName`<sup>Required</sup> <a name="CloudfrontDomainName" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.cloudfrontDomainName"></a>

```csharp
public string CloudfrontDomainName { get; }
```

- *Type:* string

---

##### `CloudfrontZoneId`<sup>Required</sup> <a name="CloudfrontZoneId" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.cloudfrontZoneId"></a>

```csharp
public string CloudfrontZoneId { get; }
```

- *Type:* string

---

##### `EndpointAccessMode`<sup>Required</sup> <a name="EndpointAccessMode" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.endpointAccessMode"></a>

```csharp
public string EndpointAccessMode { get; }
```

- *Type:* string

---

##### `EndpointConfiguration`<sup>Required</sup> <a name="EndpointConfiguration" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.endpointConfiguration"></a>

```csharp
public DataAwsApiGatewayDomainNameEndpointConfigurationList EndpointConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList">DataAwsApiGatewayDomainNameEndpointConfigurationList</a>

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `RegionalCertificateArn`<sup>Required</sup> <a name="RegionalCertificateArn" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.regionalCertificateArn"></a>

```csharp
public string RegionalCertificateArn { get; }
```

- *Type:* string

---

##### `RegionalCertificateName`<sup>Required</sup> <a name="RegionalCertificateName" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.regionalCertificateName"></a>

```csharp
public string RegionalCertificateName { get; }
```

- *Type:* string

---

##### `RegionalDomainName`<sup>Required</sup> <a name="RegionalDomainName" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.regionalDomainName"></a>

```csharp
public string RegionalDomainName { get; }
```

- *Type:* string

---

##### `RegionalZoneId`<sup>Required</sup> <a name="RegionalZoneId" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.regionalZoneId"></a>

```csharp
public string RegionalZoneId { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `DomainNameIdInput`<sup>Optional</sup> <a name="DomainNameIdInput" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.domainNameIdInput"></a>

```csharp
public string DomainNameIdInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `DomainNameId`<sup>Required</sup> <a name="DomainNameId" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.domainNameId"></a>

```csharp
public string DomainNameId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainName.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApiGatewayDomainNameConfig <a name="DataAwsApiGatewayDomainNameConfig" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsApiGatewayDomainNameConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    string DomainNameId = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/api_gateway_domain_name#domain_name DataAwsApiGatewayDomainName#domain_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.domainNameId">DomainNameId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/api_gateway_domain_name#domain_name_id DataAwsApiGatewayDomainName#domain_name_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/api_gateway_domain_name#id DataAwsApiGatewayDomainName#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/api_gateway_domain_name#tags DataAwsApiGatewayDomainName#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/api_gateway_domain_name#domain_name DataAwsApiGatewayDomainName#domain_name}.

---

##### `DomainNameId`<sup>Optional</sup> <a name="DomainNameId" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.domainNameId"></a>

```csharp
public string DomainNameId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/api_gateway_domain_name#domain_name_id DataAwsApiGatewayDomainName#domain_name_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/api_gateway_domain_name#id DataAwsApiGatewayDomainName#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/api_gateway_domain_name#region DataAwsApiGatewayDomainName#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/api_gateway_domain_name#tags DataAwsApiGatewayDomainName#tags}.

---

### DataAwsApiGatewayDomainNameEndpointConfiguration <a name="DataAwsApiGatewayDomainNameEndpointConfiguration" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsApiGatewayDomainNameEndpointConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsApiGatewayDomainNameEndpointConfigurationList <a name="DataAwsApiGatewayDomainNameEndpointConfigurationList" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsApiGatewayDomainNameEndpointConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.get"></a>

```csharp
private DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference <a name="DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.property.types">Types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfiguration">DataAwsApiGatewayDomainNameEndpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsApiGatewayDomainNameEndpointConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsApiGatewayDomainName.DataAwsApiGatewayDomainNameEndpointConfiguration">DataAwsApiGatewayDomainNameEndpointConfiguration</a>

---



