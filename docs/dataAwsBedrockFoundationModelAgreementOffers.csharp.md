# `dataAwsBedrockFoundationModelAgreementOffers` Submodule <a name="`dataAwsBedrockFoundationModelAgreementOffers` Submodule" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockFoundationModelAgreementOffers <a name="DataAwsBedrockFoundationModelAgreementOffers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/bedrock_foundation_model_agreement_offers aws_bedrock_foundation_model_agreement_offers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffers(Construct Scope, string Id, DataAwsBedrockFoundationModelAgreementOffersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig">DataAwsBedrockFoundationModelAgreementOffersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig">DataAwsBedrockFoundationModelAgreementOffersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.resetOfferType">ResetOfferType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetOfferType` <a name="ResetOfferType" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.resetOfferType"></a>

```csharp
private void ResetOfferType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsBedrockFoundationModelAgreementOffers resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBedrockFoundationModelAgreementOffers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBedrockFoundationModelAgreementOffers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBedrockFoundationModelAgreementOffers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBedrockFoundationModelAgreementOffers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsBedrockFoundationModelAgreementOffers resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBedrockFoundationModelAgreementOffers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBedrockFoundationModelAgreementOffers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/bedrock_foundation_model_agreement_offers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockFoundationModelAgreementOffers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.offers">Offers</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList">DataAwsBedrockFoundationModelAgreementOffersOffersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.modelIdInput">ModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.offerTypeInput">OfferTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.offerType">OfferType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Offers`<sup>Required</sup> <a name="Offers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.offers"></a>

```csharp
public DataAwsBedrockFoundationModelAgreementOffersOffersList Offers { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList">DataAwsBedrockFoundationModelAgreementOffersOffersList</a>

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.modelIdInput"></a>

```csharp
public string ModelIdInput { get; }
```

- *Type:* string

---

##### `OfferTypeInput`<sup>Optional</sup> <a name="OfferTypeInput" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.offerTypeInput"></a>

```csharp
public string OfferTypeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `OfferType`<sup>Required</sup> <a name="OfferType" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.offerType"></a>

```csharp
public string OfferType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockFoundationModelAgreementOffersConfig <a name="DataAwsBedrockFoundationModelAgreementOffersConfig" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ModelId,
    string OfferType = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.modelId">ModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/bedrock_foundation_model_agreement_offers#model_id DataAwsBedrockFoundationModelAgreementOffers#model_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.offerType">OfferType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/bedrock_foundation_model_agreement_offers#offer_type DataAwsBedrockFoundationModelAgreementOffers#offer_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.modelId"></a>

```csharp
public string ModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/bedrock_foundation_model_agreement_offers#model_id DataAwsBedrockFoundationModelAgreementOffers#model_id}.

---

##### `OfferType`<sup>Optional</sup> <a name="OfferType" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.offerType"></a>

```csharp
public string OfferType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/bedrock_foundation_model_agreement_offers#offer_type DataAwsBedrockFoundationModelAgreementOffers#offer_type}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/bedrock_foundation_model_agreement_offers#region DataAwsBedrockFoundationModelAgreementOffers#region}

---

### DataAwsBedrockFoundationModelAgreementOffersOffers <a name="DataAwsBedrockFoundationModelAgreementOffersOffers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffers {

};
```


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails {

};
```


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm {

};
```


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm {

};
```


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm {

};
```


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard {

};
```


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockFoundationModelAgreementOffersOffersList <a name="DataAwsBedrockFoundationModelAgreementOffersOffersList" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.get"></a>

```csharp
private DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference <a name="DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.offerId">OfferId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.offerToken">OfferToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.termDetails">TermDetails</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffers">DataAwsBedrockFoundationModelAgreementOffersOffers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OfferId`<sup>Required</sup> <a name="OfferId" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.offerId"></a>

```csharp
public string OfferId { get; }
```

- *Type:* string

---

##### `OfferToken`<sup>Required</sup> <a name="OfferToken" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.offerToken"></a>

```csharp
public string OfferToken { get; }
```

- *Type:* string

---

##### `TermDetails`<sup>Required</sup> <a name="TermDetails" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.termDetails"></a>

```csharp
public DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList TermDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersOutputReference.property.internalValue"></a>

```csharp
public DataAwsBedrockFoundationModelAgreementOffersOffers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffers">DataAwsBedrockFoundationModelAgreementOffersOffers</a>

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.get"></a>

```csharp
private DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermOutputReference.property.internalValue"></a>

```csharp
public DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTerm</a>

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.get"></a>

```csharp
private DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.legalTerm">LegalTerm</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.supportTerm">SupportTerm</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.usageBasedPricingTerm">UsageBasedPricingTerm</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.validityTerm">ValidityTerm</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LegalTerm`<sup>Required</sup> <a name="LegalTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.legalTerm"></a>

```csharp
public DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList LegalTerm { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsLegalTermList</a>

---

##### `SupportTerm`<sup>Required</sup> <a name="SupportTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.supportTerm"></a>

```csharp
public DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList SupportTerm { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList</a>

---

##### `UsageBasedPricingTerm`<sup>Required</sup> <a name="UsageBasedPricingTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.usageBasedPricingTerm"></a>

```csharp
public DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList UsageBasedPricingTerm { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList</a>

---

##### `ValidityTerm`<sup>Required</sup> <a name="ValidityTerm" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.validityTerm"></a>

```csharp
public DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList ValidityTerm { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsOutputReference.property.internalValue"></a>

```csharp
public DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetails</a>

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.get"></a>

```csharp
private DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.refundPolicyDescription">RefundPolicyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RefundPolicyDescription`<sup>Required</sup> <a name="RefundPolicyDescription" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.refundPolicyDescription"></a>

```csharp
public string RefundPolicyDescription { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTermOutputReference.property.internalValue"></a>

```csharp
public DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsSupportTerm</a>

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.get"></a>

```csharp
private DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.rateCard">RateCard</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RateCard`<sup>Required</sup> <a name="RateCard" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.rateCard"></a>

```csharp
public DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList RateCard { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermOutputReference.property.internalValue"></a>

```csharp
public DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTerm</a>

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.get"></a>

```csharp
private DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.dimension">Dimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.price">Price</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.dimension"></a>

```csharp
public string Dimension { get; }
```

- *Type:* string

---

##### `Price`<sup>Required</sup> <a name="Price" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.price"></a>

```csharp
public string Price { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCardOutputReference.property.internalValue"></a>

```csharp
public DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsUsageBasedPricingTermRateCard</a>

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.get"></a>

```csharp
private DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference <a name="DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.agreementDuration">AgreementDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgreementDuration`<sup>Required</sup> <a name="AgreementDuration" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.agreementDuration"></a>

```csharp
public string AgreementDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTermOutputReference.property.internalValue"></a>

```csharp
public DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockFoundationModelAgreementOffers.DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm">DataAwsBedrockFoundationModelAgreementOffersOffersTermDetailsValidityTerm</a>

---



