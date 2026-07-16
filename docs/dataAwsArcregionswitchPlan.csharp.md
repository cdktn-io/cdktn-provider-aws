# `dataAwsArcregionswitchPlan` Submodule <a name="`dataAwsArcregionswitchPlan` Submodule" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsArcregionswitchPlan <a name="DataAwsArcregionswitchPlan" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/arcregionswitch_plan aws_arcregionswitch_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsArcregionswitchPlan(Construct Scope, string Id, DataAwsArcregionswitchPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig">DataAwsArcregionswitchPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig">DataAwsArcregionswitchPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsArcregionswitchPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsArcregionswitchPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsArcregionswitchPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsArcregionswitchPlan.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsArcregionswitchPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsArcregionswitchPlan resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsArcregionswitchPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsArcregionswitchPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/arcregionswitch_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsArcregionswitchPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.executionRole">ExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.primaryRegion">PrimaryRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.recoveryApproach">RecoveryApproach</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.recoveryTimeObjectiveMinutes">RecoveryTimeObjectiveMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.executionRole"></a>

```csharp
public string ExecutionRole { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `PrimaryRegion`<sup>Required</sup> <a name="PrimaryRegion" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.primaryRegion"></a>

```csharp
public string PrimaryRegion { get; }
```

- *Type:* string

---

##### `RecoveryApproach`<sup>Required</sup> <a name="RecoveryApproach" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.recoveryApproach"></a>

```csharp
public string RecoveryApproach { get; }
```

- *Type:* string

---

##### `RecoveryTimeObjectiveMinutes`<sup>Required</sup> <a name="RecoveryTimeObjectiveMinutes" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.recoveryTimeObjectiveMinutes"></a>

```csharp
public double RecoveryTimeObjectiveMinutes { get; }
```

- *Type:* double

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsArcregionswitchPlanConfig <a name="DataAwsArcregionswitchPlanConfig" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsArcregionswitchPlanConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Arn,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/arcregionswitch_plan#arn DataAwsArcregionswitchPlan#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/arcregionswitch_plan#arn DataAwsArcregionswitchPlan#arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/arcregionswitch_plan#region DataAwsArcregionswitchPlan#region}

---



