# `dataAwsSavingsplansOfferings` Submodule <a name="`dataAwsSavingsplansOfferings` Submodule" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSavingsplansOfferings <a name="DataAwsSavingsplansOfferings" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings aws_savingsplans_offerings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSavingsplansOfferings(Construct Scope, string Id, DataAwsSavingsplansOfferingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig">DataAwsSavingsplansOfferingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig">DataAwsSavingsplansOfferingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetCurrencies">ResetCurrencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetDescriptions">ResetDescriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetDurations">ResetDurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOfferingIds">ResetOfferingIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetPaymentOptions">ResetPaymentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetPlanTypes">ResetPlanTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetProductType">ResetProductType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetServiceCodes">ResetServiceCodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetUsageTypes">ResetUsageTypes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsSavingsplansOfferingsFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>[]

---

##### `ResetCurrencies` <a name="ResetCurrencies" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetCurrencies"></a>

```csharp
private void ResetCurrencies()
```

##### `ResetDescriptions` <a name="ResetDescriptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetDescriptions"></a>

```csharp
private void ResetDescriptions()
```

##### `ResetDurations` <a name="ResetDurations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetDurations"></a>

```csharp
private void ResetDurations()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetOfferingIds` <a name="ResetOfferingIds" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOfferingIds"></a>

```csharp
private void ResetOfferingIds()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOperations"></a>

```csharp
private void ResetOperations()
```

##### `ResetPaymentOptions` <a name="ResetPaymentOptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetPaymentOptions"></a>

```csharp
private void ResetPaymentOptions()
```

##### `ResetPlanTypes` <a name="ResetPlanTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetPlanTypes"></a>

```csharp
private void ResetPlanTypes()
```

##### `ResetProductType` <a name="ResetProductType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetProductType"></a>

```csharp
private void ResetProductType()
```

##### `ResetServiceCodes` <a name="ResetServiceCodes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetServiceCodes"></a>

```csharp
private void ResetServiceCodes()
```

##### `ResetUsageTypes` <a name="ResetUsageTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetUsageTypes"></a>

```csharp
private void ResetUsageTypes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSavingsplansOfferings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSavingsplansOfferings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSavingsplansOfferings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSavingsplansOfferings.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSavingsplansOfferings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsSavingsplansOfferings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSavingsplansOfferings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSavingsplansOfferings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSavingsplansOfferings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList">DataAwsSavingsplansOfferingsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offerings">Offerings</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList">DataAwsSavingsplansOfferingsOfferingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currenciesInput">CurrenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptionsInput">DescriptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durationsInput">DurationsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIdsInput">OfferingIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operationsInput">OperationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptionsInput">PaymentOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypesInput">PlanTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productTypeInput">ProductTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodesInput">ServiceCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypesInput">UsageTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currencies">Currencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptions">Descriptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durations">Durations</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIds">OfferingIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operations">Operations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptions">PaymentOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypes">PlanTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productType">ProductType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodes">ServiceCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypes">UsageTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filter"></a>

```csharp
public DataAwsSavingsplansOfferingsFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList">DataAwsSavingsplansOfferingsFilterList</a>

---

##### `Offerings`<sup>Required</sup> <a name="Offerings" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offerings"></a>

```csharp
public DataAwsSavingsplansOfferingsOfferingsList Offerings { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList">DataAwsSavingsplansOfferingsOfferingsList</a>

---

##### `CurrenciesInput`<sup>Optional</sup> <a name="CurrenciesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currenciesInput"></a>

```csharp
public string[] CurrenciesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionsInput`<sup>Optional</sup> <a name="DescriptionsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptionsInput"></a>

```csharp
public string[] DescriptionsInput { get; }
```

- *Type:* string[]

---

##### `DurationsInput`<sup>Optional</sup> <a name="DurationsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durationsInput"></a>

```csharp
public double[] DurationsInput { get; }
```

- *Type:* double[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filterInput"></a>

```csharp
public IResolvable|DataAwsSavingsplansOfferingsFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>[]

---

##### `OfferingIdsInput`<sup>Optional</sup> <a name="OfferingIdsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIdsInput"></a>

```csharp
public string[] OfferingIdsInput { get; }
```

- *Type:* string[]

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operationsInput"></a>

```csharp
public string[] OperationsInput { get; }
```

- *Type:* string[]

---

##### `PaymentOptionsInput`<sup>Optional</sup> <a name="PaymentOptionsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptionsInput"></a>

```csharp
public string[] PaymentOptionsInput { get; }
```

- *Type:* string[]

---

##### `PlanTypesInput`<sup>Optional</sup> <a name="PlanTypesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypesInput"></a>

```csharp
public string[] PlanTypesInput { get; }
```

- *Type:* string[]

---

##### `ProductTypeInput`<sup>Optional</sup> <a name="ProductTypeInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productTypeInput"></a>

```csharp
public string ProductTypeInput { get; }
```

- *Type:* string

---

##### `ServiceCodesInput`<sup>Optional</sup> <a name="ServiceCodesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodesInput"></a>

```csharp
public string[] ServiceCodesInput { get; }
```

- *Type:* string[]

---

##### `UsageTypesInput`<sup>Optional</sup> <a name="UsageTypesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypesInput"></a>

```csharp
public string[] UsageTypesInput { get; }
```

- *Type:* string[]

---

##### `Currencies`<sup>Required</sup> <a name="Currencies" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currencies"></a>

```csharp
public string[] Currencies { get; }
```

- *Type:* string[]

---

##### `Descriptions`<sup>Required</sup> <a name="Descriptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptions"></a>

```csharp
public string[] Descriptions { get; }
```

- *Type:* string[]

---

##### `Durations`<sup>Required</sup> <a name="Durations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durations"></a>

```csharp
public double[] Durations { get; }
```

- *Type:* double[]

---

##### `OfferingIds`<sup>Required</sup> <a name="OfferingIds" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIds"></a>

```csharp
public string[] OfferingIds { get; }
```

- *Type:* string[]

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operations"></a>

```csharp
public string[] Operations { get; }
```

- *Type:* string[]

---

##### `PaymentOptions`<sup>Required</sup> <a name="PaymentOptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptions"></a>

```csharp
public string[] PaymentOptions { get; }
```

- *Type:* string[]

---

##### `PlanTypes`<sup>Required</sup> <a name="PlanTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypes"></a>

```csharp
public string[] PlanTypes { get; }
```

- *Type:* string[]

---

##### `ProductType`<sup>Required</sup> <a name="ProductType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productType"></a>

```csharp
public string ProductType { get; }
```

- *Type:* string

---

##### `ServiceCodes`<sup>Required</sup> <a name="ServiceCodes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodes"></a>

```csharp
public string[] ServiceCodes { get; }
```

- *Type:* string[]

---

##### `UsageTypes`<sup>Required</sup> <a name="UsageTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypes"></a>

```csharp
public string[] UsageTypes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSavingsplansOfferingsConfig <a name="DataAwsSavingsplansOfferingsConfig" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSavingsplansOfferingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] Currencies = null,
    string[] Descriptions = null,
    double[] Durations = null,
    IResolvable|DataAwsSavingsplansOfferingsFilter[] Filter = null,
    string[] OfferingIds = null,
    string[] Operations = null,
    string[] PaymentOptions = null,
    string[] PlanTypes = null,
    string ProductType = null,
    string[] ServiceCodes = null,
    string[] UsageTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.currencies">Currencies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#currencies DataAwsSavingsplansOfferings#currencies}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.descriptions">Descriptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#descriptions DataAwsSavingsplansOfferings#descriptions}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.durations">Durations</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#durations DataAwsSavingsplansOfferings#durations}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.offeringIds">OfferingIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#offering_ids DataAwsSavingsplansOfferings#offering_ids}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.operations">Operations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#operations DataAwsSavingsplansOfferings#operations}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.paymentOptions">PaymentOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#payment_options DataAwsSavingsplansOfferings#payment_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.planTypes">PlanTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#plan_types DataAwsSavingsplansOfferings#plan_types}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.productType">ProductType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#product_type DataAwsSavingsplansOfferings#product_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.serviceCodes">ServiceCodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#service_codes DataAwsSavingsplansOfferings#service_codes}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.usageTypes">UsageTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#usage_types DataAwsSavingsplansOfferings#usage_types}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Currencies`<sup>Optional</sup> <a name="Currencies" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.currencies"></a>

```csharp
public string[] Currencies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#currencies DataAwsSavingsplansOfferings#currencies}.

---

##### `Descriptions`<sup>Optional</sup> <a name="Descriptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.descriptions"></a>

```csharp
public string[] Descriptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#descriptions DataAwsSavingsplansOfferings#descriptions}.

---

##### `Durations`<sup>Optional</sup> <a name="Durations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.durations"></a>

```csharp
public double[] Durations { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#durations DataAwsSavingsplansOfferings#durations}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsSavingsplansOfferingsFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#filter DataAwsSavingsplansOfferings#filter}

---

##### `OfferingIds`<sup>Optional</sup> <a name="OfferingIds" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.offeringIds"></a>

```csharp
public string[] OfferingIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#offering_ids DataAwsSavingsplansOfferings#offering_ids}.

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.operations"></a>

```csharp
public string[] Operations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#operations DataAwsSavingsplansOfferings#operations}.

---

##### `PaymentOptions`<sup>Optional</sup> <a name="PaymentOptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.paymentOptions"></a>

```csharp
public string[] PaymentOptions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#payment_options DataAwsSavingsplansOfferings#payment_options}.

---

##### `PlanTypes`<sup>Optional</sup> <a name="PlanTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.planTypes"></a>

```csharp
public string[] PlanTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#plan_types DataAwsSavingsplansOfferings#plan_types}.

---

##### `ProductType`<sup>Optional</sup> <a name="ProductType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.productType"></a>

```csharp
public string ProductType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#product_type DataAwsSavingsplansOfferings#product_type}.

---

##### `ServiceCodes`<sup>Optional</sup> <a name="ServiceCodes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.serviceCodes"></a>

```csharp
public string[] ServiceCodes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#service_codes DataAwsSavingsplansOfferings#service_codes}.

---

##### `UsageTypes`<sup>Optional</sup> <a name="UsageTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.usageTypes"></a>

```csharp
public string[] UsageTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#usage_types DataAwsSavingsplansOfferings#usage_types}.

---

### DataAwsSavingsplansOfferingsFilter <a name="DataAwsSavingsplansOfferingsFilter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSavingsplansOfferingsFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#name DataAwsSavingsplansOfferings#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#values DataAwsSavingsplansOfferings#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#name DataAwsSavingsplansOfferings#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/savingsplans_offerings#values DataAwsSavingsplansOfferings#values}.

---

### DataAwsSavingsplansOfferingsOfferings <a name="DataAwsSavingsplansOfferingsOfferings" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSavingsplansOfferingsOfferings {

};
```


### DataAwsSavingsplansOfferingsOfferingsProperties <a name="DataAwsSavingsplansOfferingsOfferingsProperties" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSavingsplansOfferingsOfferingsProperties {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSavingsplansOfferingsFilterList <a name="DataAwsSavingsplansOfferingsFilterList" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSavingsplansOfferingsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.get"></a>

```csharp
private DataAwsSavingsplansOfferingsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsSavingsplansOfferingsFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>[]

---


### DataAwsSavingsplansOfferingsFilterOutputReference <a name="DataAwsSavingsplansOfferingsFilterOutputReference" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSavingsplansOfferingsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsSavingsplansOfferingsFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>

---


### DataAwsSavingsplansOfferingsOfferingsList <a name="DataAwsSavingsplansOfferingsOfferingsList" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSavingsplansOfferingsOfferingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.get"></a>

```csharp
private DataAwsSavingsplansOfferingsOfferingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSavingsplansOfferingsOfferingsOutputReference <a name="DataAwsSavingsplansOfferingsOfferingsOutputReference" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSavingsplansOfferingsOfferingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.currency">Currency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.durationSeconds">DurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.offeringId">OfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.paymentOption">PaymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.planType">PlanType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.productTypes">ProductTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList">DataAwsSavingsplansOfferingsOfferingsPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.serviceCode">ServiceCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.usageType">UsageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings">DataAwsSavingsplansOfferingsOfferings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.currency"></a>

```csharp
public string Currency { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DurationSeconds`<sup>Required</sup> <a name="DurationSeconds" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.durationSeconds"></a>

```csharp
public double DurationSeconds { get; }
```

- *Type:* double

---

##### `OfferingId`<sup>Required</sup> <a name="OfferingId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.offeringId"></a>

```csharp
public string OfferingId { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `PaymentOption`<sup>Required</sup> <a name="PaymentOption" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.paymentOption"></a>

```csharp
public string PaymentOption { get; }
```

- *Type:* string

---

##### `PlanType`<sup>Required</sup> <a name="PlanType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.planType"></a>

```csharp
public string PlanType { get; }
```

- *Type:* string

---

##### `ProductTypes`<sup>Required</sup> <a name="ProductTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.productTypes"></a>

```csharp
public string[] ProductTypes { get; }
```

- *Type:* string[]

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.properties"></a>

```csharp
public DataAwsSavingsplansOfferingsOfferingsPropertiesList Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList">DataAwsSavingsplansOfferingsOfferingsPropertiesList</a>

---

##### `ServiceCode`<sup>Required</sup> <a name="ServiceCode" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.serviceCode"></a>

```csharp
public string ServiceCode { get; }
```

- *Type:* string

---

##### `UsageType`<sup>Required</sup> <a name="UsageType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.usageType"></a>

```csharp
public string UsageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsSavingsplansOfferingsOfferings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings">DataAwsSavingsplansOfferingsOfferings</a>

---


### DataAwsSavingsplansOfferingsOfferingsPropertiesList <a name="DataAwsSavingsplansOfferingsOfferingsPropertiesList" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSavingsplansOfferingsOfferingsPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.get"></a>

```csharp
private DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference <a name="DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties">DataAwsSavingsplansOfferingsOfferingsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsSavingsplansOfferingsOfferingsProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties">DataAwsSavingsplansOfferingsOfferingsProperties</a>

---



