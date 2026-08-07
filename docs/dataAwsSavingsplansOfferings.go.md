# `dataAwsSavingsplansOfferings` Submodule <a name="`dataAwsSavingsplansOfferings` Submodule" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSavingsplansOfferings <a name="DataAwsSavingsplansOfferings" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings aws_savingsplans_offerings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

dataawssavingsplansofferings.NewDataAwsSavingsplansOfferings(scope Construct, id *string, config DataAwsSavingsplansOfferingsConfig) DataAwsSavingsplansOfferings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig">DataAwsSavingsplansOfferingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCurrencies` <a name="ResetCurrencies" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetCurrencies"></a>

```go
func ResetCurrencies()
```

##### `ResetDescriptions` <a name="ResetDescriptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetDescriptions"></a>

```go
func ResetDescriptions()
```

##### `ResetDurations` <a name="ResetDurations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetDurations"></a>

```go
func ResetDurations()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetOfferingIds` <a name="ResetOfferingIds" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOfferingIds"></a>

```go
func ResetOfferingIds()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOperations"></a>

```go
func ResetOperations()
```

##### `ResetPaymentOptions` <a name="ResetPaymentOptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetPaymentOptions"></a>

```go
func ResetPaymentOptions()
```

##### `ResetPlanTypes` <a name="ResetPlanTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetPlanTypes"></a>

```go
func ResetPlanTypes()
```

##### `ResetProductType` <a name="ResetProductType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetProductType"></a>

```go
func ResetProductType()
```

##### `ResetServiceCodes` <a name="ResetServiceCodes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetServiceCodes"></a>

```go
func ResetServiceCodes()
```

##### `ResetUsageTypes` <a name="ResetUsageTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetUsageTypes"></a>

```go
func ResetUsageTypes()
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

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

dataawssavingsplansofferings.DataAwsSavingsplansOfferings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

dataawssavingsplansofferings.DataAwsSavingsplansOfferings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

dataawssavingsplansofferings.DataAwsSavingsplansOfferings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

dataawssavingsplansofferings.DataAwsSavingsplansOfferings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsSavingsplansOfferings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsSavingsplansOfferings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsSavingsplansOfferings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSavingsplansOfferings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList">DataAwsSavingsplansOfferingsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offerings">Offerings</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList">DataAwsSavingsplansOfferingsOfferingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currenciesInput">CurrenciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptionsInput">DescriptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durationsInput">DurationsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIdsInput">OfferingIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operationsInput">OperationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptionsInput">PaymentOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypesInput">PlanTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productTypeInput">ProductTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodesInput">ServiceCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypesInput">UsageTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currencies">Currencies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptions">Descriptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durations">Durations</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIds">OfferingIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operations">Operations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptions">PaymentOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypes">PlanTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productType">ProductType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodes">ServiceCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypes">UsageTypes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filter"></a>

```go
func Filter() DataAwsSavingsplansOfferingsFilterList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList">DataAwsSavingsplansOfferingsFilterList</a>

---

##### `Offerings`<sup>Required</sup> <a name="Offerings" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offerings"></a>

```go
func Offerings() DataAwsSavingsplansOfferingsOfferingsList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList">DataAwsSavingsplansOfferingsOfferingsList</a>

---

##### `CurrenciesInput`<sup>Optional</sup> <a name="CurrenciesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currenciesInput"></a>

```go
func CurrenciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionsInput`<sup>Optional</sup> <a name="DescriptionsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptionsInput"></a>

```go
func DescriptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DurationsInput`<sup>Optional</sup> <a name="DurationsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durationsInput"></a>

```go
func DurationsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `OfferingIdsInput`<sup>Optional</sup> <a name="OfferingIdsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIdsInput"></a>

```go
func OfferingIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operationsInput"></a>

```go
func OperationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PaymentOptionsInput`<sup>Optional</sup> <a name="PaymentOptionsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptionsInput"></a>

```go
func PaymentOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PlanTypesInput`<sup>Optional</sup> <a name="PlanTypesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypesInput"></a>

```go
func PlanTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProductTypeInput`<sup>Optional</sup> <a name="ProductTypeInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productTypeInput"></a>

```go
func ProductTypeInput() *string
```

- *Type:* *string

---

##### `ServiceCodesInput`<sup>Optional</sup> <a name="ServiceCodesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodesInput"></a>

```go
func ServiceCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsageTypesInput`<sup>Optional</sup> <a name="UsageTypesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypesInput"></a>

```go
func UsageTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Currencies`<sup>Required</sup> <a name="Currencies" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currencies"></a>

```go
func Currencies() *[]*string
```

- *Type:* *[]*string

---

##### `Descriptions`<sup>Required</sup> <a name="Descriptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptions"></a>

```go
func Descriptions() *[]*string
```

- *Type:* *[]*string

---

##### `Durations`<sup>Required</sup> <a name="Durations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durations"></a>

```go
func Durations() *[]*f64
```

- *Type:* *[]*f64

---

##### `OfferingIds`<sup>Required</sup> <a name="OfferingIds" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIds"></a>

```go
func OfferingIds() *[]*string
```

- *Type:* *[]*string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operations"></a>

```go
func Operations() *[]*string
```

- *Type:* *[]*string

---

##### `PaymentOptions`<sup>Required</sup> <a name="PaymentOptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptions"></a>

```go
func PaymentOptions() *[]*string
```

- *Type:* *[]*string

---

##### `PlanTypes`<sup>Required</sup> <a name="PlanTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypes"></a>

```go
func PlanTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ProductType`<sup>Required</sup> <a name="ProductType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productType"></a>

```go
func ProductType() *string
```

- *Type:* *string

---

##### `ServiceCodes`<sup>Required</sup> <a name="ServiceCodes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodes"></a>

```go
func ServiceCodes() *[]*string
```

- *Type:* *[]*string

---

##### `UsageTypes`<sup>Required</sup> <a name="UsageTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypes"></a>

```go
func UsageTypes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSavingsplansOfferingsConfig <a name="DataAwsSavingsplansOfferingsConfig" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

&dataawssavingsplansofferings.DataAwsSavingsplansOfferingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Currencies: *[]*string,
	Descriptions: *[]*string,
	Durations: *[]*f64,
	Filter: interface{},
	OfferingIds: *[]*string,
	Operations: *[]*string,
	PaymentOptions: *[]*string,
	PlanTypes: *[]*string,
	ProductType: *string,
	ServiceCodes: *[]*string,
	UsageTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.currencies">Currencies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#currencies DataAwsSavingsplansOfferings#currencies}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.descriptions">Descriptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#descriptions DataAwsSavingsplansOfferings#descriptions}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.durations">Durations</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#durations DataAwsSavingsplansOfferings#durations}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.offeringIds">OfferingIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#offering_ids DataAwsSavingsplansOfferings#offering_ids}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.operations">Operations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#operations DataAwsSavingsplansOfferings#operations}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.paymentOptions">PaymentOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#payment_options DataAwsSavingsplansOfferings#payment_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.planTypes">PlanTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#plan_types DataAwsSavingsplansOfferings#plan_types}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.productType">ProductType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#product_type DataAwsSavingsplansOfferings#product_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.serviceCodes">ServiceCodes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#service_codes DataAwsSavingsplansOfferings#service_codes}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.usageTypes">UsageTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#usage_types DataAwsSavingsplansOfferings#usage_types}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Currencies`<sup>Optional</sup> <a name="Currencies" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.currencies"></a>

```go
Currencies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#currencies DataAwsSavingsplansOfferings#currencies}.

---

##### `Descriptions`<sup>Optional</sup> <a name="Descriptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.descriptions"></a>

```go
Descriptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#descriptions DataAwsSavingsplansOfferings#descriptions}.

---

##### `Durations`<sup>Optional</sup> <a name="Durations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.durations"></a>

```go
Durations *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#durations DataAwsSavingsplansOfferings#durations}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#filter DataAwsSavingsplansOfferings#filter}

---

##### `OfferingIds`<sup>Optional</sup> <a name="OfferingIds" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.offeringIds"></a>

```go
OfferingIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#offering_ids DataAwsSavingsplansOfferings#offering_ids}.

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.operations"></a>

```go
Operations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#operations DataAwsSavingsplansOfferings#operations}.

---

##### `PaymentOptions`<sup>Optional</sup> <a name="PaymentOptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.paymentOptions"></a>

```go
PaymentOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#payment_options DataAwsSavingsplansOfferings#payment_options}.

---

##### `PlanTypes`<sup>Optional</sup> <a name="PlanTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.planTypes"></a>

```go
PlanTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#plan_types DataAwsSavingsplansOfferings#plan_types}.

---

##### `ProductType`<sup>Optional</sup> <a name="ProductType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.productType"></a>

```go
ProductType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#product_type DataAwsSavingsplansOfferings#product_type}.

---

##### `ServiceCodes`<sup>Optional</sup> <a name="ServiceCodes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.serviceCodes"></a>

```go
ServiceCodes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#service_codes DataAwsSavingsplansOfferings#service_codes}.

---

##### `UsageTypes`<sup>Optional</sup> <a name="UsageTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.usageTypes"></a>

```go
UsageTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#usage_types DataAwsSavingsplansOfferings#usage_types}.

---

### DataAwsSavingsplansOfferingsFilter <a name="DataAwsSavingsplansOfferingsFilter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

&dataawssavingsplansofferings.DataAwsSavingsplansOfferingsFilter {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#name DataAwsSavingsplansOfferings#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#values DataAwsSavingsplansOfferings#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#name DataAwsSavingsplansOfferings#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/savingsplans_offerings#values DataAwsSavingsplansOfferings#values}.

---

### DataAwsSavingsplansOfferingsOfferings <a name="DataAwsSavingsplansOfferingsOfferings" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

&dataawssavingsplansofferings.DataAwsSavingsplansOfferingsOfferings {

}
```


### DataAwsSavingsplansOfferingsOfferingsProperties <a name="DataAwsSavingsplansOfferingsOfferingsProperties" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

&dataawssavingsplansofferings.DataAwsSavingsplansOfferingsOfferingsProperties {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSavingsplansOfferingsFilterList <a name="DataAwsSavingsplansOfferingsFilterList" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

dataawssavingsplansofferings.NewDataAwsSavingsplansOfferingsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSavingsplansOfferingsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.get"></a>

```go
func Get(index *f64) DataAwsSavingsplansOfferingsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsSavingsplansOfferingsFilterOutputReference <a name="DataAwsSavingsplansOfferingsFilterOutputReference" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

dataawssavingsplansofferings.NewDataAwsSavingsplansOfferingsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSavingsplansOfferingsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAwsSavingsplansOfferingsOfferingsList <a name="DataAwsSavingsplansOfferingsOfferingsList" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

dataawssavingsplansofferings.NewDataAwsSavingsplansOfferingsOfferingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSavingsplansOfferingsOfferingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.get"></a>

```go
func Get(index *f64) DataAwsSavingsplansOfferingsOfferingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSavingsplansOfferingsOfferingsOutputReference <a name="DataAwsSavingsplansOfferingsOfferingsOutputReference" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

dataawssavingsplansofferings.NewDataAwsSavingsplansOfferingsOfferingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSavingsplansOfferingsOfferingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.currency">Currency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.durationSeconds">DurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.offeringId">OfferingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.paymentOption">PaymentOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.planType">PlanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.productTypes">ProductTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList">DataAwsSavingsplansOfferingsOfferingsPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.serviceCode">ServiceCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.usageType">UsageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings">DataAwsSavingsplansOfferingsOfferings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.currency"></a>

```go
func Currency() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DurationSeconds`<sup>Required</sup> <a name="DurationSeconds" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.durationSeconds"></a>

```go
func DurationSeconds() *f64
```

- *Type:* *f64

---

##### `OfferingId`<sup>Required</sup> <a name="OfferingId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.offeringId"></a>

```go
func OfferingId() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `PaymentOption`<sup>Required</sup> <a name="PaymentOption" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.paymentOption"></a>

```go
func PaymentOption() *string
```

- *Type:* *string

---

##### `PlanType`<sup>Required</sup> <a name="PlanType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.planType"></a>

```go
func PlanType() *string
```

- *Type:* *string

---

##### `ProductTypes`<sup>Required</sup> <a name="ProductTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.productTypes"></a>

```go
func ProductTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.properties"></a>

```go
func Properties() DataAwsSavingsplansOfferingsOfferingsPropertiesList
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList">DataAwsSavingsplansOfferingsOfferingsPropertiesList</a>

---

##### `ServiceCode`<sup>Required</sup> <a name="ServiceCode" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.serviceCode"></a>

```go
func ServiceCode() *string
```

- *Type:* *string

---

##### `UsageType`<sup>Required</sup> <a name="UsageType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.usageType"></a>

```go
func UsageType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSavingsplansOfferingsOfferings
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings">DataAwsSavingsplansOfferingsOfferings</a>

---


### DataAwsSavingsplansOfferingsOfferingsPropertiesList <a name="DataAwsSavingsplansOfferingsOfferingsPropertiesList" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

dataawssavingsplansofferings.NewDataAwsSavingsplansOfferingsOfferingsPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsSavingsplansOfferingsOfferingsPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.get"></a>

```go
func Get(index *f64) DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference <a name="DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/dataawssavingsplansofferings"

dataawssavingsplansofferings.NewDataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties">DataAwsSavingsplansOfferingsOfferingsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsSavingsplansOfferingsOfferingsProperties
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties">DataAwsSavingsplansOfferingsOfferingsProperties</a>

---



