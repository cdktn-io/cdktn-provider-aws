# `dataAwsConnectLambdaFunctionAssociation` Submodule <a name="`dataAwsConnectLambdaFunctionAssociation` Submodule" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectLambdaFunctionAssociation <a name="DataAwsConnectLambdaFunctionAssociation" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/connect_lambda_function_association aws_connect_lambda_function_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsConnectLambdaFunctionAssociation(Construct Scope, string Id, DataAwsConnectLambdaFunctionAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig">DataAwsConnectLambdaFunctionAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig">DataAwsConnectLambdaFunctionAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsConnectLambdaFunctionAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsConnectLambdaFunctionAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsConnectLambdaFunctionAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsConnectLambdaFunctionAssociation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsConnectLambdaFunctionAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsConnectLambdaFunctionAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsConnectLambdaFunctionAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsConnectLambdaFunctionAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/connect_lambda_function_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsConnectLambdaFunctionAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.functionArnInput">FunctionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.functionArn">FunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `FunctionArnInput`<sup>Optional</sup> <a name="FunctionArnInput" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.functionArnInput"></a>

```csharp
public string FunctionArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.functionArn"></a>

```csharp
public string FunctionArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectLambdaFunctionAssociationConfig <a name="DataAwsConnectLambdaFunctionAssociationConfig" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsConnectLambdaFunctionAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FunctionArn,
    string InstanceId,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.functionArn">FunctionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/connect_lambda_function_association#function_arn DataAwsConnectLambdaFunctionAssociation#function_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/connect_lambda_function_association#instance_id DataAwsConnectLambdaFunctionAssociation#instance_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/connect_lambda_function_association#id DataAwsConnectLambdaFunctionAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.functionArn"></a>

```csharp
public string FunctionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/connect_lambda_function_association#function_arn DataAwsConnectLambdaFunctionAssociation#function_arn}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/connect_lambda_function_association#instance_id DataAwsConnectLambdaFunctionAssociation#instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/connect_lambda_function_association#id DataAwsConnectLambdaFunctionAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsConnectLambdaFunctionAssociation.DataAwsConnectLambdaFunctionAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/connect_lambda_function_association#region DataAwsConnectLambdaFunctionAssociation#region}

---



