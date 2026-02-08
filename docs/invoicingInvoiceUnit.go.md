# `invoicingInvoiceUnit` Submodule <a name="`invoicingInvoiceUnit` Submodule" id="@cdktn/provider-aws.invoicingInvoiceUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InvoicingInvoiceUnit <a name="InvoicingInvoiceUnit" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit aws_invoicing_invoice_unit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/invoicinginvoiceunit"

invoicinginvoiceunit.NewInvoicingInvoiceUnit(scope Construct, id *string, config InvoicingInvoiceUnitConfig) InvoicingInvoiceUnit
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig">InvoicingInvoiceUnitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig">InvoicingInvoiceUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTaxInheritanceDisabled">ResetTaxInheritanceDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putTimeouts"></a>

```go
func PutTimeouts(value InvoicingInvoiceUnitTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRule` <a name="ResetRule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRule"></a>

```go
func ResetRule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTaxInheritanceDisabled` <a name="ResetTaxInheritanceDisabled" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTaxInheritanceDisabled"></a>

```go
func ResetTaxInheritanceDisabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a InvoicingInvoiceUnit resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/invoicinginvoiceunit"

invoicinginvoiceunit.InvoicingInvoiceUnit_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/invoicinginvoiceunit"

invoicinginvoiceunit.InvoicingInvoiceUnit_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/invoicinginvoiceunit"

invoicinginvoiceunit.InvoicingInvoiceUnit_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/invoicinginvoiceunit"

invoicinginvoiceunit.InvoicingInvoiceUnit_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a InvoicingInvoiceUnit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the InvoicingInvoiceUnit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing InvoicingInvoiceUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the InvoicingInvoiceUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList">InvoicingInvoiceUnitRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference">InvoicingInvoiceUnitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiverInput">InvoiceReceiverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabledInput">TaxInheritanceDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiver">InvoiceReceiver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabled">TaxInheritanceDisabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.rule"></a>

```go
func Rule() InvoicingInvoiceUnitRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList">InvoicingInvoiceUnitRuleList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeouts"></a>

```go
func Timeouts() InvoicingInvoiceUnitTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference">InvoicingInvoiceUnitTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `InvoiceReceiverInput`<sup>Optional</sup> <a name="InvoiceReceiverInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiverInput"></a>

```go
func InvoiceReceiverInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaxInheritanceDisabledInput`<sup>Optional</sup> <a name="TaxInheritanceDisabledInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabledInput"></a>

```go
func TaxInheritanceDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InvoiceReceiver`<sup>Required</sup> <a name="InvoiceReceiver" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiver"></a>

```go
func InvoiceReceiver() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TaxInheritanceDisabled`<sup>Required</sup> <a name="TaxInheritanceDisabled" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabled"></a>

```go
func TaxInheritanceDisabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### InvoicingInvoiceUnitConfig <a name="InvoicingInvoiceUnitConfig" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/invoicinginvoiceunit"

&invoicinginvoiceunit.InvoicingInvoiceUnitConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InvoiceReceiver: *string,
	Name: *string,
	Description: *string,
	Region: *string,
	Rule: interface{},
	Tags: *map[string]*string,
	TaxInheritanceDisabled: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.invoiceReceiver">InvoiceReceiver</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#invoice_receiver InvoicingInvoiceUnit#invoice_receiver}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#name InvoicingInvoiceUnit#name}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#description InvoicingInvoiceUnit#description}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#tags InvoicingInvoiceUnit#tags}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.taxInheritanceDisabled">TaxInheritanceDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#tax_inheritance_disabled InvoicingInvoiceUnit#tax_inheritance_disabled}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InvoiceReceiver`<sup>Required</sup> <a name="InvoiceReceiver" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.invoiceReceiver"></a>

```go
InvoiceReceiver *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#invoice_receiver InvoicingInvoiceUnit#invoice_receiver}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#name InvoicingInvoiceUnit#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#description InvoicingInvoiceUnit#description}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#region InvoicingInvoiceUnit#region}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#rule InvoicingInvoiceUnit#rule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#tags InvoicingInvoiceUnit#tags}.

---

##### `TaxInheritanceDisabled`<sup>Optional</sup> <a name="TaxInheritanceDisabled" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.taxInheritanceDisabled"></a>

```go
TaxInheritanceDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#tax_inheritance_disabled InvoicingInvoiceUnit#tax_inheritance_disabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.timeouts"></a>

```go
Timeouts InvoicingInvoiceUnitTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#timeouts InvoicingInvoiceUnit#timeouts}

---

### InvoicingInvoiceUnitRule <a name="InvoicingInvoiceUnitRule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/invoicinginvoiceunit"

&invoicinginvoiceunit.InvoicingInvoiceUnitRule {
	LinkedAccounts: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.property.linkedAccounts">LinkedAccounts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#linked_accounts InvoicingInvoiceUnit#linked_accounts}. |

---

##### `LinkedAccounts`<sup>Required</sup> <a name="LinkedAccounts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.property.linkedAccounts"></a>

```go
LinkedAccounts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#linked_accounts InvoicingInvoiceUnit#linked_accounts}.

---

### InvoicingInvoiceUnitTimeouts <a name="InvoicingInvoiceUnitTimeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/invoicinginvoiceunit"

&invoicinginvoiceunit.InvoicingInvoiceUnitTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#create InvoicingInvoiceUnit#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#delete InvoicingInvoiceUnit#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/invoicing_invoice_unit#update InvoicingInvoiceUnit#update}

---

## Classes <a name="Classes" id="Classes"></a>

### InvoicingInvoiceUnitRuleList <a name="InvoicingInvoiceUnitRuleList" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/invoicinginvoiceunit"

invoicinginvoiceunit.NewInvoicingInvoiceUnitRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) InvoicingInvoiceUnitRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.get"></a>

```go
func Get(index *f64) InvoicingInvoiceUnitRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### InvoicingInvoiceUnitRuleOutputReference <a name="InvoicingInvoiceUnitRuleOutputReference" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/invoicinginvoiceunit"

invoicinginvoiceunit.NewInvoicingInvoiceUnitRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) InvoicingInvoiceUnitRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccountsInput">LinkedAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccounts">LinkedAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkedAccountsInput`<sup>Optional</sup> <a name="LinkedAccountsInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccountsInput"></a>

```go
func LinkedAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LinkedAccounts`<sup>Required</sup> <a name="LinkedAccounts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccounts"></a>

```go
func LinkedAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### InvoicingInvoiceUnitTimeoutsOutputReference <a name="InvoicingInvoiceUnitTimeoutsOutputReference" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/invoicinginvoiceunit"

invoicinginvoiceunit.NewInvoicingInvoiceUnitTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InvoicingInvoiceUnitTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



