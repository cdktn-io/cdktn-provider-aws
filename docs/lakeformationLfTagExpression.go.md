# `lakeformationLfTagExpression` Submodule <a name="`lakeformationLfTagExpression` Submodule" id="@cdktf/provider-aws.lakeformationLfTagExpression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationLfTagExpression <a name="LakeformationLfTagExpression" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/lakeformation_lf_tag_expression aws_lakeformation_lf_tag_expression}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lakeformationlftagexpression"

lakeformationlftagexpression.NewLakeformationLfTagExpression(scope Construct, id *string, config LakeformationLfTagExpressionConfig) LakeformationLfTagExpression
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig">LakeformationLfTagExpressionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig">LakeformationLfTagExpressionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.putExpression">PutExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExpression` <a name="PutExpression" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.putExpression"></a>

```go
func PutExpression(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.putExpression.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LakeformationLfTagExpression resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lakeformationlftagexpression"

lakeformationlftagexpression.LakeformationLfTagExpression_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lakeformationlftagexpression"

lakeformationlftagexpression.LakeformationLfTagExpression_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lakeformationlftagexpression"

lakeformationlftagexpression.LakeformationLfTagExpression_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lakeformationlftagexpression"

lakeformationlftagexpression.LakeformationLfTagExpression_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LakeformationLfTagExpression resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LakeformationLfTagExpression to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LakeformationLfTagExpression that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/lakeformation_lf_tag_expression#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationLfTagExpression to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.expression">Expression</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList">LakeformationLfTagExpressionExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.expressionInput">ExpressionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.expression"></a>

```go
func Expression() LakeformationLfTagExpressionExpressionList
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList">LakeformationLfTagExpressionExpressionList</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.expressionInput"></a>

```go
func ExpressionInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationLfTagExpressionConfig <a name="LakeformationLfTagExpressionConfig" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lakeformationlftagexpression"

&lakeformationlftagexpression.LakeformationLfTagExpressionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CatalogId: *string,
	Description: *string,
	Expression: interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.name">Name</a></code> | <code>*string</code> | The name of the LF-Tag Expression. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.catalogId">CatalogId</a></code> | <code>*string</code> | The ID of the Data Catalog. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.description">Description</a></code> | <code>*string</code> | A description of the LF-Tag Expression. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.expression">Expression</a></code> | <code>interface{}</code> | expression block. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the LF-Tag Expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/lakeformation_lf_tag_expression#name LakeformationLfTagExpression#name}

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

The ID of the Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/lakeformation_lf_tag_expression#catalog_id LakeformationLfTagExpression#catalog_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the LF-Tag Expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/lakeformation_lf_tag_expression#description LakeformationLfTagExpression#description}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.expression"></a>

```go
Expression interface{}
```

- *Type:* interface{}

expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/lakeformation_lf_tag_expression#expression LakeformationLfTagExpression#expression}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/lakeformation_lf_tag_expression#region LakeformationLfTagExpression#region}

---

### LakeformationLfTagExpressionExpression <a name="LakeformationLfTagExpressionExpression" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lakeformationlftagexpression"

&lakeformationlftagexpression.LakeformationLfTagExpressionExpression {
	TagKey: *string,
	TagValues: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/lakeformation_lf_tag_expression#tag_key LakeformationLfTagExpression#tag_key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.property.tagValues">TagValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/lakeformation_lf_tag_expression#tag_values LakeformationLfTagExpression#tag_values}. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/lakeformation_lf_tag_expression#tag_key LakeformationLfTagExpression#tag_key}.

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.property.tagValues"></a>

```go
TagValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/resources/lakeformation_lf_tag_expression#tag_values LakeformationLfTagExpression#tag_values}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationLfTagExpressionExpressionList <a name="LakeformationLfTagExpressionExpressionList" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lakeformationlftagexpression"

lakeformationlftagexpression.NewLakeformationLfTagExpressionExpressionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LakeformationLfTagExpressionExpressionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.get"></a>

```go
func Get(index *f64) LakeformationLfTagExpressionExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationLfTagExpressionExpressionOutputReference <a name="LakeformationLfTagExpressionExpressionOutputReference" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/lakeformationlftagexpression"

lakeformationlftagexpression.NewLakeformationLfTagExpressionExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LakeformationLfTagExpressionExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagValuesInput">TagValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagValues">TagValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagValuesInput`<sup>Optional</sup> <a name="TagValuesInput" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagValuesInput"></a>

```go
func TagValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagValues`<sup>Required</sup> <a name="TagValues" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagValues"></a>

```go
func TagValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



