# `dataAwsSavingsplansSavingsPlan` Submodule <a name="`dataAwsSavingsplansSavingsPlan` Submodule" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSavingsplansSavingsPlan <a name="DataAwsSavingsplansSavingsPlan" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/savingsplans_savings_plan aws_savingsplans_savings_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawssavingsplanssavingsplan"

dataawssavingsplanssavingsplan.NewDataAwsSavingsplansSavingsPlan(scope Construct, id *string, config DataAwsSavingsplansSavingsPlanConfig) DataAwsSavingsplansSavingsPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig">DataAwsSavingsplansSavingsPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig">DataAwsSavingsplansSavingsPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSavingsplansSavingsPlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawssavingsplanssavingsplan"

dataawssavingsplanssavingsplan.DataAwsSavingsplansSavingsPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawssavingsplanssavingsplan"

dataawssavingsplanssavingsplan.DataAwsSavingsplansSavingsPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawssavingsplanssavingsplan"

dataawssavingsplanssavingsplan.DataAwsSavingsplansSavingsPlan_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawssavingsplanssavingsplan"

dataawssavingsplanssavingsplan.DataAwsSavingsplansSavingsPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAwsSavingsplansSavingsPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsSavingsplansSavingsPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsSavingsplansSavingsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/savingsplans_savings_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSavingsplansSavingsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.commitment">Commitment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.currency">Currency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.ec2InstanceFamily">Ec2InstanceFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.offeringId">OfferingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.paymentOption">PaymentOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.productTypes">ProductTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.purchaseTime">PurchaseTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.recurringPaymentAmount">RecurringPaymentAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.returnableUntil">ReturnableUntil</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanArn">SavingsPlanArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanOfferingId">SavingsPlanOfferingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanType">SavingsPlanType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.termDurationInSeconds">TermDurationInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.upfrontPaymentAmount">UpfrontPaymentAmount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanIdInput">SavingsPlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanId">SavingsPlanId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.commitment"></a>

```go
func Commitment() *string
```

- *Type:* *string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.currency"></a>

```go
func Currency() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Ec2InstanceFamily`<sup>Required</sup> <a name="Ec2InstanceFamily" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.ec2InstanceFamily"></a>

```go
func Ec2InstanceFamily() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `OfferingId`<sup>Required</sup> <a name="OfferingId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.offeringId"></a>

```go
func OfferingId() *string
```

- *Type:* *string

---

##### `PaymentOption`<sup>Required</sup> <a name="PaymentOption" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.paymentOption"></a>

```go
func PaymentOption() *string
```

- *Type:* *string

---

##### `ProductTypes`<sup>Required</sup> <a name="ProductTypes" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.productTypes"></a>

```go
func ProductTypes() *[]*string
```

- *Type:* *[]*string

---

##### `PurchaseTime`<sup>Required</sup> <a name="PurchaseTime" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.purchaseTime"></a>

```go
func PurchaseTime() *string
```

- *Type:* *string

---

##### `RecurringPaymentAmount`<sup>Required</sup> <a name="RecurringPaymentAmount" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.recurringPaymentAmount"></a>

```go
func RecurringPaymentAmount() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReturnableUntil`<sup>Required</sup> <a name="ReturnableUntil" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.returnableUntil"></a>

```go
func ReturnableUntil() *string
```

- *Type:* *string

---

##### `SavingsPlanArn`<sup>Required</sup> <a name="SavingsPlanArn" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanArn"></a>

```go
func SavingsPlanArn() *string
```

- *Type:* *string

---

##### `SavingsPlanOfferingId`<sup>Required</sup> <a name="SavingsPlanOfferingId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanOfferingId"></a>

```go
func SavingsPlanOfferingId() *string
```

- *Type:* *string

---

##### `SavingsPlanType`<sup>Required</sup> <a name="SavingsPlanType" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanType"></a>

```go
func SavingsPlanType() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TermDurationInSeconds`<sup>Required</sup> <a name="TermDurationInSeconds" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.termDurationInSeconds"></a>

```go
func TermDurationInSeconds() *f64
```

- *Type:* *f64

---

##### `UpfrontPaymentAmount`<sup>Required</sup> <a name="UpfrontPaymentAmount" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.upfrontPaymentAmount"></a>

```go
func UpfrontPaymentAmount() *string
```

- *Type:* *string

---

##### `SavingsPlanIdInput`<sup>Optional</sup> <a name="SavingsPlanIdInput" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanIdInput"></a>

```go
func SavingsPlanIdInput() *string
```

- *Type:* *string

---

##### `SavingsPlanId`<sup>Required</sup> <a name="SavingsPlanId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanId"></a>

```go
func SavingsPlanId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSavingsplansSavingsPlanConfig <a name="DataAwsSavingsplansSavingsPlanConfig" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/dataawssavingsplanssavingsplan"

&dataawssavingsplanssavingsplan.DataAwsSavingsplansSavingsPlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SavingsPlanId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.savingsPlanId">SavingsPlanId</a></code> | <code>*string</code> | The ID of the Savings Plan. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SavingsPlanId`<sup>Required</sup> <a name="SavingsPlanId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.savingsPlanId"></a>

```go
SavingsPlanId *string
```

- *Type:* *string

The ID of the Savings Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/savingsplans_savings_plan#savings_plan_id DataAwsSavingsplansSavingsPlan#savings_plan_id}

---



