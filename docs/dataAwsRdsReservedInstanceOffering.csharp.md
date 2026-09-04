# `dataAwsRdsReservedInstanceOffering` Submodule <a name="`dataAwsRdsReservedInstanceOffering` Submodule" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsReservedInstanceOffering <a name="DataAwsRdsReservedInstanceOffering" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering aws_rds_reserved_instance_offering}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRdsReservedInstanceOffering(Construct Scope, string Id, DataAwsRdsReservedInstanceOfferingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig">DataAwsRdsReservedInstanceOfferingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig">DataAwsRdsReservedInstanceOfferingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsRdsReservedInstanceOffering resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRdsReservedInstanceOffering.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRdsReservedInstanceOffering.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRdsReservedInstanceOffering.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRdsReservedInstanceOffering.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsRdsReservedInstanceOffering resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRdsReservedInstanceOffering to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRdsReservedInstanceOffering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRdsReservedInstanceOffering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.currencyCode">CurrencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fixedPrice">FixedPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringId">OfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClassInput">DbInstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAzInput">MultiAzInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringTypeInput">OfferingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescriptionInput">ProductDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClass">DbInstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAz">MultiAz</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringType">OfferingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescription">ProductDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.currencyCode"></a>

```csharp
public string CurrencyCode { get; }
```

- *Type:* string

---

##### `FixedPrice`<sup>Required</sup> <a name="FixedPrice" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fixedPrice"></a>

```csharp
public double FixedPrice { get; }
```

- *Type:* double

---

##### `OfferingId`<sup>Required</sup> <a name="OfferingId" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringId"></a>

```csharp
public string OfferingId { get; }
```

- *Type:* string

---

##### `DbInstanceClassInput`<sup>Optional</sup> <a name="DbInstanceClassInput" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClassInput"></a>

```csharp
public string DbInstanceClassInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAzInput"></a>

```csharp
public bool|IResolvable MultiAzInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OfferingTypeInput`<sup>Optional</sup> <a name="OfferingTypeInput" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringTypeInput"></a>

```csharp
public string OfferingTypeInput { get; }
```

- *Type:* string

---

##### `ProductDescriptionInput`<sup>Optional</sup> <a name="ProductDescriptionInput" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescriptionInput"></a>

```csharp
public string ProductDescriptionInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `DbInstanceClass`<sup>Required</sup> <a name="DbInstanceClass" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClass"></a>

```csharp
public string DbInstanceClass { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAz"></a>

```csharp
public bool|IResolvable MultiAz { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OfferingType`<sup>Required</sup> <a name="OfferingType" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringType"></a>

```csharp
public string OfferingType { get; }
```

- *Type:* string

---

##### `ProductDescription`<sup>Required</sup> <a name="ProductDescription" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescription"></a>

```csharp
public string ProductDescription { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsReservedInstanceOfferingConfig <a name="DataAwsRdsReservedInstanceOfferingConfig" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRdsReservedInstanceOfferingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DbInstanceClass,
    double Duration,
    bool|IResolvable MultiAz,
    string OfferingType,
    string ProductDescription,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dbInstanceClass">DbInstanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.duration">Duration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.multiAz">MultiAz</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.offeringType">OfferingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.productDescription">ProductDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DbInstanceClass`<sup>Required</sup> <a name="DbInstanceClass" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dbInstanceClass"></a>

```csharp
public string DbInstanceClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}.

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.multiAz"></a>

```csharp
public bool|IResolvable MultiAz { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}.

---

##### `OfferingType`<sup>Required</sup> <a name="OfferingType" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.offeringType"></a>

```csharp
public string OfferingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}.

---

##### `ProductDescription`<sup>Required</sup> <a name="ProductDescription" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.productDescription"></a>

```csharp
public string ProductDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/rds_reserved_instance_offering#region DataAwsRdsReservedInstanceOffering#region}

---



