# `dataAwsElasticBeanstalkSolutionStack` Submodule <a name="`dataAwsElasticBeanstalkSolutionStack` Submodule" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticBeanstalkSolutionStack <a name="DataAwsElasticBeanstalkSolutionStack" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/elastic_beanstalk_solution_stack aws_elastic_beanstalk_solution_stack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsElasticBeanstalkSolutionStack(Construct Scope, string Id, DataAwsElasticBeanstalkSolutionStackConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig">DataAwsElasticBeanstalkSolutionStackConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig">DataAwsElasticBeanstalkSolutionStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.resetMostRecent">ResetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMostRecent` <a name="ResetMostRecent" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.resetMostRecent"></a>

```csharp
private void ResetMostRecent()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsElasticBeanstalkSolutionStack resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsElasticBeanstalkSolutionStack.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsElasticBeanstalkSolutionStack.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsElasticBeanstalkSolutionStack.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsElasticBeanstalkSolutionStack.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsElasticBeanstalkSolutionStack resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsElasticBeanstalkSolutionStack to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsElasticBeanstalkSolutionStack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/elastic_beanstalk_solution_stack#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsElasticBeanstalkSolutionStack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.mostRecentInput">MostRecentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.nameRegexInput">NameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.mostRecent">MostRecent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.nameRegex">NameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MostRecentInput`<sup>Optional</sup> <a name="MostRecentInput" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.mostRecentInput"></a>

```csharp
public bool|IResolvable MostRecentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameRegexInput`<sup>Optional</sup> <a name="NameRegexInput" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.nameRegexInput"></a>

```csharp
public string NameRegexInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MostRecent`<sup>Required</sup> <a name="MostRecent" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.mostRecent"></a>

```csharp
public bool|IResolvable MostRecent { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameRegex`<sup>Required</sup> <a name="NameRegex" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.nameRegex"></a>

```csharp
public string NameRegex { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStack.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticBeanstalkSolutionStackConfig <a name="DataAwsElasticBeanstalkSolutionStackConfig" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsElasticBeanstalkSolutionStackConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string NameRegex,
    string Id = null,
    bool|IResolvable MostRecent = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.nameRegex">NameRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/elastic_beanstalk_solution_stack#name_regex DataAwsElasticBeanstalkSolutionStack#name_regex}. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/elastic_beanstalk_solution_stack#id DataAwsElasticBeanstalkSolutionStack#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.mostRecent">MostRecent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/elastic_beanstalk_solution_stack#most_recent DataAwsElasticBeanstalkSolutionStack#most_recent}. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `NameRegex`<sup>Required</sup> <a name="NameRegex" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.nameRegex"></a>

```csharp
public string NameRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/elastic_beanstalk_solution_stack#name_regex DataAwsElasticBeanstalkSolutionStack#name_regex}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/elastic_beanstalk_solution_stack#id DataAwsElasticBeanstalkSolutionStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MostRecent`<sup>Optional</sup> <a name="MostRecent" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.mostRecent"></a>

```csharp
public bool|IResolvable MostRecent { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/elastic_beanstalk_solution_stack#most_recent DataAwsElasticBeanstalkSolutionStack#most_recent}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsElasticBeanstalkSolutionStack.DataAwsElasticBeanstalkSolutionStackConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/elastic_beanstalk_solution_stack#region DataAwsElasticBeanstalkSolutionStack#region}

---



