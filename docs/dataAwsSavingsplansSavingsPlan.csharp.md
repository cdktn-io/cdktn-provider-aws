# `dataAwsSavingsplansSavingsPlan` Submodule <a name="`dataAwsSavingsplansSavingsPlan` Submodule" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSavingsplansSavingsPlan <a name="DataAwsSavingsplansSavingsPlan" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_savings_plan aws_savingsplans_savings_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSavingsplansSavingsPlan(Construct Scope, string Id, DataAwsSavingsplansSavingsPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig">DataAwsSavingsplansSavingsPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig">DataAwsSavingsplansSavingsPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSavingsplansSavingsPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSavingsplansSavingsPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSavingsplansSavingsPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSavingsplansSavingsPlan.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSavingsplansSavingsPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsSavingsplansSavingsPlan resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSavingsplansSavingsPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSavingsplansSavingsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_savings_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSavingsplansSavingsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.commitment">Commitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.currency">Currency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.ec2InstanceFamily">Ec2InstanceFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.offeringId">OfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.paymentOption">PaymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.productTypes">ProductTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.purchaseTime">PurchaseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.recurringPaymentAmount">RecurringPaymentAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.returnableUntil">ReturnableUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanArn">SavingsPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanOfferingId">SavingsPlanOfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanType">SavingsPlanType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.termDurationInSeconds">TermDurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.upfrontPaymentAmount">UpfrontPaymentAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanIdInput">SavingsPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanId">SavingsPlanId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.commitment"></a>

```csharp
public string Commitment { get; }
```

- *Type:* string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.currency"></a>

```csharp
public string Currency { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Ec2InstanceFamily`<sup>Required</sup> <a name="Ec2InstanceFamily" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.ec2InstanceFamily"></a>

```csharp
public string Ec2InstanceFamily { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `OfferingId`<sup>Required</sup> <a name="OfferingId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.offeringId"></a>

```csharp
public string OfferingId { get; }
```

- *Type:* string

---

##### `PaymentOption`<sup>Required</sup> <a name="PaymentOption" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.paymentOption"></a>

```csharp
public string PaymentOption { get; }
```

- *Type:* string

---

##### `ProductTypes`<sup>Required</sup> <a name="ProductTypes" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.productTypes"></a>

```csharp
public string[] ProductTypes { get; }
```

- *Type:* string[]

---

##### `PurchaseTime`<sup>Required</sup> <a name="PurchaseTime" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.purchaseTime"></a>

```csharp
public string PurchaseTime { get; }
```

- *Type:* string

---

##### `RecurringPaymentAmount`<sup>Required</sup> <a name="RecurringPaymentAmount" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.recurringPaymentAmount"></a>

```csharp
public string RecurringPaymentAmount { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReturnableUntil`<sup>Required</sup> <a name="ReturnableUntil" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.returnableUntil"></a>

```csharp
public string ReturnableUntil { get; }
```

- *Type:* string

---

##### `SavingsPlanArn`<sup>Required</sup> <a name="SavingsPlanArn" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanArn"></a>

```csharp
public string SavingsPlanArn { get; }
```

- *Type:* string

---

##### `SavingsPlanOfferingId`<sup>Required</sup> <a name="SavingsPlanOfferingId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanOfferingId"></a>

```csharp
public string SavingsPlanOfferingId { get; }
```

- *Type:* string

---

##### `SavingsPlanType`<sup>Required</sup> <a name="SavingsPlanType" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanType"></a>

```csharp
public string SavingsPlanType { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `TermDurationInSeconds`<sup>Required</sup> <a name="TermDurationInSeconds" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.termDurationInSeconds"></a>

```csharp
public double TermDurationInSeconds { get; }
```

- *Type:* double

---

##### `UpfrontPaymentAmount`<sup>Required</sup> <a name="UpfrontPaymentAmount" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.upfrontPaymentAmount"></a>

```csharp
public string UpfrontPaymentAmount { get; }
```

- *Type:* string

---

##### `SavingsPlanIdInput`<sup>Optional</sup> <a name="SavingsPlanIdInput" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanIdInput"></a>

```csharp
public string SavingsPlanIdInput { get; }
```

- *Type:* string

---

##### `SavingsPlanId`<sup>Required</sup> <a name="SavingsPlanId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanId"></a>

```csharp
public string SavingsPlanId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSavingsplansSavingsPlanConfig <a name="DataAwsSavingsplansSavingsPlanConfig" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSavingsplansSavingsPlanConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SavingsPlanId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.savingsPlanId">SavingsPlanId</a></code> | <code>string</code> | The ID of the Savings Plan. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SavingsPlanId`<sup>Required</sup> <a name="SavingsPlanId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.savingsPlanId"></a>

```csharp
public string SavingsPlanId { get; set; }
```

- *Type:* string

The ID of the Savings Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_savings_plan#savings_plan_id DataAwsSavingsplansSavingsPlan#savings_plan_id}

---



