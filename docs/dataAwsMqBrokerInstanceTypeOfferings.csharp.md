# `dataAwsMqBrokerInstanceTypeOfferings` Submodule <a name="`dataAwsMqBrokerInstanceTypeOfferings` Submodule" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMqBrokerInstanceTypeOfferings <a name="DataAwsMqBrokerInstanceTypeOfferings" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/mq_broker_instance_type_offerings aws_mq_broker_instance_type_offerings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferings(Construct Scope, string Id, DataAwsMqBrokerInstanceTypeOfferingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig">DataAwsMqBrokerInstanceTypeOfferingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig">DataAwsMqBrokerInstanceTypeOfferingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetEngineType">ResetEngineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetHostInstanceType">ResetHostInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetStorageType">ResetStorageType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEngineType` <a name="ResetEngineType" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetEngineType"></a>

```csharp
private void ResetEngineType()
```

##### `ResetHostInstanceType` <a name="ResetHostInstanceType" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetHostInstanceType"></a>

```csharp
private void ResetHostInstanceType()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsMqBrokerInstanceTypeOfferings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsMqBrokerInstanceTypeOfferings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsMqBrokerInstanceTypeOfferings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsMqBrokerInstanceTypeOfferings.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsMqBrokerInstanceTypeOfferings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsMqBrokerInstanceTypeOfferings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsMqBrokerInstanceTypeOfferings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsMqBrokerInstanceTypeOfferings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/mq_broker_instance_type_offerings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsMqBrokerInstanceTypeOfferings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.brokerInstanceOptions">BrokerInstanceOptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.engineTypeInput">EngineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.hostInstanceTypeInput">HostInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.engineType">EngineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.hostInstanceType">HostInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BrokerInstanceOptions`<sup>Required</sup> <a name="BrokerInstanceOptions" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.brokerInstanceOptions"></a>

```csharp
public DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList BrokerInstanceOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList</a>

---

##### `EngineTypeInput`<sup>Optional</sup> <a name="EngineTypeInput" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.engineTypeInput"></a>

```csharp
public string EngineTypeInput { get; }
```

- *Type:* string

---

##### `HostInstanceTypeInput`<sup>Optional</sup> <a name="HostInstanceTypeInput" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.hostInstanceTypeInput"></a>

```csharp
public string HostInstanceTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.engineType"></a>

```csharp
public string EngineType { get; }
```

- *Type:* string

---

##### `HostInstanceType`<sup>Required</sup> <a name="HostInstanceType" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.hostInstanceType"></a>

```csharp
public string HostInstanceType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions <a name="DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions {

};
```


### DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones <a name="DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones {

};
```


### DataAwsMqBrokerInstanceTypeOfferingsConfig <a name="DataAwsMqBrokerInstanceTypeOfferingsConfig" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EngineType = null,
    string HostInstanceType = null,
    string Id = null,
    string Region = null,
    string StorageType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.engineType">EngineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/mq_broker_instance_type_offerings#engine_type DataAwsMqBrokerInstanceTypeOfferings#engine_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.hostInstanceType">HostInstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/mq_broker_instance_type_offerings#host_instance_type DataAwsMqBrokerInstanceTypeOfferings#host_instance_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/mq_broker_instance_type_offerings#id DataAwsMqBrokerInstanceTypeOfferings#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/mq_broker_instance_type_offerings#storage_type DataAwsMqBrokerInstanceTypeOfferings#storage_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EngineType`<sup>Optional</sup> <a name="EngineType" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.engineType"></a>

```csharp
public string EngineType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/mq_broker_instance_type_offerings#engine_type DataAwsMqBrokerInstanceTypeOfferings#engine_type}.

---

##### `HostInstanceType`<sup>Optional</sup> <a name="HostInstanceType" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.hostInstanceType"></a>

```csharp
public string HostInstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/mq_broker_instance_type_offerings#host_instance_type DataAwsMqBrokerInstanceTypeOfferings#host_instance_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/mq_broker_instance_type_offerings#id DataAwsMqBrokerInstanceTypeOfferings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/mq_broker_instance_type_offerings#region DataAwsMqBrokerInstanceTypeOfferings#region}

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/mq_broker_instance_type_offerings#storage_type DataAwsMqBrokerInstanceTypeOfferings#storage_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList <a name="DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.get"></a>

```csharp
private DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference <a name="DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference.property.internalValue"></a>

```csharp
public DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones</a>

---


### DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList <a name="DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.get"></a>

```csharp
private DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference <a name="DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.availabilityZones">AvailabilityZones</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.engineType">EngineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.hostInstanceType">HostInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.supportedDeploymentModes">SupportedDeploymentModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.supportedEngineVersions">SupportedEngineVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.availabilityZones"></a>

```csharp
public DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList AvailabilityZones { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList</a>

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.engineType"></a>

```csharp
public string EngineType { get; }
```

- *Type:* string

---

##### `HostInstanceType`<sup>Required</sup> <a name="HostInstanceType" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.hostInstanceType"></a>

```csharp
public string HostInstanceType { get; }
```

- *Type:* string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `SupportedDeploymentModes`<sup>Required</sup> <a name="SupportedDeploymentModes" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.supportedDeploymentModes"></a>

```csharp
public string[] SupportedDeploymentModes { get; }
```

- *Type:* string[]

---

##### `SupportedEngineVersions`<sup>Required</sup> <a name="SupportedEngineVersions" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.supportedEngineVersions"></a>

```csharp
public string[] SupportedEngineVersions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsMqBrokerInstanceTypeOfferings.DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions">DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions</a>

---



